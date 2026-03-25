

## Plan: Add Benefits Section with Light Mode + CTA

### New file: `src/components/BenefitsSection.tsx`

A new section placed after `TeamSection` in `Index.tsx` that uses a **light/white background** to contrast with the dark sections above and below.

**Structure:**
1. **Badge** — "WHY SUPERGP" pill badge (dark text on light bg)
2. **Benefits grid** — 5 benefit items in a clean layout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, last 2 centered). Each item: a green checkmark/icon, bold headline text, no extra description needed since the points are self-explanatory.
3. **CTA block** — Large bold heading "What Are You Waiting For?" followed by the "Book a Demo Now" button with arrow icon. Uses `BookDemoDialog`.

**Light mode styling:**
- Section bg: `bg-white` (or `bg-[#f8f9fc]`)
- Text: dark colors (`text-gray-900`, `text-gray-600`)
- Icons: primary/teal color
- CTA button: keeps `bg-primary text-primary-foreground`
- This creates a strong visual break from the dark theme above/below

**Animations:** Staggered `motion.div` fade-in for each benefit, scroll-triggered.

### Edit: `src/pages/Index.tsx`
- Import and add `<BenefitsSection />` between `<TeamSection />` and `<Footer />`.

