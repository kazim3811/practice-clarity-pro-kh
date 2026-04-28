# UI Critique — supergpapp.co.uk

**Reviewed:** April 2026  
**Type:** Mobile landing page  
**Built on:** Lovable (React SPA)

---

## Summary

The site communicates the right message but reads as template-generated. The dark-neon aesthetic, gradient headlines, and icon-grid layout are patterns overused across AI-built SaaS products. The fixes below are targeted at making it feel considered and human.

---

## Issues & Fixes

### 1. Typography

**Problems**
- Gradient text on hero headline ("It's costing you more than you think!) — a default AI/SaaS styling trope
- Too many font weight shifts in quick succession — hierarchy feels arbitrary
- Yellow text highlight on hero feels like a template default, not a brand decision

**Fixes**
- Remove gradient text. Use plain white, heavier weight, editorial treatment
- Limit to two weights per section: one for headline, one for body
- Replace highlight colour with a deliberate brand-level choice (see Colour section)

---

### 2. Colour & Visual Language

**Problems**
- Dark background + neon yellow/green accent = canonical Lovable/Framer AI template palette
- Green gradient stat boxes (70%, 40% etc.) look lifted from a template library
- No photographic warmth or texture — pure digital sterility throughout

**Fixes**
- Swap neon yellow for a muted warm tone: olive `#6B6B3A`, sand `#C9B99A`, or terracotta `#C26B4A`
- Change background from pure black to warm charcoal: `#1A1714` or dark navy `#0F1520`
- Redesign stat section with editorial layout — oversized number, small offset label — instead of icon-box grid

---

### 3. Layout Patterns

**Problems**
- Scrolling pain-point cards are a common AI landing page pattern — every Lovable/Framer template uses this
- Icon + stat + label grid is a direct template component
- Team photo section breaks the dark theme with no visual bridge — feels pasted in

**Fixes**
- Replace scrolling cards with a single bold callout or a real GP quote (block quote treatment, serif font)
- Replace stat grid with an offset editorial layout or a single-column narrative stat section
- Give the team section a full-bleed photo with offset crop and a warm background block to bridge the colour transition

---

### 4. Copy Presentation

**Problems**
- Short stacked punchy lines everywhere = AI copywriting pattern
- "Built by People Who Get It" is a stock AI-generated trust-section header
- Stat callouts (70%, 40%) lack source attribution — reduces credibility

**Fixes**
- Mix line lengths. Not every statement needs to be two words per line
- Rewrite trust section header to something specific: the founders' names, years of NHS experience, or a concrete credential
- Add source or methodology note under any stats used

---

### 5. Components & UI Details

**Problems**
- CTA buttons use a full pill (high border-radius) — the default AI-generated button shape
- No visual variation between section types — all sections feel the same weight
- Pain point cards have identical visual treatment — no priority or emphasis

**Fixes**
- Reduce button radius to subtle rounded rect (`border-radius: 6–8px`) — immediately more considered
- Alternate section backgrounds: pure dark → warm charcoal → dark — creates rhythm
- Give one pain point card a distinct treatment (larger, featured) to show hierarchy

---

### 6. Font

**Current:** Sans-serif throughout (system/default)

Font choice is a positioning decision, not just a style preference. The right direction depends on how SuperGP wants to be perceived.

---

#### Option A — Credible & Trustworthy (Recommended for GP/NHS buyer)

Serifs carry strong cultural associations with medicine, law, and finance — the FT, The Economist, NHS communications all use them. A serif headline signals: established, considered, safe to trust.

Almost every AI-generated UI defaults to sans-serif (Inter, DM Sans, Plus Jakarta Sans). A serif immediately reads as a deliberate choice.

Recommended:
- **Fraunces** — editorial, warm, modern
- **DM Serif Display** — clean, professional
- **Playfair Display** — trusted, established feel

Pairing: Serif H1/H2 + Inter or DM Sans for body copy.

---

#### Option B — Fast, Modern, Disruptive (If repositioning as challenger brand)

If SuperGP wants to signal speed, innovation, and disruption over heritage, a well-chosen geometric sans with strong typographic discipline works better than serif. Serif leans into credibility; geometric sans leans into momentum.

**Geometric Sans — Clean & Confident**
- **Geist** — Technical, precise, zero fluff. Strong challenger energy
- **Outfit** — Friendly geometric, slightly rounded. Modern without feeling cold
- **Space Grotesk** — Slightly quirky letterforms. Feels engineered, not corporate

**High Contrast Sans — Bold & Editorial**
- **Syne** — Distinctive wide letterforms. Uncommon in SaaS — stands out immediately
- **Satoshi** — Sharp, confident, premium. Used across well-designed startups right now
- **Cabinet Grotesk** — Variable weight, strong personality at large sizes

**Condensed / Display — Maximum Impact**
- **Barlow Condensed** — Tight, punchy, works well for hero headlines
- **Bebas Neue** — Very bold, all-caps only. High energy but limited flexibility

**Best single recommendation for Option B:** **Satoshi** (headlines) + **Inter** (body). Satoshi is not a Google Fonts default, not a Lovable template. It signals craft without trying too hard. Available free via [fontshare.com](https://www.fontshare.com/fonts/satoshi).

---

#### Which to choose?

| Positioning | Font Direction | Signals |
|---|---|---|
| Trusted partner for GP practices | Serif (Fraunces, DM Serif) | Safe, established, credible |
| Challenger disrupting admin chaos | Geometric sans (Satoshi, Geist) | Fast, modern, built for now |

The target buyer is a practice manager or GP partner evaluating operational risk. They need to feel **safe** more than **excited**. That points toward Option A — but if SuperGP's brand story is explicitly about *breaking the old way*, Option B is valid and more differentiated in the healthcare SaaS space.

---

## Priority Order

| Priority | Change | Impact |
|---|---|---|
| 🔴 High | Choose font direction (serif vs geometric sans) based on positioning | Defines brand perception |
| 🔴 High | Replace neon accent with muted warm tone | Kills template palette |
| 🟡 Medium | Redesign stat section (editorial layout) | Removes biggest template component |
| 🟡 Medium | Replace pill buttons with rounded rect | Small but signals craft |
| 🟢 Lower | Rewrite trust section header with specific credential | Adds authenticity |
| 🟢 Lower | Add source attribution to stats | Adds credibility |

---

## One-Line Summary

> The font choice is a positioning decision first: serif for trusted credibility, geometric sans for challenger energy. Either way, change the accent colour and reduce the button radius — those three changes will make the site feel 60% less AI-generated.
