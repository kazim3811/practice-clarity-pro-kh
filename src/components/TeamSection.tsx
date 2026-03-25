import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const team = [
  {
    name: "Dr Mirren Carpenter",
    role: "MD, Reach Healthcare",
    credentials: [
      "Credential placeholder 1",
      "Credential placeholder 2",
      "Credential placeholder 3",
    ],
  },
  {
    name: "Tak Cheung",
    role: "Product Director",
    credentials: [
      "Credential placeholder 1",
      "Credential placeholder 2",
      "Credential placeholder 3",
    ],
  },
  {
    name: "Kazim Huseein",
    role: "Chief Advisor",
    credentials: [
      "Credential placeholder 1",
      "Credential placeholder 2",
      "Credential placeholder 3",
    ],
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            THE TEAM
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-center text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground mb-6"
        >
          Built by People Who{" "}
          <span className="text-gradient">Get It</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-center text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4"
        >
          SuperGP was designed alongside NHS practitioners and built by a team experienced in healthcare systems, product, and scaling complex operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-center text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-16"
        >
          We've seen how broken practice management can be — and built SuperGP to fix it.
        </motion.p>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Portrait placeholder */}
                <div className="w-full aspect-[3/4] max-w-[220px] rounded-2xl bg-secondary/60 border border-border/60 mb-5 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-muted-foreground/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                </div>

                {/* Name + role — clickable */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="text-center group cursor-pointer"
                >
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-0.5">
                    {member.role}
                  </p>
                </button>

                {/* Expandable credentials */}
                <AnimatePresence>
                  {isActive && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden mt-4 space-y-2 w-full max-w-[220px]"
                    >
                      {member.credentials.map((cred, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.08 }}
                          className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                        >
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                          {cred}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
