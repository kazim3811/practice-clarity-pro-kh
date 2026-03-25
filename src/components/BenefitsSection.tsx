import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import BookDemoDialog from "./BookDemoDialog";

const benefits = [
  "Maximise patient throughput by eliminating staffing blind spots.",
  "Cut admin time by up to 70%.",
  "Reduce compliance risk and avoid audit failures.",
  "Streamline multi-site operations into one system.",
  "Minimise disruptions with reliable daily operations.",
];

const BenefitsSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(220,30%,97%)]">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs text-gray-500 font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            WHY SUPERGP
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-center text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mb-12"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Take Control of Your Clinic Operations—
          <span className="text-gradient">So You Can Focus on Patient Care.</span>
        </motion.h2>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm ${
                i >= 3 ? "lg:col-span-1 lg:last:col-start-auto md:justify-self-center lg:justify-self-auto" : ""
              }`}
              style={i === 3 ? { gridColumn: undefined } : undefined}
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="font-display font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8">
            What Are You Waiting For?
          </h2>
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center px-10 py-5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
          >
            Book a Demo Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>

        <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
      </div>
    </section>
  );
};

export default BenefitsSection;
