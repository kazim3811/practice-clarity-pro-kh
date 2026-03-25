import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    name: "Dr Mirren Carpenter",
    role: "MD, Reach Healthcare",
    initials: "MC",
    color: "hsl(172 66% 50%)",
  },
  {
    name: "Tak Cheung",
    role: "Product Director",
    initials: "TC",
    color: "hsl(260 45% 65%)",
  },
  {
    name: "Kazim Huseein",
    role: "Chief Advisor",
    initials: "KH",
    color: "hsl(193 50% 55%)",
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
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

        {/* Description */}
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

        {/* Faces */}
        <div className="flex justify-center items-center gap-6 sm:gap-10">
          {team.map((member, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveIndex(isActive ? null : i)}
              >
                {/* Avatar with flip */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28" style={{ perspective: "600px" }}>
                  <motion.div
                    animate={{ rotateY: isActive ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front — initials */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center font-display text-2xl sm:text-3xl font-bold border-2 transition-shadow"
                      style={{
                        backfaceVisibility: "hidden",
                        backgroundColor: `${member.color}`,
                        borderColor: isActive ? member.color : "hsl(222 30% 18%)",
                        color: "hsl(222 47% 6%)",
                        boxShadow: isActive
                          ? `0 0 24px ${member.color.replace(")", " / 0.4)")}`
                          : "none",
                      }}
                    >
                      {member.initials}
                    </div>

                    {/* Back — role */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center p-3 text-center font-body text-xs sm:text-sm font-medium border-2"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        backgroundColor: "hsl(222 35% 12%)",
                        borderColor: member.color,
                        color: member.color,
                        boxShadow: `0 0 24px ${member.color.replace(")", " / 0.3)")}`,
                      }}
                    >
                      {member.role}
                    </div>
                  </motion.div>
                </div>

                {/* Name label */}
                <motion.span
                  className="mt-4 font-display text-sm sm:text-base font-semibold text-foreground text-center"
                  animate={{ color: isActive ? member.color : "hsl(210 40% 98%)" }}
                  transition={{ duration: 0.3 }}
                >
                  {member.name}
                </motion.span>

                {/* Expanding bio on mobile / below avatar */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2 max-w-[140px]"
                    >
                      <p className="font-body text-xs text-muted-foreground text-center">
                        {member.role}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground/50 text-xs font-body mt-8"
        >
          Click a face to learn more
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;
