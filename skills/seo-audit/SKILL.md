---
name: seo-audit
description: |
  Run a technical SEO audit on any URL or local project. Produces a scored report (0-100) 
  with prioritized fixes, copy-paste schema markup, and meta tag recommendations.
  Triggers on: "SEO audit", "audit SEO", "check SEO", "revisa el SEO", "technical SEO", 
  "schema markup", "meta tags", "sitemap".
---

# SEO Audit Skill

Self-contained 10-category SEO checklist. Produces scored report with actionable fixes. Strategy decisions (what keywords to target, content calendar) belong to the `seo-strategist` agent — this skill just audits what exists.

## Dependencies
- **WebFetch**: to retrieve page HTML and robots.txt
- **WebSearch**: for SERP position checks
- **Playwright MCP**: for screenshots, mobile rendering, CWV checks (optional but recommended)

## Input
- A URL (live site) OR local project path
- Target keywords (primary + 3-5 secondary) — ask user if not provided
- 2-3 competitor URLs (optional)

## Audit Categories

### 1. Crawlability & Indexing (12 points)
| Check | Pts | How |
|-------|-----|-----|
| robots.txt exists, doesn't block important pages | 3 | Fetch `/robots.txt` |
| XML sitemap exists and is valid | 3 | Fetch `/sitemap.xml` |
| Canonical tags present and self-referencing | 3 | Check `<link rel="canonical">` |
| No accidental `noindex` on important pages | 3 | Check `<meta name="robots">` |

### 2. Core Web Vitals (12 points)
| Check | Pts | How |
|-------|-----|-----|
| LCP < 2.5s | 4 | Playwright: measure load time, or ask user for PageSpeed results |
| INP < 200ms | 3 | Requires real user data or PageSpeed |
| CLS < 0.1 | 3 | Check images without dimensions, late-loading fonts |
| Images optimized (WebP/AVIF, sized, lazy) | 2 | Inspect `<img>` tags in HTML |

**Honest note on CWV**: Without PageSpeed Insights API key or Lighthouse CLI, we can only check proxy signals (image optimization, font loading, JS size). Recommend user runs `npx lighthouse [URL]` for real scores and shares results.

### 3. On-Page SEO (18 points)
| Check | Pts | How |
|-------|-----|-----|
| Title: 50-60 chars, keyword front-loaded | 4 | Read `<title>` |
| Meta description: 150-160 chars, keyword, CTA | 3 | Read `<meta description>` |
| H1: exactly one, contains primary keyword | 3 | Count H1 tags |
| Heading hierarchy: H1→H2→H3, no skips | 2 | Parse headings |
| Keyword in first 100 words | 2 | Read opening content |
| Image alt text: descriptive, keyword where natural | 2 | Check all `<img alt>` |
| Internal links: 3-5 per page, descriptive anchors | 2 | Count internal links |

### 4. Schema Markup (10 points)
| Check | Pts | How |
|-------|-----|-----|
| JSON-LD schema present | 3 | Check `<script type="application/ld+json">` |
| Schema type appropriate for page | 3 | Match page type |
| Schema validates (no obvious errors) | 2 | Validate structure |
| Breadcrumb schema if multi-level | 2 | Check BreadcrumbList |

Generate copy-paste JSON-LD for missing schema:
- **Homepage**: Organization + WebSite with SearchAction
- **Service page**: Service + Organization + Offer
- **Blog post**: Article + Person + BreadcrumbList
- **Portfolio**: CreativeWork + ItemList
- **Local business**: LocalBusiness + PostalAddress

**Deprecated** (do not generate): HowTo rich results, broad FAQ on every page, SpecialAnnouncement.

### 5. Content Architecture (10 points)
| Check | Pts | How |
|-------|-----|-----|
| Clear topic cluster structure | 3 | Map URL hierarchy |
| Pillar↔cluster internal links | 3 | Follow links |
| URL structure mirrors content hierarchy | 2 | Inspect URLs |
| No orphan pages | 2 | Crawl links |

### 6. Local SEO (10 points)
| Check | Pts | How |
|-------|-----|-----|
| Google Business Profile exists | 3 | WebSearch "[business name] site:google.com/maps" |
| NAP consistent (Name, Address, Phone) | 3 | Compare across site, GBP, directories |
| LocalBusiness schema on homepage | 2 | Check JSON-LD |
| Listed in relevant directories | 2 | WebSearch for business in local directories |

### 7. Mobile & Accessibility (10 points)
| Check | Pts | How |
|-------|-----|-----|
| Responsive (no horizontal scroll at 375px) | 3 | Playwright mobile viewport |
| Touch targets >= 48x48px | 2 | Inspect buttons |
| Body font >= 16px | 2 | Check CSS |
| Viewport meta tag correct | 1 | Check `<meta viewport>` |
| Alt text on all images | 2 | Check `<img>` tags |

### 8. Link Profile (6 points)
| Check | Pts | How |
|-------|-----|-----|
| No broken internal links (404) | 2 | Crawl internal links |
| No redirect chains (max 1 hop) | 2 | Follow redirects |
| External links use `rel="noopener"` | 1 | Check `<a>` tags |
| Most-linked pages = most important pages | 1 | Count link distribution |

### 9. AI-Friendly Content Structure (7 points)
| Check | Pts | How |
|-------|-----|-----|
| H2 sections are self-contained 400-600 token passages | 3 | Measure content chunks |
| Specific numbers, named methods, quotable statements | 2 | Read content quality |
| Entity naming consistent throughout | 2 | Search for variations |

### 10. E-E-A-T Signals (5 points)
| Check | Pts | How |
|-------|-----|-----|
| Author bio/about page with credentials | 2 | Look for author info |
| Contact info visible | 1 | Check footer/contact |
| HTTPS | 1 | Check protocol |
| Privacy policy / legal pages | 1 | Check footer |

**Total: 100 points**

## Scoring Logic
| Range | Status | Meaning |
|-------|--------|---------|
| 85-100 | Excellent | Minor optimizations only |
| 70-84 | Good | Fix important issues |
| 50-69 | Needs Work | Significant improvements needed |
| 0-49 | Critical | Major SEO problems |

## Output Format

```markdown
# SEO Audit Report
**URL**: [url]
**Date**: [date]
**Target Keywords**: [keywords]

## Overall Score: [X] / 100

### Score Breakdown
| Category | Score | Max | Status |
|----------|-------|-----|--------|
| Crawlability & Indexing | X | 12 | [status] |
| Core Web Vitals | X | 12 | [status] |
| On-Page SEO | X | 18 | [status] |
| Schema Markup | X | 10 | [status] |
| Content Architecture | X | 10 | [status] |
| Local SEO | X | 10 | [status] |
| Mobile & Accessibility | X | 10 | [status] |
| Link Profile | X | 6 | [status] |
| AI-Friendly Content | X | 7 | [status] |
| E-E-A-T | X | 5 | [status] |

### Critical (Fix Now)
1. **[Issue]**: [evidence] → **Fix**: [exact code/action]

### Important (Fix This Week)  
1. **[Issue]**: [evidence] → **Fix**: [exact code/action]

### Quick Wins (< 30 min)
1. **[Issue]** → [fix]

### Schema Markup (Copy-Paste)
[Generated JSON-LD]

### Meta Tags (Copy-Paste)
[Optimized title, description, OG tags, canonical]

### Content Recommendations
(Hand off to seo-strategist agent for full content strategy)
```
