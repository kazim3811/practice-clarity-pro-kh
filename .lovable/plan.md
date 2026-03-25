

## Plan: Visual Hierarchy & Consistent Typography

### Problem
Titles lack visual punch — all are flat single-color text. Font usage (`font-display` vs `font-body`) isn't consistently applied across all components.

### Changes

**1. Gradient titles (`src/index.css`)**
- Add a reusable `.text-gradient` utility class with a teal-to-purple gradient (`from primary through a lighter teal to a soft lavender`) using `background-clip: text` and `text-fill-color: transparent`.

**2. Apply gradient to key section titles**

- **Hero (`Hero.tsx`)**: Apply gradient to the "Without the Chaos." span (replace `text-primary` with the gradient class).
- **Pain Points (`PainPoints.tsx`)**: Apply gradient to "Start Leading Your Surgery." line.
- **Header (`Header.tsx`)**: Apply gradient to the "GP" text in the logo.

**3. Font consistency audit**

- **Hero.tsx**: Ensure `font-display` on h1, `font-body` on paragraph. Already correct.
- **PainPoints.tsx**: Ensure section heading uses `font-display`, card body text uses `font-body` (add `font-body` to the `<p>` tags).
- **Header.tsx**: Ensure nav links use `font-body`. Add explicit `font-body` to nav `<a>` tags.
- **DashboardMockup.tsx**: Already uses `font-body` — correct.
- **BookDemoDialog.tsx**: Add `font-body` to form labels and description text for consistency.

### Files modified
- `src/index.css` — add `.text-gradient` utility
- `src/components/Hero.tsx` — gradient on accent line
- `src/components/PainPoints.tsx` — gradient on second title line, add `font-body` to body text
- `src/components/Header.tsx` — gradient on "GP", `font-body` on nav links
- `src/components/BookDemoDialog.tsx` — `font-body` on description/labels

