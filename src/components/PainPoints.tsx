import { motion } from "framer-motion";
import { Users, ShieldAlert, CalendarClock, MessageSquare, Database } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const painPoints = [
  {
    icon: Users,
    header: "Workforce Instability",
    body: "Rotas managed via manual spreadsheets lead to \"single point of failure\" risks and reactive, high-cost locum spending.",
  },
  {
    icon: ShieldAlert,
    header: "Clinical Governance Gaps",
    body: "Compliance and mandatory training data are siloed, creating significant exposure during CQC inspections.",
  },
  {
    icon: CalendarClock,
    header: "Unrealized Appointment Capacity",
    body: "Without a unified view of staff availability, the practice cannot accurately forecast or maximize patient access targets.",
  },
  {
    icon: MessageSquare,
    header: "Administrative Friction",
    body: "Coordination of clinical and non-clinical teams across disparate WhatsApp threads and email chains drains 20%+ of management bandwidth.",
  },
  {
    icon: Database,
    header: "Information Silos",
    body: "Critical team data (HR, rotas, compliance) is disconnected, leading to duplication of effort and data entry errors.",
  },
];

const dotGlow = {
  hidden: { scale: 0, boxShadow: "0 0 0 0 hsl(172 66% 50% / 0)" },
  visible: {
    scale: 1,
    boxShadow: [
      "0 0 0 0 hsl(172 66% 50% / 0.5)",
      "0 0 12px 4px hsl(172 66% 50% / 0.3)",
      "0 0 6px 2px hsl(172 66% 50% / 0.15)",
    ],
    transition: {
      scale: { type: "spring" as const, stiffness: 300, damping: 15 },
      boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" as const },
    },
  },
};

const ripple = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: [1, 2.5],
    opacity: [0.5, 0],
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

const connectorLine = (isRight: boolean) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.3 },
  },
  style: {
    originX: isRight ? 0 : 1,
  },
});

const iconVariants = {
  hidden: { scale: 0.5, rotate: -30, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 12 },
  },
};

const PainPoints = () => {
  const isMobile = useIsMobile();
  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-20 leading-tight"
        >
          Stop Managing Your Rota.
          <br />
          <span className="text-gradient">Start Leading Your Surgery.</span>
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Animated vertical center line — draws down */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, hsl(172 66% 50% / 0.05), hsl(172 66% 50% / 0.4) 20%, hsl(172 66% 50% / 0.4) 80%, hsl(172 66% 50% / 0.05))",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {painPoints.map((point, index) => {
              const isRight = index % 2 === 1;
              const Icon = point.icon;
              const connector = connectorLine(isRight);

              return (
                <div key={index} className="relative flex items-start md:items-center">
                  {/* Ripple ring behind dot */}
                  <motion.div
                    variants={ripple}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-[5] w-4 h-4 rounded-full"
                    style={{ backgroundColor: "hsl(172 66% 50% / 0.2)" }}
                  />

                  {/* Glowing dot on the line */}
                  <motion.div
                    variants={dotGlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-[3px] border-background"
                    style={{ backgroundColor: "hsl(172 66% 50%)" }}
                  />

                  {/* Horizontal connector line (desktop only) */}
                  <motion.div
                    variants={connector}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-8 z-[4] ${
                      isRight
                        ? "left-[calc(50%+8px)]"
                        : "right-[calc(50%+8px)]"
                    }`}
                    style={{
                      backgroundColor: "hsl(172 66% 50% / 0.35)",
                      transformOrigin: isRight ? "left" : "right",
                    }}
                  />

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 80 : (isRight ? 120 : -120) }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.1,
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 12px 32px -8px hsl(172 66% 50% / 0.18)",
                      transition: { duration: 0.25 },
                    }}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] rounded-2xl border border-border/60 bg-muted/40 backdrop-blur-sm p-5 sm:p-6 shadow-sm cursor-default ${
                      isRight
                        ? "md:ml-auto md:border-l-[3px] md:border-l-primary/40"
                        : "md:mr-auto md:border-r-[3px] md:border-r-primary/40"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        isRight
                          ? "md:flex-row"
                          : "md:flex-row-reverse md:text-right"
                      }`}
                    >
                      {/* Animated icon */}
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "hsl(172 66% 50% / 0.12)" }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: "hsl(172 66% 50%)" }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-1.5">
                          {point.header}
                        </h3>
                        <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
