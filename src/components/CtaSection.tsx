import { useState } from "react";
import { motion } from "framer-motion";
import BookDemoDialog from "./BookDemoDialog";

const CtaSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-28 sm:py-36 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ backgroundColor: "hsl(172 66% 50% / 0.08)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-10 whitespace-nowrap"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          What Are You <span className="text-gradient">Waiting For?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center px-10 py-5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
          >
            Book a Demo Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default CtaSection;
