import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookDemoDialog from "./BookDemoDialog";

const CtaSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[280px]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(260,45%,65%)]/8 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground mb-3"
        >
          Less Admin. <span className="text-gradient">More Patient Care.</span>
        </motion.h2>

        {/* Subheader */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-2xl sm:text-3xl text-foreground/70 mb-8"
        >
          What are you waiting for?
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center px-10 py-5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
          >
            Book a Demo Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default CtaSection;
