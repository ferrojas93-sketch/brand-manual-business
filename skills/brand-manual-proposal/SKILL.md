---
name: brand-manual-proposal
description: |
  Generate professional PDF proposals for brand manual clients. Uses Python → HTML → Playwright → PDF.
  Input: client info + scope. Output: proposal PDF ready to send.
  Triggers on: "genera propuesta", "create proposal", "quote for client", "presupuesto", 
  "propuesta comercial".
---

# Brand Manual Proposal Generator

Generate client-ready PDF proposals using the validated Python → HTML → Playwright → PDF stack.

## Dependencies
- **Python 3.11+** with Playwright installed
- **Portfolio assets**: pre-rendered PNGs of existing manuals (must exist before first use)
- **Brand identity**: own brand tokens from creative-director (use defaults until defined)
- **Supabase**: proposal tracking (Proposal table from data model)

## Required Assets (Create Before First Use)

```
assets/
  portfolio/
    matraz-spread.png     # 2-3 page thumbnails from Matraz Innova manual
    claramel-spread.png   # 2-3 page thumbnails from Claramel manual  
    anfisbena-spread.png  # 2-3 page thumbnails from Anfisbena manual
  logo.svg                # Own business logo (placeholder: brand name in display font)
```

**To generate portfolio PNGs**: Open each manual PDF → screenshot 2-3 representative spreads → save as PNG at 300dpi minimum.

## Input

Gather from user (or from Supabase Lead/Brief records):

| Field | Required | Source |
|-------|----------|--------|
| Client name | Yes | Lead.name or Lead.company |
| Sector | Yes | Lead.sector |
| Contact person + role | Yes | Lead.name + Lead.role |
| Brand maturity | Yes | Lead.brand_maturity (new_brand / existing / rebrand) |
| Scope signals | No | Brief.special_requirements |
| Timeline | No | Brief.timeline (standard / rush / flexible) |
| Currency | No | Default EUR, support USD/MXN for LatAm |

## Proposal Structure (6 Sections, 6-8 Pages)

### Section 1: Cover
- Own logo/brand name at top
- "Propuesta de Manual de Marca"
- Client name prominently
- Date + auto-generated proposal number: `PROP-{YYYY}-{sequential_NNN}`
- Premium, clean aesthetic

### Section 2: Understanding
- Restate client's situation (shows listening)
- Why a brand manual matters for THEIR sector specifically
- Bridge to solution

Customize by sector:
- **Tech/SaaS**: consistency across digital touchpoints, scalability
- **Fashion/Luxury**: editorial quality, photography direction
- **Food/Hospitality**: packaging, in-store, menu guidelines
- **Healthcare**: compliance-ready, clear hierarchy, accessibility
- **Startups**: speed, investor-ready, growth-stage flexibility

### Section 3: Scope & Deliverables (3 Tiers)

```
ESENCIAL (20-25 pp)                    €400-600 + IVA
─────────────────────────────────────────────────────
✓ Logo guidelines        Ideal para startups
✓ Color palette          y marcas nuevas
✓ Typography system      
✓ Basic usage rules      Entrega: 1 semana
✓ Digital-ready PDF      

PROFESIONAL (30-35 pp)                 €800-1,200 + IVA
─────────────────────────────────────────────────────
✓ Everything in Esencial     Para empresas que
✓ Brand voice & messaging    necesitan consistencia
✓ Photography direction      profesional
✓ Social media templates     
✓ Stationery mockups         Entrega: 2 semanas
✓ Digital + print guidelines 

PREMIUM (40-50 pp)                     €1,500-2,400 + IVA
─────────────────────────────────────────────────────
✓ Everything in Profesional  Para marcas que
✓ Editorial design system    quieren destacar
✓ Motion guidelines          
✓ AI-generated mockups       Entrega: 3 semanas
✓ Brand architecture         
✓ Packaging guidelines       
```

**Rush surcharge**: +30-50% (standard), +75-100% (express, Esencial only).

Highlight recommended tier based on client's needs. Visual badge: "RECOMENDADO".

### Section 4: Portfolio
3 real manuals with:
- 2-3 page preview thumbnails
- Client name, sector, page count
- One-line highlight:
  - **Matraz Innova**: "33 páginas — consultoría farmacéutica. Precisión clínica con calidez de marca."
  - **Claramel**: "29 páginas — producto AI. Identidad tech-forward para inteligencia on-device."
  - **Anfisbena**: "43 páginas — punto editorial. Moda artesanal con acabado luxury."

### Section 5: Timeline & Process

```
Semana 1           Semana 2           Semana 3 (Premium)
─────────          ─────────          ─────────
Discovery          Diseño &           Refinamiento
& Estrategia       Producción         & Entrega

• Brand audit      • Layout &         • Revisiones finales
• Copywriting        tipografía       • PDF listo para imprenta
• Aprobación       • Mockups &        • Archivos fuente
  moodboard          imagery          • Sesión de handoff
                   • QA review          (30 min videollamada)
```

### Section 6: Terms & Next Steps

- **Pago**: 50% al confirmar, 50% a la entrega
- **Revisiones**: 2 rondas incluidas. Rondas adicionales: €100/ronda
- **Validez**: propuesta válida 30 días desde fecha de emisión
- **Propiedad intelectual**: el cliente recibe todos los derechos sobre el manual finalizado. Portfolio showcase: incluido salvo acuerdo contrario.
- **CTA**: "Para arrancar, responde a este email con el tier elegido y te enviamos la factura del 50% inicial."
- **Contacto**: nombre, email, teléfono

## Technical Implementation

```python
# proposal_generator.py — skeleton
# Uses same architecture as brand manuals: one function per section

from playwright.sync_api import sync_playwright
from datetime import datetime

def generate_proposal(
    client_name: str,
    sector: str,
    contact_person: str,
    contact_role: str,
    brand_maturity: str,  # new_brand | existing | rebrand
    recommended_tier: str,  # esencial | profesional | premium
    timeline: str = "standard",  # standard | rush | flexible
    currency: str = "EUR",
    proposal_number: str = None,
) -> str:
    """Generate proposal HTML and render to PDF. Returns PDF path."""
    
    if not proposal_number:
        proposal_number = f"PROP-{datetime.now().strftime('%Y')}-{next_sequence_number():03d}"
    
    html = render_proposal_html(
        client_name=client_name,
        sector=sector,
        contact_person=contact_person,
        contact_role=contact_role,
        brand_maturity=brand_maturity,
        recommended_tier=recommended_tier,
        timeline=timeline,
        currency=currency,
        proposal_number=proposal_number,
        date=datetime.now().strftime("%d/%m/%Y"),
    )
    
    pdf_path = f"proposals/{proposal_number}.pdf"
    
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_content(html)
        page.pdf(
            path=pdf_path,
            format="A4",          # Portrait for proposals
            print_background=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        )
        browser.close()
    
    return pdf_path


def render_proposal_html(**kwargs) -> str:
    """Compose full proposal HTML from section functions."""
    sections = [
        render_cover(**kwargs),
        render_understanding(**kwargs),
        render_scope(**kwargs),
        render_portfolio(**kwargs),
        render_timeline(**kwargs),
        render_terms(**kwargs),
    ]
    
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>{get_proposal_styles()}</style>
</head>
<body>
    {"".join(sections)}
</body>
</html>"""


# Each section function returns HTML string
# render_cover(), render_understanding(), render_scope(), 
# render_portfolio(), render_timeline(), render_terms()
# Implementation follows same pattern as brand manual pages.
```

**Note**: This is the skeleton. Full implementation requires building out each `render_*` function with HTML/CSS matching own brand identity. Do this once brand identity is defined.

## Supabase Integration

After generating proposal:
```typescript
// Record proposal in database
await supabase.from('proposals').insert({
  brief_id: brief.id,
  number: proposalNumber,
  tier: recommendedTier,
  price: tierPrice,
  currency: 'EUR',
  pdf_url: pdfUrl,  // Supabase Storage or local path
  status: 'draft',
  valid_until: addDays(new Date(), 30),
});

// After sending to client:
await supabase.from('proposals').update({ 
  status: 'sent', 
  sent_at: new Date() 
}).eq('number', proposalNumber);

// Update lead stage
await supabase.from('leads').update({ 
  stage: 'proposal_sent' 
}).eq('id', lead.id);
```

## Quality Checklist
- [ ] Client name spelled correctly throughout
- [ ] Sector-specific language in Understanding
- [ ] Recommended tier highlighted
- [ ] Portfolio thumbnails render clearly
- [ ] Pricing current + IVA mentioned
- [ ] Timeline matches tier
- [ ] Proposal number unique and sequential
- [ ] PDF renders cleanly in A4 portrait
- [ ] No placeholder text
- [ ] Contact info and CTA clear
- [ ] Terms include revision limit and IP clause
