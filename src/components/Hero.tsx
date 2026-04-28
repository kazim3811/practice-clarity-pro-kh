import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import BookDemoDialog from "./BookDemoDialog";
import Header from "./Header";

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={
        prefersReducedMotion
          ? {
              background:
                "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
            }
          : undefined
      }
    >
      {!prefersReducedMotion && (
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-[1.06] contrast-[1.04] saturate-[1.06]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Readability: with video, keep upper ~2/3 mostly clear; stack darkness only behind copy */}
      {prefersReducedMotion ? (
        <div className="pointer-events-none absolute inset-0 bg-slate-900/35" />
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 28%, rgba(0,0,0,0.14) 48%, rgba(0,0,0,0.04) 62%, transparent 76%)",
          }}
        />
      )}

      {/* Background grid — very light so the desk / screen read clearly */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Header />

      {/* Middle-left: grow to fill viewport height, center copy vertically (top padding clears absolute header) */}
      <div className="relative z-10 flex flex-1 flex-col justify-center pb-16 pt-28 sm:pt-32 lg:pb-24">
        <div className="container flex flex-col items-start px-6 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 font-display text-sm"
          >
            <div className="h-2 w-2 rounded-full bg-brand-signature" />
            <span className="text-muted-foreground">SuperGP. Designed by GP&apos;s. Engineered by Experts.</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.1 }}
            className="max-w-4xl text-left font-display text-3xl font-bold leading-[1.1] tracking-tight text-headline text-glow-hero sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Patient care. Without the chaos
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.25 }}
            className="mt-3 max-w-3xl text-left font-body text-sm font-semibold leading-snug text-headline/90 sm:text-base"
          >
            A modern day operating system for your practice.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="mt-6 self-start"
          >
            <motion.button
              onClick={() => setDemoOpen(true)}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 18px 48px hsl(var(--glow-brand) / 0.45)",
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -3, 0],
                      boxShadow: [
                        "0 10px 30px hsl(var(--glow-brand) / 0.24)",
                        "0 18px 46px hsl(var(--glow-brand) / 0.42)",
                        "0 10px 30px hsl(var(--glow-brand) / 0.24)",
                      ],
                      filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"],
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.2 }
                  : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
              }
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand-signature px-6 py-3 font-body text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
            >
              <span className="cta-shimmer" aria-hidden="true" />
              <span className="relative z-10 flex items-center">
                Book a demo now
                <motion.span
                  className="ml-1.5 sm:ml-2"
                  animate={prefersReducedMotion ? undefined : { x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default Hero;
