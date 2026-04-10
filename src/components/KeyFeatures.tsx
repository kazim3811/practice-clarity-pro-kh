import { motion, AnimatePresence } from "framer-motion";
import { Calendar, LayoutDashboard, CheckSquare, Building2, Users, FileText, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const features = [
  {
    id: "rota",
    icon: Calendar,
    title: "Smart Rota Management",
    shortTitle: "Rotas",
    image: "/features/rota.png",
    lines: [
      "Plan rotas by room, shift, and site — not just names on a list.",
      "Copy weeks instantly, validate staffing, and publish with confidence.",
    ],
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Live Practice Dashboard",
    shortTitle: "Dashboard",
    image: "/placeholder.svg",
    lines: [
      "Staff see exactly what they need for the day.",
      "Managers get full visibility across sites, shifts, and coverage — in real time.",
    ],
  },
  {
    id: "tasks",
    icon: CheckSquare,
    title: "Tasks & Compliance, Handled",
    shortTitle: "Tasks",
    image: "/placeholder.svg",
    lines: [
      "Automate recurring tasks like fridge checks, cleaning logs, and audits.",
      "Every action is tracked, time-stamped, and ready for inspection.",
    ],
  },
  {
    id: "multisite",
    icon: Building2,
    title: "Multi-Site, No Complexity",
    shortTitle: "Multi-Site",
    image: "/placeholder.svg",
    lines: [
      "Run multiple locations with different hours, facilities, and staffing rules — all from one system.",
    ],
  },
  {
    id: "team",
    icon: Users,
    title: "Team & Access Control",
    shortTitle: "Team",
    image: "/placeholder.svg",
    lines: [
      "Manage roles, permissions, and staffing without spreadsheets.",
      "Scale your team without losing control.",
    ],
  },
  {
    id: "policy",
    icon: FileText,
    title: "Policy GPT",
    shortTitle: "Policy GPT",
    image: "/placeholder.svg",
    lines: [
      "Instant answers to SOPs and policies — tailored to your practice.",
    ],
    comingSoon: true,
  },
];

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const activeFeature = features.find((f) => f.id === activeTab)!;

  return (
    <section
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
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
          className="font-display font-bold text-center text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mb-12"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Everything you need to run your practice —{" "}
          <span className="text-gradient">in one place</span>
        </motion.h2>

        {/* Tabbed Feature Showcase */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab bar */}
          <TabsList className="w-full h-auto bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl p-1.5 flex flex-nowrap overflow-x-auto scrollbar-hide gap-1 mb-8 justify-start sm:justify-center">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md shrink-0"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{feature.shortTitle}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab content with animation */}
          <div className="relative min-h-[400px] sm:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Description */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <h3
                        className="font-display text-2xl sm:text-3xl font-bold"
                        style={{ color: "hsl(222 47% 11%)" }}
                      >
                        {activeFeature.title}
                      </h3>
                      {activeFeature.comingSoon && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] bg-primary/10 text-primary border-primary/20"
                        >
                          Coming Soon
                        </Badge>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {activeFeature.lines.map((line, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 font-body text-base leading-relaxed"
                          style={{ color: "hsl(215 20% 40%)" }}
                        >
                          <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "hsl(172 66% 45%)" }} />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Video placeholder */}
                  <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-sm shadow-xl overflow-hidden">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-white/80">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                      </div>
                      <span className="text-xs text-muted-foreground ml-2 font-body">
                        {activeFeature.title}
                      </span>
                    </div>

                    {/* Feature image */}
                    <div>
                      <img
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default KeyFeatures;
