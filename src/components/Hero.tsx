import { useState } from "react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import BookDemoDialog from "./BookDemoDialog";
import { Check, X } from "lucide-react";

const painPoints = [
  "Spreadsheet rotas that break every week",
  "WhatsApp messages you can't track",
  "No real-time view of your clinic",
];

const outcomes = [
  "Live rota management across your team",
  "Real-time visibility of your clinic",
  "Everything in one place—finally",
];

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-6 py-16 lg:py-24">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-start mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            Built for NHS GP clinics
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold leading-[1.08] tracking-tight text-4xl sm:text-5xl lg:text-6xl"
              style={{ color: "hsl(222 47% 11%)" }}
            >
              Your clinic shouldn't run on{" "}
              <span className="text-gradient">spreadsheets.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 text-base sm:text-lg leading-relaxed font-body max-w-lg"
              style={{ color: "hsl(215 20% 45%)" }}
            >
              SuperGP replaces rotas, WhatsApp, and manual admin with one
              real-time platform—built for NHS GP clinics.
            </motion.p>

            {/* Pain → Outcome bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2"
            >
              <ul className="space-y-2">
                {painPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-body"
                    style={{ color: "hsl(0 60% 48%)" }}
                  >
                    <X className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-body"
                    style={{ color: "hsl(160 50% 38%)" }}
                  >
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
            >
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
              >
                Fix My Clinic
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <a
                href="#demo-video"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-border bg-surface text-foreground font-display font-semibold text-base hover:bg-surface-raised hover:border-primary/30 transition-all"
              >
                Watch 60s Demo
              </a>
            </motion.div>
          </div>

          {/* Right: Video */}
          <div id="demo-video">
            <DashboardMockup />
          </div>
        </div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default Hero;
