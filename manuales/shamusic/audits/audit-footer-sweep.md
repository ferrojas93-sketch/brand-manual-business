# SHAMUSIC — Auditoría footer-collision (54/54 páginas)

Sweep exhaustivo buscando colisión de contenido con metastrip (`bottom:8mm`, ~6mm alto). Safe-zone requerida: ≥18mm desde borde inferior. Solo se reportan BLOCKERs y MAJORs.

## Páginas con collision

| Página | Severidad | Qué texto/elemento colisiona | Px approx desde borde inferior |
|---|---|---|---|
| p06 | BLOCKER | Fila "05 · Honestidad" — descripción "No prometemos virales. Prometemos la prueba… El viral, una semana." La 2ª línea "semana." queda clipada/fundida con la metastrip | ~10-12mm |
| p07 | BLOCKER | Panel inferior derecho (pilar 04 "Discovery" + GLUE "Mantra") — caption specs fila baja ("Tu música. Tu copyright. Tu dinero.") se solapa con "P.07 / 54" | ~8-10mm |
| p12 | BLOCKER | Fila inferior de 3 cards — captions explicativas ("Sin drop-shadow, sin glow, sin contorno." / "1X de aire mínimo siempre." / "Magenta+rojo+naranja → ilegible") cruzan la línea del metastrip | ~6-10mm |
| p22 | MAJOR | Última fila "Rompen la rejilla. Solo en captions de redes sociales." | ~14mm |
| p27 | MAJOR | Párrafo cierre "Cada icono nace del mismo grid de 24×24… se ve como parte de la misma familia." | ~12-14mm |
| p29 | BLOCKER | Párrafo caption derecho "El retrato Shamusic captura a artistas emergentes con intención editorial — Resident Advisor meets Apartamento. Nunca sonrisa publicitaria, nunca luz plana." — se fusiona con la línea "SHAMUSIC · MANUAL DE MARCA · DUOTONO · P.29 / 54" | ~6-8mm |
| p30 | MAJOR | Bloque derecho "MADRID · BCN · CORK · BUENOS AIRES" + párrafo "Interiores moody…" cae muy cerca del strip | ~12-14mm |
| p37 | MAJOR | Párrafo cierre derecho "Esta plantilla codifica 12 meses de reconocimiento. Cada poster sigue exactamente esta estructura…" | ~12mm |
| p40 | BLOCKER | Línea única "Estructura canónica: 01 HOOK · 02-06 contenido alternando midnight/paper · 07 mantra fondo magenta · 08 CTA con URL." corre prácticamente sobre la baseline del metastrip | ~8mm |
| p44 | MAJOR | Caption "Cada Sessions tiene poster único. La serialización visual genera reconocimiento en el scroll — el mismo sistema, artistas distintas, consistencia de 12 meses." | ~12-14mm |
| p50 | MAJOR | Pie derecho email transaccional ("— EL EQUIPO DE SHAMUSIC · SHAMUSIC.ES · MADRID") — línea fina encima del metastrip | ~12mm |

## Páginas limpias

p01, p02, p03, p04, p05, p08, p09, p10, p11, p13, p14, p15, p16, p17, p18, p19, p20, p21, p23, p24 (página sin metastrip — split full-bleed intencional), p25, p26, p28, p31, p32, p33, p34, p35, p36, p38, p39, p41, p42, p43, p45, p46, p47, p48, p49, p51, p52, p53, p54.

## Veredicto

**11 páginas con collision (5 BLOCKER + 6 MAJOR) · 43 limpias · NO ENVIABLE hasta fixar los 5 BLOCKERs (p06, p07, p12, p29, p40).**

Patrón detectado: todas las páginas afectadas son layouts personalizados (grids de cards, splits con paneles de specs, paneles dark que rompen el `.m-pad-lg`). Los chapter-openers y páginas con `.m-pad-lg` estándar están todas limpias. Aplicar en cada caso un `padding-bottom:30mm` al contenedor interior del layout custom.
