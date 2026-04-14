# CSS Upgrade Research — Shamusic HTML→PDF Pipeline

**Fecha:** 2026-04-13
**Stack actual:** Python → HTML inline CSS → Playwright Chromium `page.pdf()` (A4 landscape)
**Criterio de inclusión:** repo activo (push en ~últimos 12 meses) + renderiza en Chromium headless + añade valor editorial concreto.

---

## TOP 5 — Recomendadas

### 1. Paged.js — `pagedjs/pagedjs`
- **GitHub:** https://github.com/pagedjs/pagedjs · **Stars:** 1.3k · **Último push:** 2026-04-10 (muy activo)
- **Qué añade:** Polyfill CSS Paged Media en el navegador. Desbloquea `@page :left/:right`, running headers/footers con `string-set`, márgenes por página nombrada, cross-references, `break-before/after` fiables, page numbering real. Chromium nativo ignora la mayoría de esto — Paged.js lo implementa en JS antes del `page.pdf()`.
- **Integración `build_v2.py`:** cargar `<script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js">` al HTML. En `render_pdf.py`, esperar `await page.wait_for_function("window.PagedPolyfill !== undefined && document.querySelector('.pagedjs_pages')")` antes de `page.pdf()`. Reemplazar paginación manual actual por flujo `@page { size: A4 landscape; @top-left { content: string(chapter); } }`.

### 2. Open Props — `argyleink/open-props`
- **GitHub:** https://github.com/argyleink/open-props · **Stars:** 5.3k · **Último push:** 2026-01-31
- **Qué añade:** ~500 custom properties ya definidas (escala tipográfica fluida, easings, shadows, gradients, sizes, colors OKLCH). Sustituye tu bloque `:root` artesanal por un sistema coherente sin Tailwind.
- **Integración:** `@import "https://unpkg.com/open-props";` o inline específico (`open-props/sizes`, `open-props/typography`). Úsalo solo como capa base; encima siguen tus tokens Shamusic (paleta Positioning Axis). Compatible 100% con Chromium print.

### 3. Modern Font Stacks — `system-fonts/modern-font-stacks`
- **GitHub:** https://github.com/system-fonts/modern-font-stacks · **Stars:** 3.4k · **Último push:** 2026-03-10
- **Qué añade:** Fallbacks tipográficos clasificados (Transitional, Old-Style, Humanist, Geometric Humanist, Monospace Slab...) para que si Google Fonts falla al cargar, el fallback no destroce el layout. Clave cuando Playwright tiene timeouts de red.
- **Integración:** reemplaza `font-family: 'Fraunces', serif;` por `font-family: 'Fraunces', Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, serif;` (stack "Old Style"). Cero runtime cost.

### 4. Chroma.js — `gka/chroma.js`
- **GitHub:** https://github.com/gka/chroma.js · **Stars:** 10.5k · **Último push:** 2026-03-27
- **Qué añade:** Manipulación color programática — generar escalas perceptualmente uniformes (LCH/OKLCH) desde los 2-3 colores de cada Positioning Axis. Útil para `toolkit.py` cuando derivas tints/shades de paleta; hoy lo haces a ojo.
- **Integración:** nodo aparte — `npm i chroma-js` en un step previo al build Python, o puerto Python (`colormath`). Alternativa: usar `oklch()` CSS nativo (Chromium 111+) sin librería, y solo chroma.js si necesitas generación previa.

### 5. CSS Anchor Positioning Polyfill — `oddbird/css-anchor-positioning`
- **GitHub:** https://github.com/oddbird/css-anchor-positioning · **Stars:** 482 · **Último push:** 2026-04-08
- **Qué añade:** Polyfill del spec `anchor-name`/`position-anchor`. Permite layouts editoriales asimétricos donde una nota al margen se ancla visualmente a una palabra del cuerpo — imposible hoy con `position:absolute` sin hardcode de coordenadas.
- **Integración:** `<script>` polyfill + `await window.CSS_ANCHOR_POLYFILL.apply()` antes de `page.pdf()`. Útil para pull quotes laterales y footnotes de página.

---

## DESCARTADAS (investigadas, no aplican)

- **WeasyPrint** (8.8k stars, activo): engine Python puro — reemplazaría Chromium entero. Pierdes fidelidad visual (no soporta `backdrop-filter`, variable fonts parciales, muchas CSS modernas). Downgrade para Shamusic.
- **Vivliostyle** (738 stars, activo): competidor Paged.js pero orientado a EPUB/libros largos. Overkill para 30-50pp y menos docs.
- **Gutenberg / Hartija / print CSS frameworks:** último push 2024 o anterior. Abandonados.
- **Pollen.dev:** no es un repo mantenido con tracción; Open Props lo supera.
- **Utopia.fyi (`utopia-core`):** último push 2024-09, solo calcula clamps. Puedes replicar con `clamp()` nativo en 3 líneas, no justifica dependencia.
- **Mesh.js / Coloris:** UX interactiva (pickers, gradient editors), no aplica a pipeline de render batch.
- **View Transitions / Container Queries / Subgrid:** ya nativos en Chromium, no necesitan librería. Úsalos directamente en CSS.
- **Drop cap libraries (dropcap.js de Adobe):** último push 2019. Usa `initial-letter` nativo + fallback `::first-letter { float:left; font-size:5em; }` — suficiente.

---

## Recomendación final

**Adoptar Paged.js + Modern Font Stacks ya** (ROI altísimo, integración <1h).
**Evaluar Open Props** como capa de tokens si refactorizas CSS base.
**Resto: esperar** — el stack actual Chromium+CSS nativo 2026 cubre el 90% sin librerías.
