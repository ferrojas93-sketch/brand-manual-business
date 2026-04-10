---
name: competitive-intel
description: |
  Analyze competitors systematically: crawl websites, compare pricing/positioning/SEO, 
  score objectively, generate positioning maps, identify gaps.
  Triggers on: "competitive analysis", "competitor research", "analiza competencia",
  "compare competitors", "market positioning", "pricing comparison", "who else does this".
---

# Competitive Intelligence

Execution skill for competitor research. Produces structured data. Strategy decisions (where to position, how to price) belong to `growth-strategist` agent.

## Dependencies
- **WebSearch**: finding competitors, SERP analysis
- **WebFetch**: crawling competitor sites for pricing, copy, structure
- **Playwright MCP** (optional): screenshots for visual comparison

## Process

### Step 1: Identify Competitors (3 Rings)

**Ring 1 — Direct** (same service, same market):
```
WebSearch: "brand manual service Spain", "manual de marca freelancer"
```

**Ring 2 — Adjacent** (similar service, different angle):
```
WebSearch: "branding agency small business", "brand identity package"
```

**Ring 3 — Substitutes** (different solution, same problem):
```
DIY: Canva brand kits, Looka, 99designs
Templates: Etsy brand guideline templates, Creative Market
Big: full-service agencies (price anchor, not direct competition)
```

### Step 2: Profile Each Competitor

For each, gather via WebFetch + WebSearch:

```markdown
## Competitor: [Name]
- **URL**: [url]
- **Location**: [city/country]
- **Team**: solo / small agency / large agency
- **Services**: what they sell
- **Deliverables**: what client gets
- **Pricing**: per-project / packages / custom (exact numbers if public)
- **Turnaround**: stated delivery time
- **H1/Tagline**: how they describe themselves
- **Target audience**: who they clearly serve
- **Differentiator**: what they claim is unique
- **Portfolio quality**: 1-5 (based on visible work)
- **Content/blog**: exists? quality? frequency?
- **Social presence**: LinkedIn, IG — followers, engagement
- **Reviews**: Google reviews count + average, testimonials on site
- **SEO keywords**: what queries show them (WebSearch their brand + service terms)
```

### Step 3: Scoring Matrix

Score each competitor objectively (1-5):

| Factor | Weight | What to Score |
|--------|--------|--------------|
| Portfolio quality | 5x | Visible work sophistication |
| Pricing clarity | 4x | Can you understand what it costs? |
| SEO visibility | 4x | Do they rank for target keywords? |
| Social proof | 3x | Reviews, testimonials, logos |
| Content quality | 3x | Blog, resources, education |
| Website UX | 2x | Professional, fast, clear? |
| Differentiator strength | 3x | Is their positioning unique? |

**Total max: 120 points.** Calculate percentage for comparison.

### Step 4: Comparison Matrix

```markdown
| Factor | Us | Comp 1 | Comp 2 | Comp 3 |
|--------|-----|--------|--------|--------|
| Price range | €X-Y | €X-Y | €X-Y | €X-Y |
| Pages delivered | X-Y | X-Y | X-Y | X-Y |
| Turnaround | X days | X days | X days | X days |
| Portfolio score | X/5 | X/5 | X/5 | X/5 |
| SEO score | X/5 | X/5 | X/5 | X/5 |
| Reviews | X (avg) | X (avg) | X (avg) | X (avg) |
| Unique feature | [what] | [what] | [what] | [what] |
| Biggest weakness | [what] | [what] | [what] | [what] |
```

### Step 5: Positioning Map

Plot on two strategic axes:

```
                    HIGH PRICE
                        |
    Big Agency ○        |        ○ Boutique Studio
                        |
                        |
   ─────────────────────┼─────────────────────
                        |
                        |    ★ Target Position
    Freelancer ○        |        ○ Template Service
                        |
                    LOW PRICE
   GENERIC ─────────────────────────── SPECIALIZED
```

**The goal**: find the quadrant with DEMAND but no SUPPLY.

Recommended axis pairs (choose most relevant):
- Price vs. Service Level (self-serve ↔ full-service)
- Price vs. Quality (template ↔ bespoke)
- Speed vs. Depth (quick ↔ comprehensive)
- Generic vs. Specialized (all industries ↔ niche)

### Step 6: Gap Analysis

```markdown
### Pricing Gaps
- [Gap]: competitors charge €X or €Y, nothing between
- **Opportunity**: position at €Z

### Service Gaps
- [Gap]: no one offers [thing]
- **Opportunity**: include as standard

### Audience Gaps
- [Gap]: everyone targets [A], no one serves [B]
- **Opportunity**: specialize in [B]

### Content Gaps
- [Gap]: no competitor has good content about [topic]
- **Opportunity**: own that keyword/topic

### Trust Gaps
- [Gap]: weak portfolios, no case studies
- **Opportunity**: invest in showcase work
```

## Output Format

```markdown
# Competitive Intelligence Report
**Market**: [market]
**Date**: [date]
**Competitors analyzed**: [N]

## Competitor Profiles
[One profile per competitor]

## Scoring Leaderboard
| Rank | Competitor | Score | Strongest | Weakest |
|------|-----------|-------|-----------|---------|

## Comparison Matrix
[Side-by-side table]

## Positioning Map
[ASCII map with all competitors plotted]

## Top 5 Gaps (Prioritized by Opportunity Size)
1. [Gap] — Opportunity: [specific action]

## Recommended Position
"For [audience] who [need], we offer [solution] that [differentiator], 
unlike [main alternative] which [limitation]."

## Data for growth-strategist
- Price floor: €[X] (below = perceived low quality)
- Price ceiling: €[X] (above = competing with agencies)
- Sweet spot: €[X]-€[Y]
- Primary differentiators to emphasize: [list]
- Keywords competitors rank for that we should target: [list]
```
