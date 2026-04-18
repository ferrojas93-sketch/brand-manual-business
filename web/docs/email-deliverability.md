# Email deliverability · fix respuestas Fernando

_Actualizado 2026-04-18 · contexto: Fernando reporta que sus respuestas a leads no llegan (van a spam o son bloqueadas por receptor)._

## Diagnóstico

**Problema raíz**: el dominio `tramarca.es` no tenía registro SPF a nivel raíz. Cuando Fernando responde desde Gmail con `From: hola@tramarca.es`:

1. El servidor receptor hace SPF check contra `tramarca.es`
2. No encuentra record → SPF falla o queda neutral
3. DKIM firma con `gmail.com` (no `tramarca.es`) → no alinea con el From
4. DMARC alignment falla → email marcado como spam o rechazado

## Fix aplicado · DNS SPF root

Añadido vía `vercel dns add`:

```
TXT @ "v=spf1 include:amazonses.com include:_spf.google.com ~all"
```

Autoriza:
- `amazonses.com` · Resend relay (nuestro outbound transaccional)
- `_spf.google.com` · Gmail Send-As para respuestas manuales
- `~all` · soft-fail para emails que fallan (van a spam pero no rebotan)

**Estado DNS actual tramarca.es** (verificado):

| Record | Valor | Propósito |
|---|---|---|
| `@` TXT SPF | v=spf1 include:amazonses.com include:_spf.google.com ~all | **NUEVO** · autoriza outbound |
| `@` MX | 10 mx1/mx2.forwardemail.net | recepción catch-all → ferrojas93@gmail.com |
| `send` TXT SPF | v=spf1 include:amazonses.com ~all | SPF específico para subdominio Resend |
| `send` MX | 10 feedback-smtp.eu-west-1.amazonses.com | Resend SMTP |
| `resend._domainkey` TXT | p=MIGfMA0...DKIM | Firma DKIM Resend |
| `_dmarc` TXT | v=DMARC1; p=none; | Política DMARC monitor-only |

## Próximo paso obligatorio · Gmail Send-As con Resend SMTP

Para que las respuestas de Fernando lleguen como `hola@tramarca.es` y pasen SPF + DKIM + DMARC alineados:

### Paso 1 · Gmail → Settings → Accounts and Import → "Send mail as" → Add another email

- **Name**: Tramarca (Fernando Rojas Pacheco)
- **Email**: hola@tramarca.es
- **Treat as alias**: ☐ desmarcar (queremos SMTP custom)
- Next →

### Paso 2 · Configurar SMTP custom

- **SMTP Server**: `smtp.resend.com`
- **Port**: `587` (STARTTLS)
- **Username**: `resend`
- **Password**: el valor de `RESEND_API_KEY` (el mismo que está en Vercel env vars)
- **Secured connection using TLS**: ✓ marcar
- Save

### Paso 3 · Verificación

Gmail enviará un email de confirmación a `hola@tramarca.es`. Como está
configurado el Forward Email, llegará a `ferrojas93@gmail.com`. Copiar el
código de verificación y pegarlo en Gmail.

### Paso 4 · Marcar como remitente por defecto

En Gmail → Settings → Accounts and Import:
- **"When replying to a message"**: seleccionar "Reply from the same
  address the message was sent to"

Esto hace que al responder a leads que llegaron a `hola@tramarca.es`,
Gmail autocomplete el From correcto.

## Test procedure · verificar que funciona

### Test 1 · mail-tester.com (recomendado)

1. Ir a <https://www.mail-tester.com>
2. Copiar la dirección de prueba que te da (tipo `test-abc123@mail-tester.com`)
3. Desde Gmail, componer email nuevo:
   - **From**: hola@tramarca.es (debería aparecer en dropdown tras Send-As)
   - **To**: la dirección de prueba
   - **Subject**: Test deliverability Tramarca
   - **Body**: cualquier cosa
4. Enviar
5. En mail-tester.com hacer click en "Check your score"
6. Verificar resultado:
   - **SPF**: ✓ pass
   - **DKIM**: ✓ pass (signed by resend._domainkey.tramarca.es)
   - **DMARC**: ✓ pass
   - **Score**: 9.5/10 o superior

### Test 2 · envío real a amigo con Gmail o Outlook

1. Componer email desde hola@tramarca.es a un amigo en gmail.com
2. Amigo verifica:
   - ✅ Llega al inbox (no spam)
   - ✅ From muestra `hola@tramarca.es` (no `ferrojas93@gmail.com via gmail`)
   - ✅ Click en detalles → SPF pass, DKIM pass, DMARC pass

### Test 3 · respuesta a lead real

1. Simular un lead enviando email a `hola@tramarca.es` desde cuenta
   externa (amigo).
2. Fernando recibe en ferrojas93@gmail.com via Forward Email.
3. Fernando hace Reply.
4. Gmail debería usar `hola@tramarca.es` como From automáticamente.
5. El amigo verifica que llega al inbox normal.

## Tiempos de propagación

- **SPF record**: ya propagado (verificado `dig` devuelve valor correcto)
- **Gmail cache**: podría tardar 1-24h en que Gmail re-verifique SPF
- **Receptores cache**: algunos servidores (Outlook, Hotmail) cachean
  DNS 24h. Si test-email a cuenta Outlook falla inicialmente, reintentar
  al día siguiente.

## Upgrade futuro · DMARC p=quarantine

Tras 2-4 semanas de operación con el SPF root en su sitio (sin reportes
de delivery issues), subir DMARC de `p=none` a `p=quarantine`:

```bash
vercel dns rm rec_fdd5860a85976ec4bed79489  # remove p=none
vercel dns add tramarca.es _dmarc TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@tramarca.es; pct=100"
```

Esto activa enforcement: emails que fallan SPF/DKIM van directo a spam
en lugar de monitoreo pasivo. Requiere añadir antes:
- Un alias `dmarc@tramarca.es` en Forward Email para recibir reportes
- Verificar que no quedan fuentes legítimas no-autorizadas

## Troubleshooting

### Gmail Send-As no permite guardar SMTP custom

- Verificar que la RESEND_API_KEY es válida (sending permission, no restricted)
- Puede requerir regenerar API key con "Sending access" explícito

### Test mail-tester marca DKIM como fail

- Verificar DKIM record: `dig TXT resend._domainkey.tramarca.es +short`
- Debería devolver `p=MIGfMA0...` (clave pública Resend)
- Si no existe, re-verificar en dashboard Resend

### Emails llegan pero el receptor ve "via gmail.com"

- Confirmar que Send-As usa SMTP custom (no alias simple)
- Verificar en Gmail Settings que el SMTP aparece como `smtp.resend.com`
- No debería salir "via gmail.com" con config correcta

## Related

- `project_tramarca_web_security` · memoria con setup inicial Resend + Forward Email
- `feedback_tramarca_linkedin_only` · voz/comunicación solo LinkedIn
