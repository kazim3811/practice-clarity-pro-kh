

## Plan: Add "Pain Points" Section with Scroll-Reveal Alternating Blocks

### Overview
Create a new light-themed section below the hero with 5 alternating left/right content blocks that animate in on scroll using framer-motion's `whileInView`.

### New File: `src/components/PainPoints.tsx`
- Section with white/light background to contrast the dark hero
- Section title: "Stop Managing Your Rota. Start Leading Your Surgery."
- 5 blocks, each containing an icon, header, and body text
- Odd blocks: content left-aligned; even blocks: content right-aligned
- Each block uses `motion.div` with `whileInView` for scroll-triggered fade+slide animation (slide from left for odd, right for even)
- Each block gets a subtle visual accent (e.g., a colored left/right border or icon) using the teal glow color for continuity
- Clean card-style or minimal layout with generous spacing

### Edit: `src/pages/Index.tsx`
- Import and add `<PainPoints />` below `<Hero />`

### Design Details
- Background: white (`bg-white text-gray-900`)
- Typography: `font-display` for headers, `font-body` for body text
- Animation: `whileInView={{ opacity: 1, x: 0 }}` with `initial={{ opacity: 0, x: -60 }}` (alternating sign)
- `viewport={{ once: true, amount: 0.3 }}` so each block animates once when 30% visible
- Each block has a small icon from lucide-react matching the pain point theme

