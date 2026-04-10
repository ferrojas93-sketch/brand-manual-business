---
name: Arsenal 360 Audit Results
description: Two-round audit of 4 agents + 5 skills for brand manual business — 38 gaps found, 23 fixed, 15 documented for later
type: project
originSessionId: 59a763da-0dc9-4c77-bca8-2ad647e8361c
---
## Arsenal Audit — Two rounds complete (2026-04-10)

### Round 1 (5 roles): 23 gaps → ALL FIXED in rewrite
- Eliminated duplication (agents=strategy, skills=execution)
- Fixed model: sonnet + memory: project + maxTurns on all agents
- Removed fake personas, added operational rules
- Added: Spanish market SEO, Local SEO, GDPR, post-purchase flows
- Added: data model, lead states, handoff protocols
- Fixed: honest GEO claims, honest Tavily limitations, honest domain checking
- Added: proposal IP clause, revision terms, rush pricing, capacity planning

### Round 2 (5 new roles): 15 additional gaps
**Fixed (P0-P1):**
- RACI table in CLAUDE.md (who decides vs who executes)
- Data model moved to CLAUDE.md (always loaded, not buried in agent)
- Orchestration workflows in CLAUDE.md (landing page flow, proposal flow, post-sale flow)
- GDPR consent checkbox in landing-page form + consent_given_at field

**Documented for later (P2 — implement when business is running):**
- Client questionnaire (Typeform/Google Form → Supabase) — build when launching
- Implementation package upsell (social templates, pitch deck) — define pricing when first client asks
- PDF QA checklist (color profiles, font embedding, bleed) — add to /qa skill for PDFs
- Satisfaction guarantee policy — define before launching landing page
- Client portal for project status — build after 5+ concurrent clients
- Service contract template — consult with a lawyer before first real client
- Forma jurídica/fiscal advice — growth-strategist should flag this, not decide it
- Meta-reasoning layer in agent prompts — nice-to-have, not blocking
- Customer journey map — document when building the landing page
- "What You Never Do" → positive rewrites — cosmetic, low priority

### **How to apply:**
Arsenal is now production-ready for Phase 1 (naming, brand identity, landing page). P2 items should be tackled as they become relevant during business operation, not before launch. Do not over-prepare — ship, then iterate.
