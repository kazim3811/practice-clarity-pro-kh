import { motion } from "framer-motion";
import { Users, ShieldAlert, CalendarClock, MessageSquare, Database } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    header: "Your Rota Falls Apart Weekly",
    body: "Your rota lives in spreadsheets, breaks constantly, and leaves you scrambling to plug last-minute gaps.",
    impact: "£50k+ annual locum overspend",
  },
  {
    icon: ShieldAlert,
    header: "You're Not Audit-Ready",
    body: "Compliance is scattered across systems, so when inspections come, you're chasing evidence instead of being prepared.",
    impact: "Critical audit risk",
  },
  {
    icon: CalendarClock,
    header: "You're Leaving Appointments on the Table",
    body: "Without a clear view of staffing and rooms, capacity goes unused and patients go unseen.",
    impact: "15–20% appointment slots wasted",
  },
  {
    icon: MessageSquare,
    header: "Your Team Is Drowning in Admin",
    body: "Endless WhatsApps, emails, and updates eat into your day and slow everything down.",
    impact: "20%+ of bandwidth lost",
  },
  {
    icon: Database,
    header: "Everything Lives in Different Places",
    body: "Staff, rota, and compliance data are split across tools—leading to duplication, confusion, and mistakes.",
    impact: "Hours of repeated data entry weekly",
  },
];

const PainCard = ({ point, index }: { point: typeof painPoints[number]; index: number }) => {
  const Icon = point.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col rounded-2xl border-2 border-destructive/40 bg-muted/40 backdrop-blur-sm overflow-hidden cursor-default hover:border-destructive/60 h-full animate-pulse-border"
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="flex-1 p-5 sm:p-6 flex flex-col">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-destructive/10 mb-4 shrink-0">
          <Icon className="w-6 h-6 text-destructive" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{point.header}</h3>
        <p className="text-muted-foreground text-base leading-relaxed flex-1">{point.body}</p>
      </div>
      <div className="px-5 sm:px-6 py-3 bg-destructive/5 border-t border-border/40">
        <p className="text-sm font-medium text-destructive">⚡ {point.impact}</p>
      </div>
    </motion.div>
  );
};

const PainPoints = () => {
  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your clinic shouldn't run on spreadsheets.
            <br />
            <span className="text-gradient">It's costing you more than you think!</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Sound familiar? These are the challenges holding your practice back.
          </p>
        </motion.div>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.slice(0, 3).map((point, index) => (
            <PainCard key={index} point={point} index={index} />
          ))}
        </div>

        {/* Bottom row — centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-[calc(66.666%+0.625rem)] mx-auto lg:max-w-none lg:w-2/3 lg:mx-auto">
          {painPoints.slice(3).map((point, index) => (
            <PainCard key={index + 3} point={point} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
