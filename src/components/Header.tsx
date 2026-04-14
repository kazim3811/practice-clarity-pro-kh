import { motion } from "framer-motion";
import BookDemoDialog from "./BookDemoDialog";
import { useId, useState } from "react";

/** Minimal lockup: viewport-style mark + wordmark */
function SuperGPLogo() {
  const rawId = useId();
  const gid = `sg-logo-${rawId.replace(/:/g, "")}`;

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className="shrink-0"
        aria-hidden
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(172 70% 42%)" />
            <stop offset="52%" stopColor="hsl(180 50% 55%)" />
            <stop offset="100%" stopColor="hsl(260 45% 65%)" />
          </linearGradient>
        </defs>
        {/* Corner brackets — suggests focus / dashboard viewport */}
        <path
          d="M6 9V6h3M19 6h3v3M6 19v3h3M22 19v3h-3"
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2" fill={`url(#${gid})`} />
      </svg>
      <span className="font-display font-bold text-headline text-lg sm:text-xl tracking-tight leading-none">
        Super<span className="text-gradient">GP</span>
      </span>
    </div>
  );
}

const Header = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
      >
        <div className="container flex items-center justify-between h-16 px-6">
          <a href="/" className="flex items-center rounded-md outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" aria-label="SuperGP — home">
            <SuperGPLogo />
          </a>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://app.supergpapp.com/auth?mode=invite"
              className="inline-flex items-center px-4 py-2.5 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/12 to-primary/5 text-foreground font-display font-semibold text-sm hover:from-primary/18 hover:to-primary/10 transition-all"
            >
              I have an invitation code
            </a>
            <a
              href="https://app.supergpapp.com/auth"
              className="inline-flex items-center px-4 py-2.5 rounded-lg border border-accent/40 bg-gradient-to-r from-accent/20 to-accent/8 text-foreground font-display font-semibold text-sm hover:from-accent/28 hover:to-accent/14 transition-all"
            >
              Login
            </a>
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </motion.header>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
};

export default Header;
