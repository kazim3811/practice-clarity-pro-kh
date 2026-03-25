import { useState } from "react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import BookDemoDialog from "./BookDemoDialog";

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-6 py-20 lg:py-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            Built for NHS GP Clinics
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-headline text-center text-glow leading-[1.05] tracking-tight max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Run Your Clinic
          <br />
          <span className="text-primary">Without the Chaos.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-subtext text-center max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-relaxed font-body"
        >
          SuperGP replaces spreadsheets, WhatsApp, and paper rotas with one intelligent platform—giving you real-time visibility, control, and confidence across your entire practice.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
          >
            Book a Demo
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-xl border border-border bg-surface text-foreground font-display font-semibold text-base hover:bg-surface-raised hover:border-primary/30 transition-all"
          >
            See It in Action
          </a>
        </motion.div>

        {/* Dashboard */}
        <div className="mt-20 lg:mt-24">
          <DashboardMockup />
        </div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default Hero;
