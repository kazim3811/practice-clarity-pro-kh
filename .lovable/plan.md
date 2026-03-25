

## Redesign: Benefits Section — Light Mode

Same plan as before but keeping the light background to match the section's current feel.

### Changes to `src/components/BenefitsSection.tsx` — Full rewrite

**Background**: Keep `bg-[hsl(220,30%,97%)]` (current light grey). Cards use `bg-white` with subtle borders.

**Data**: Replace flat string array with rich objects containing icon (`Clock, Users, ShieldCheck, Building2, Zap`), stat, statLabel, title, and description (as previously specified).

**Layout**:
- Hero card (benefit 1 — "70%" admin reduction): full-width, white card with gradient left border, large animated counter stat, teal accent
- 2×2 grid below for remaining 4 benefits, each with icon in teal circle, bold stat, title, description

**Animations**:
- `CountUp` mini-component using framer-motion `useInView` + `useMotionValue` to animate stat numbers on scroll
- Staggered card fade-in reveals
- Hover: `hover:scale-[1.02]` + `hover:shadow-lg` transition

**Card styling** (light mode):
- `bg-white border border-gray-200 shadow-sm` base
- `border-l-4 border-primary` left accent
- Icon in `bg-primary/10` circle with `text-primary`
- Stats in `text-primary font-bold text-3xl`
- Title in `text-gray-900`, description in `text-gray-600`

**CTA**: Keep "What Are You Waiting For?" with a subtle radial teal glow behind the button (light, not overpowering).

No other files change.

