import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";
import teamMirren from "@/assets/team-mirren.jpg";
import teamTak from "@/assets/team-tak.jpg";
import teamKazim from "@/assets/team-kazim.jpg";

const team = [
  {
    name: "Dr Mirren Carpenter",
    role: "MD, Reach Healthcare",
    image: teamMirren,
    credentials: [
      "Credential placeholder 1",
      "Credential placeholder 2",
      "Credential placeholder 3",
    ],
  },
  {
    name: "Tak Cheung",
    role: "Product Director",
    image: teamTak,
    credentials: [
      "Credential placeholder 1",
      "Credential placeholder 2",
      "Credential placeholder 3",
    ],
  },
  {
    name: "Kazim Huseein",
    role: "Chief Advisor",
    image: teamKazim,
    credentials: [
      "Credential placeholder 1",
      "Credential placeholder 2",
      "Credential placeholder 3",
    ],
  },
];

const TeamSection = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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
            const isFlipped = flippedIndex === i;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Flip card container */}
                <div
                  className="w-full max-w-[220px] aspect-[3/4] cursor-pointer"
                  style={{ perspective: "800px" }}
                  onClick={() => setFlippedIndex(isFlipped ? null : i)}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front — portrait */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-secondary/60 border border-border/60 overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={512}
                        height={680}
                      />

                      {/* Info button */}
                      <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center backdrop-blur-sm hover:bg-primary/25 transition-colors">
                        <Info className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>

                    {/* Back — credentials */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-secondary border border-primary/20 overflow-hidden flex flex-col justify-center p-5"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="font-body text-xs text-primary mb-4">
                        {member.role}
                      </p>

                      <ul className="space-y-2.5">
                        {member.credentials.map((cred, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 font-body text-xs text-muted-foreground leading-relaxed"
                          >
                            <Check className="w-3 h-3 shrink-0 mt-0.5 text-primary" />
                            {cred}
                          </li>
                        ))}
                      </ul>

                      {/* Close hint */}
                      <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                        <Info className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Name + role */}
                <div className="text-center mt-5">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-0.5">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
