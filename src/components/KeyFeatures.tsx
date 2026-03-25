import { motion } from "framer-motion";
import { Calendar, LayoutDashboard, CheckSquare, Building2, Users, Lock, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Calendar,
    title: "Smart Rota Management",
    lines: [
      "Plan rotas by room, shift, and site — not just names on a list.",
      "Copy weeks instantly, validate staffing, and publish with confidence.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Live Practice Dashboard",
    lines: [
      "Staff see exactly what they need for the day.",
      "Managers get full visibility across sites, shifts, and coverage — in real time.",
    ],
  },
  {
    icon: CheckSquare,
    title: "Tasks & Compliance, Handled",
    lines: [
      "Automate recurring tasks like fridge checks, cleaning logs, and audits.",
      "Every action is tracked, time-stamped, and ready for inspection.",
    ],
  },
  {
    icon: Building2,
    title: "Multi-Site, No Complexity",
    lines: [
      "Run multiple locations with different hours, facilities, and staffing rules — all from one system.",
    ],
  },
  {
    icon: Users,
    title: "Team & Access Control",
    lines: [
      "Manage roles, permissions, and staffing without spreadsheets.",
      "Scale your team without losing control.",
    ],
  },
  {
    icon: Lock,
    title: "Built for NHS Governance",
    lines: [
      "Audit trails, permission controls, and rota approvals — designed for real-world compliance.",
    ],
  },
  {
    icon: FileText,
    title: "Policy GPT",
    lines: [
      "Instant answers to SOPs and policies — tailored to your practice.",
    ],
    comingSoon: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const KeyFeatures = () => {
  return (
    <section
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
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

      <div className="relative z-10 max-w-6xl mx-auto">
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
            THE PRODUCT
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-center text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mb-16"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Everything you need to run your practice —{" "}
          <span className="text-gradient">in one place</span>
        </motion.h2>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 32px -8px hsl(172 66% 50% / 0.18)",
                  transition: { duration: 0.25 },
                }}
                className={`relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-sm cursor-default transition-colors hover:border-primary/40 ${
                  feature.comingSoon ? "border-dashed border-primary/30" : ""
                }`}
              >
                {feature.comingSoon && (
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 text-[10px] bg-primary/10 text-primary border-primary/20"
                  >
                    Coming Soon
                  </Badge>
                )}

                <motion.div
                  initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: i * 0.08 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "hsl(172 66% 50% / 0.12)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "hsl(172 66% 50%)" }} />
                </motion.div>

                <h3
                  className="font-display text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: "hsl(222 47% 11%)" }}
                >
                  {feature.title}
                </h3>

                <div className="space-y-1.5">
                  {feature.lines.map((line, j) => (
                    <p
                      key={j}
                      className="font-body text-sm sm:text-base leading-relaxed"
                      style={{ color: "hsl(215 20% 45%)" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
