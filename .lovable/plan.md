

## Plan: Bring the Pain Points Timeline to Life

### Problem
The section currently has basic fade/slide animations but feels flat -- no visual depth, no interactivity, and the timeline itself is static.

### Changes to `src/components/PainPoints.tsx`

**1. Animated timeline line (draws down as user scrolls)**
- Replace the static vertical line with a `motion.div` that grows its height using `scaleY` animated via `whileInView`, giving a "drawing" effect as the user scrolls into the section.

**2. Pulsing, glowing dots**
- Add a `box-shadow` glow pulse animation to each timeline dot (teal glow expanding/contracting).
- Add a subtle ring/ripple effect behind each dot that animates outward when the dot appears.

**3. Card-style content blocks with hover effects**
- Wrap each block in a card with `bg-gray-50`, rounded corners, subtle border, and shadow.
- Add `whileHover={{ scale: 1.02, boxShadow: "..." }}` for a lift effect on hover.
- Add a teal left/right border accent on the card edge closest to the timeline.

**4. Staggered timing**
- Use index-based `delay` (e.g., `delay: index * 0.1`) so blocks cascade in sequence rather than all appearing at the same threshold.

**5. Icon animation**
- Animate icons with a slight rotate + scale spring when they enter view.

**6. Connector lines from dot to card**
- Add small horizontal lines connecting each dot to its card, animated to draw from center outward.

### Summary of visual enhancements
- Drawing timeline line
- Glowing/pulsing dots with ripple
- Elevated cards with hover lift
- Staggered cascade timing
- Animated icons
- Horizontal connector lines

