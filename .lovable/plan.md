

## Replace Video Placeholders with Feature Images

### Changes to `src/components/KeyFeatures.tsx`

1. **Add an `image` field to each feature** in the `features` array — use `/placeholder.svg` for all six features for now. This makes it easy to swap in real images later by just changing the path.

2. **Replace the video placeholder area** (the play button, grid overlay, and video label) with an `<img>` tag that displays `activeFeature.image`. Keep the browser chrome (traffic light dots + title bar) as-is for visual framing.

3. **Image styling**: `w-full h-auto object-cover aspect-video` to maintain the same dimensions as the current video placeholder.

### How to swap in real images later

Once you have real screenshots/mockups, either:
- Upload them in chat and I'll wire them in
- Place them in `public/` (e.g. `public/features/rota.png`) and update the paths

### Technical Details
- Single file edit: `src/components/KeyFeatures.tsx`
- Add `image: string` property to each feature object
- Remove the play button `motion.div`, grid overlay, and bottom label
- Add `<img src={activeFeature.image} alt={activeFeature.title} />` in their place

