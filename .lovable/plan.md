

## Plan: Fix Pain Points Block Transitions

### Problem
On mobile (391px viewport), all blocks sit to the right of the timeline line, but the animation alternates `x: -120` and `x: 120`. Blocks animating from `x: -120` slide in from behind the timeline/off-screen edge and appear invisible or broken. Additionally, `viewport.once: true` with `amount: 0.2` may cause blocks already in view on load to never animate.

### Changes to `src/components/PainPoints.tsx`

**1. Responsive slide direction**
- On mobile, all blocks should slide in from the right (`x: 60`) since they're all positioned to the right of the left-aligned line.
- On desktop, keep the alternating left/right slide (`x: isRight ? 120 : -120`).
- Use a CSS-media-query-aware approach or simply always slide from the right on mobile by reducing the offset and making it consistent: use `x: 80` for all on mobile, and the current alternating logic only on `md:` and above. Since framer-motion doesn't do media queries natively, we'll use the `useIsMobile` hook already in the project to conditionally set the `x` value.

**2. Lower viewport threshold**
- Change `viewport.amount` from `0.2` to `0.05` so animations trigger as soon as blocks barely enter the screen.

**3. Remove `once: true` temporarily for debugging, then keep it**
- Keep `once: true` but ensure the initial state is correct so blocks don't get stuck invisible.

### Files modified
- `src/components/PainPoints.tsx` — import `useIsMobile`, use it to set slide direction, lower viewport amount.

