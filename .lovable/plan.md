

## Make the Final CTA Box Stand Out

The current CTA box has the green gradient, white text, and a white button. To make it more impactful while keeping the site's look and feel (teal primary, Space Grotesk headings, rounded cards, motion animations), here's the plan:

### Changes to `src/components/BenefitsSection.tsx`

1. **Break CTA out of the `max-w-5xl` container** -- make it full-bleed within the section so it feels like a bold closing statement, not just another card in the grid. Use negative margins or move it outside the inner `div`.

2. **Add a subtle radial glow overlay** -- a soft white radial gradient overlay on top of the green gradient to add depth and draw the eye.

3. **Increase vertical padding** -- bump to `py-16 sm:py-20` for more breathing room and visual weight.

4. **Add a decorative element** -- a subtle dotted or grid pattern overlay at low opacity for texture, consistent with the modern SaaS feel.

5. **Enhance the button**:
   - Make it larger (`px-10 py-5 text-xl`)
   - Add a subtle shadow glow using `shadow-[0_0_30px_rgba(34,197,94,0.3)]`
   - Add a gentle pulse animation on the arrow icon to suggest action

6. **Add a trust line** below the subheading -- e.g., "Join 50+ UK practices already transforming their operations" in smaller text, adding social proof and visual hierarchy.

7. **Scale up the entrance animation** -- use `scale: [0.95, 1]` alongside the existing y-translate for a more dramatic reveal.

### Technical Details

- All changes in `src/components/BenefitsSection.tsx`
- Button glow uses Tailwind arbitrary shadow values
- Arrow pulse uses framer-motion's `animate` prop with a repeating transition
- Trust line is a new `<p>` element between the subheading and button
- Full-bleed achieved by moving the CTA `motion.div` outside the `max-w-5xl` wrapper but inside the `section`, with its own `max-w-6xl mx-auto px-4` for controlled width

