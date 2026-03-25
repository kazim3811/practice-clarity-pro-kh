

## CTA Section Adjustments

### Changes to `src/components/CtaSection.tsx`

1. **Reduce height**: Change `py-28 sm:py-36` to `py-16 sm:py-20`
2. **Bolder title on one line**: Bump to `font-extrabold` with `text-5xl sm:text-6xl lg:text-7xl whitespace-nowrap`, reduce `mb-5` to `mb-3`
3. **More visible subheader**: Increase from `text-xl sm:text-2xl text-muted-foreground` to `text-2xl sm:text-3xl text-foreground/70 font-medium`, reduce `mb-12` to `mb-8`
4. **Widen container**: Change `max-w-3xl` to `max-w-4xl` to give the title room to stay on one line

