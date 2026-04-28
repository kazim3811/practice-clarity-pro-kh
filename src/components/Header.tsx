import { motion } from "framer-motion";
import BookDemoDialog from "./BookDemoDialog";
import { useId, useState } from "react";

/** Minimal lockup: viewport-style mark + wordmark */
function SuperGPLogo() {
  const rawId = useId();
  const gid = `sg-logo-${rawId.replace(/:/g, "")}`;

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 select-none">
      <svg
        width="22"
        height="22"
        viewBox="0 0 28 28"
        className="h-[22px] w-[22px] shrink-0 sm:h-6 sm:w-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
        aria-hidden
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(172 70% 52%)" />
            <stop offset="52%" stopColor="hsl(180 55% 65%)" />
            <stop offset="100%" stopColor="hsl(260 50% 72%)" />
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
      <span className="font-display text-base font-bold leading-none tracking-tight text-white sm:text-lg">
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
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 sm:pt-4"
      >
        <div className="pointer-events-auto mx-auto flex w-full max-w-6xl justify-center">
          <div className="flex w-full items-center justify-between gap-2 rounded-full border border-white/5 bg-slate-900/[0.12] px-3 py-1 shadow-md backdrop-blur-md sm:gap-3 sm:px-4 sm:py-1.5">
            <a
              href="/"
              className="flex min-w-0 shrink items-center rounded-full outline-none ring-offset-slate-900 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-1"
              aria-label="SuperGP — home"
            >
              <SuperGPLogo />
            </a>

            <div className="hidden shrink-0 items-center gap-1.5 sm:flex sm:gap-2">
              <a
                href="https://app.supergpapp.com/auth?mode=invite"
                className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-display text-xs font-semibold text-white/95 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/10 sm:px-3 sm:text-sm"
              >
                I have an invitation code
              </a>
              <a
                href="https://app.supergpapp.com/auth"
                className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-display text-xs font-semibold text-white/95 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/10 sm:px-3 sm:text-sm"
              >
                Login
              </a>
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center rounded-md bg-white px-3 py-1 font-display text-xs font-semibold text-slate-900 shadow-sm transition-all hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 sm:px-4 sm:text-sm"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
};

export default Header;
