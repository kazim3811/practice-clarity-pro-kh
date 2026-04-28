# SuperGP Design System

Version: 1.0  
Date: April 2026  
Source inputs: `brand-guidelines.md`, existing UI primitives in `src/components/ui`, token system in `src/index.css` and `tailwind.config.ts`

## Scope

This design system covers:
- Product UI foundations (tokens, typography, spacing, elevation, motion)
- Core primitives and component behavior for app surfaces (dashboard, rota, tasks, admin)
- Responsive behavior across mobile, tablet, and desktop
- Accessibility and content rules for production-ready UX
- Handoff and QA criteria for implementation parity

This does not define marketing site art direction beyond token and typography consistency.

## 1) Foundation

### Product context and principles

Target users:
- Practice managers and operations leads (primary)
- GP partners and PCN/multi-site leads (secondary)

Design principles:
1. Operational clarity over decoration
2. Calm and credible visual language
3. Fast scanning for high-pressure workflows
4. Consistent component behavior across modules
5. Accessibility by default (WCAG AA minimum)

### Token architecture

Use semantic tokens in CSS variables and Tailwind aliases (`bg-background`, `text-foreground`, `bg-primary`, etc.).  
Avoid raw color utility steps and one-off hex values in TSX.

#### Core color tokens (brand-aligned)

Brand palette from guidelines:
- SuperGP Navy: `#0F2057`
- Royal Blue: `#1D4ED8`
- Sky Blue: `#0EA5E9`
- Emerald: `#10B981`
- Amber: `#F59E0B`
- Red: `#EF4444`
- Slate 50: `#F8FAFC`
- Slate 200: `#E2E8F0`
- Slate 600: `#475569`
- Slate 900: `#0F172A`
- Signature gradient: `linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 100%)`

Semantic mapping (intended usage):
- `--background`: Slate 50 family
- `--foreground`: Slate 900 family
- `--primary`: Royal Blue
- `--primary-foreground`: white
- `--accent`: Sky Blue tint
- `--success`: Emerald
- `--warning`: Amber
- `--destructive`: Red
- `--border`/`--input`: Slate 200 family
- `--muted`/`--muted-foreground`: Slate 100/600 range

#### Typography tokens

Brand spec:
- Primary: `Inter` (400/500/600/700)
- Monospace support: `JetBrains Mono`

Type scale (app):
- Display: `text-display`
- Headings: `text-heading-1` to `text-heading-4`
- Body: `text-body`
- Secondary/support: `text-small`, `text-caption`

Writing style:
- Sentence case UI labels and headings
- UK English spelling
- Calm, direct, instruction-first product copy

#### Spacing, radius, elevation, motion

Spacing:
- Use 4/8pt rhythm via Tailwind spacing scale
- Prefer predictable pairs (`gap-4`, `p-4 sm:p-6`, `space-y-4`)

Radius:
- Default to token radius (`rounded-md`, `rounded-lg`)
- `rounded-2xl` only for established larger surfaces

Elevation:
- Use tokenized shadows only: `shadow-elev-xs/sm/md/lg/xl`

Motion:
- Short, functional transitions only (150-250ms)
- Use animation to support comprehension, not decoration

## 2) Component Architecture

Build screens from reusable primitives before custom blocks.

### Core primitives (required)

- `Button`
- `Input`, `Label`, `Select`
- `Card`
- `Badge`
- `Alert`
- `Dialog`, `AlertDialog`, `Sheet`
- `Tabs`
- Table patterns
- Navigation shell primitives

### Button spec

Use existing variants in `src/components/ui/button.tsx`:
- `default` (primary action)
- `secondary` (supporting action)
- `outline` (neutral boundary action)
- `ghost` (low emphasis action)
- `link` (inline text action)
- `destructive` (danger action)
- `success` (positive confirmation action)

States:
- default, hover, focus-visible, active, disabled
- focus ring must remain visible (`focus-visible:ring-ring`)

Hierarchy rules:
- 1 primary action per view region
- Secondary actions should not visually compete with primary CTA

### Badge and status spec

Use `Badge` variants in `src/components/ui/badge.tsx`:
- `success`, `warning`, `successMuted`, `warningMuted`, `destructiveMuted`, `info`

Rules:
- Use muted variants in dense tables and chips
- Pair color with text/icon, never color-only meaning

### Alert spec

Use `Alert` variants in `src/components/ui/alert.tsx`:
- `default`, `success`, `destructive`

Behavior:
- include concise title + supporting action guidance
- avoid alert overload; use inline help for minor issues

### Form controls

Patterns:
- top-aligned labels
- help text below control when needed
- errors inline, adjacent to field
- preserve keyboard and screen reader flow

### Cards and data surfaces

Rules:
- card header uses clear title + concise metadata
- card body is scannable (short lines, grouped information)
- card actions align to bottom/right edge consistently

## 3) Screen and Flow Layout

### Breakpoints and responsiveness

Default breakpoints:
- Mobile: <640px
- Tablet: 640-1023px
- Desktop: >=1024px
- Large desktop: >=1280px

Behavior:
- Mobile first layouts
- Reduce columns before reducing readability
- Keep primary actions reachable without precision clicks
- Minimum touch target: 44x44px on touch devices

### Page hierarchy pattern

For operational screens:
1. Context header (title + status summary)
2. Primary controls/actions
3. Core data surface (table/grid/cards)
4. Secondary details/filters

State requirements per screen:
- Empty state (what this area does + next action)
- Loading state (skeleton or calm placeholder)
- Error state (what failed + recoverable action)

## 4) Accessibility

Baseline:
- WCAG AA contrast minimum (4.5:1 for normal text)
- Visible keyboard focus on all interactive controls
- Logical heading hierarchy (`h1 -> h2 -> h3`)
- Semantic control usage (buttons for actions, links for navigation)

Interaction:
- No color-only status communication
- Inline validation tied to input context
- Dialogs trap focus and return focus on close

Content:
- concise, plain-English labels
- direct action wording ("Save rota", "Resolve conflict")
- avoid hype language in product UX

## 5) Implementation Notes for This Repo

Current stack already supports semantic tokens and reusable primitives.

To align fully with the brand guidelines, apply this sequence:
1. Update token values in `src/index.css` to brand-aligned navy/blue/slate mapping.
2. Update `tailwind.config.ts` `fontFamily.sans` to `Inter` and add mono mapping for `JetBrains Mono` where needed.
3. Keep all component styling semantic (no ad-hoc palette classes in TSX).
4. Continue using existing UI variants (`Button`, `Badge`, `Alert`) instead of bespoke status color combinations.
5. Keep special gradients as named utilities in `src/index.css` only.

## 6) Handoff and QA Checklist

### Design parity acceptance criteria

- Tokens: no raw hex values introduced in component TSX
- Typography: consistent use of heading/body/caption scale
- Components: variants/states match this system, not one-off style forks
- Layout: mobile/tablet/desktop behavior defined and testable
- Accessibility: contrast, focus, keyboard navigation verified
- Copy: UK English and direct/credible tone applied

### QA focus areas

- Dense operational tables (status legibility and scan speed)
- Dialog and form error flows
- Badge and alert semantics across light/dark themes
- Dashboard and rota surfaces where gradients and overlays appear
- Any component using custom utilities (`dashboard-*`, `workflow-*`) for token compliance

## 7) Governance

- Monthly: token and component drift review
- Quarterly: full UI consistency and accessibility audit
- Escalate before introducing new visual patterns, status colors, or headline messaging styles

---

This document is the product design-system baseline and should be treated as implementation source of truth for UI decisions.
