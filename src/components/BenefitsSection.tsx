import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Clock, Users, ShieldCheck, Building2, Zap, ArrowRight } from "lucide-react";
import BookDemoDialog from "./BookDemoDialog";

type BenefitAccent = "teal" | "cyan" | "violet" | "indigo" | "slate";

type Benefit = {
  icon: LucideIcon;
  stat: number | null;
  statSuffix: string;
  statLabel: string;
  title: string;
  description: string;
  statDisplay?: string;
  accent: BenefitAccent;
};

const accentStyles: Record<
  BenefitAccent,
  {
    surface: string;
    stripe: string;
    iconBg: string;
    iconText: string;
    statText: string;
    cardShadow: string;
    hoverShadow: string;
    hoverRing: string;
    border: string;
  }
> = {
  teal: {
    surface: "bg-gradient-to-br from-white via-white to-teal-50/90",
    stripe: "bg-gradient-to-b from-teal-500 via-primary to-cyan-500",
    iconBg: "bg-teal-500/10",
    iconText: "text-teal-600",
    statText: "text-teal-600 font-bold text-4xl sm:text-5xl font-display",
    cardShadow:
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_22px_40px_-12px_rgba(13,148,136,0.18)]",
    hoverShadow:
      "hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_28px_50px_-14px_rgba(13,148,136,0.22)]",
    hoverRing: "hover:ring-teal-500/20",
    border: "border-teal-200/40",
  },
  cyan: {
    surface: "bg-gradient-to-br from-white via-cyan-50/40 to-cyan-50/80",
    stripe: "bg-gradient-to-b from-cyan-500 to-teal-500",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-600",
    statText: "text-cyan-600 font-bold text-4xl sm:text-5xl font-display",
    cardShadow:
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_22px_40px_-12px_rgba(8,145,178,0.16)]",
    hoverShadow:
      "hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_28px_50px_-14px_rgba(8,145,178,0.2)]",
    hoverRing: "hover:ring-cyan-500/20",
    border: "border-cyan-200/45",
  },
  violet: {
    surface: "bg-gradient-to-br from-white via-violet-50/35 to-violet-100/60",
    stripe: "bg-gradient-to-b from-violet-500 to-indigo-500",
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-600",
    statText: "text-violet-600 font-bold text-4xl sm:text-5xl font-display",
    cardShadow:
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_22px_40px_-12px_rgba(124,58,237,0.14)]",
    hoverShadow:
      "hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_28px_50px_-14px_rgba(124,58,237,0.18)]",
    hoverRing: "hover:ring-violet-500/20",
    border: "border-violet-200/40",
  },
  indigo: {
    surface: "bg-gradient-to-br from-white via-indigo-50/30 to-indigo-50/70",
    stripe: "bg-gradient-to-b from-indigo-500 to-violet-600",
    iconBg: "bg-indigo-500/10",
    iconText: "text-indigo-600",
    statText: "text-indigo-600 font-bold text-4xl sm:text-5xl font-display",
    cardShadow:
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_22px_40px_-12px_rgba(79,70,229,0.14)]",
    hoverShadow:
      "hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_28px_50px_-14px_rgba(79,70,229,0.18)]",
    hoverRing: "hover:ring-indigo-500/20",
    border: "border-indigo-200/40",
  },
  slate: {
    surface: "bg-gradient-to-br from-white via-slate-50/50 to-slate-100/70",
    stripe: "bg-gradient-to-b from-slate-500 to-slate-600",
    iconBg: "bg-slate-500/10",
    iconText: "text-slate-600",
    statText: "text-slate-700 font-bold text-4xl sm:text-5xl font-display",
    cardShadow:
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_22px_40px_-12px_rgba(71,85,105,0.12)]",
    hoverShadow:
      "hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_28px_50px_-14px_rgba(71,85,105,0.16)]",
    hoverRing: "hover:ring-slate-400/25",
    border: "border-slate-200/50",
  },
};

const benefits: Benefit[] = [
  {
    icon: Clock,
    stat: 70,
    statSuffix: "%",
    statLabel: "less admin time",
    title: "Cut Admin by 70%",
    description:
      "Automate rotas, tasks, and compliance tracking so your team spends time on patients, not paperwork.",
    accent: "teal",
  },
  {
    icon: Users,
    stat: 100,
    statSuffix: "%",
    statLabel: "staffing visibility",
    title: "Eliminate Staffing Blind Spots",
    description:
      "See exactly who's working, where, and when — maximise patient throughput across every site.",
    accent: "cyan",
  },
  {
    icon: ShieldCheck,
    stat: 0,
    statSuffix: "",
    statLabel: "audit surprises",
    title: "Stay Audit-Ready, Always",
    description:
      "Compliance data lives in one place, time-stamped and inspection-ready — no more last-minute scrambles.",
    accent: "violet",
  },
  {
    icon: Building2,
    stat: 1,
    statSuffix: "",
    statLabel: "system for all sites",
    title: "One System, Every Site",
    description:
      "Manage multiple locations with different hours, rooms, and teams — all from a single dashboard.",
    accent: "indigo",
  },
  {
    icon: Zap,
    stat: null,
    statSuffix: "",
    statLabel: "reliable operations",
    title: "Minimise Daily Disruptions",
    description:
      "Reliable scheduling and automated task flows keep your practice running smoothly, every single day.",
    statDisplay: "24/7",
    accent: "slate",
  },
];

const CountUp = ({
  target,
  suffix = "",
  display,
  className,
}: {
  target: number | null;
  suffix: string;
  display?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const statClass = className ?? "text-primary font-bold text-4xl sm:text-5xl font-display";

  useEffect(() => {
    if (!isInView || display) return;
    const controls = animate(motionVal, target ?? 0, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return controls.stop;
  }, [isInView, target, display, motionVal]);

  if (display) {
    return (
      <span ref={ref} className={statClass}>
        {isInView ? display : "—"}
      </span>
    );
  }

  return (
    <span ref={ref} className={statClass}>
      {done ? `${target}${suffix}` : `${value}${suffix}`}
    </span>
  );
};

const BenefitsSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const hero = benefits[0];
  const grid = benefits.slice(1);
  const heroAccent = accentStyles[hero.accent];

  return (
    <section
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-start"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white font-display text-xs text-gray-500 font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Unlock the benefits
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 max-w-3xl font-display text-3xl font-bold leading-tight text-left sm:text-4xl lg:text-5xl"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Upgrade to SuperGP and remove the chaos
        </motion.h2>

        {/* Hero Card — gradient frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="gradient-border-card mb-8 group"
        >
          <div
            className={[
              "relative rounded-[calc(1rem-1px)] overflow-hidden",
              "border border-white/50",
              heroAccent.surface,
              heroAccent.cardShadow,
              heroAccent.hoverShadow,
              "hover:scale-[1.01] hover:ring-2 hover:ring-offset-2 hover:ring-offset-transparent",
              heroAccent.hoverRing,
              "transition-all duration-300",
              "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]",
            ].join(" ")}
          >
            <div
              className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-violet-400/15 blur-3xl pointer-events-none"
              aria-hidden
            />

            <div
              className={`absolute left-0 top-0 bottom-0 w-1.5 ${heroAccent.stripe} rounded-l-[calc(1rem-1px)]`}
            />

            <div className="flex flex-col md:flex-row items-center gap-8 p-8 sm:p-10 pl-10 sm:pl-12 relative">
              <div className="flex flex-col items-center md:items-start shrink-0">
                <CountUp
                  target={hero.stat}
                  suffix={hero.statSuffix}
                  className={heroAccent.statText}
                />
                <span className="text-sm text-gray-500 font-medium mt-1">{hero.statLabel}</span>
              </div>

              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${heroAccent.iconBg} flex items-center justify-center`}
                  >
                    <hero.icon className={`w-5 h-5 ${heroAccent.iconText}`} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900">{hero.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed max-w-lg">{hero.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {grid.map((benefit, i) => {
            const a = accentStyles[benefit.accent];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={[
                  "group relative rounded-2xl overflow-hidden",
                  a.surface,
                  a.border,
                  "border",
                  a.cardShadow,
                  a.hoverShadow,
                  "hover:scale-[1.02] hover:ring-2 hover:ring-offset-2 hover:ring-offset-transparent",
                  a.hoverRing,
                  "transition-all duration-300",
                  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)]",
                ].join(" ")}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${a.stripe} rounded-l-2xl`} />

                <div className="p-6 pl-8 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${a.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <benefit.icon className={`w-5 h-5 ${a.iconText}`} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900">{benefit.title}</h3>
                  </div>

                  <div className="mb-3">
                    <CountUp
                      target={benefit.stat}
                      suffix={benefit.statSuffix}
                      display={benefit.statDisplay}
                      className={a.statText}
                    />
                    <span className="text-sm text-gray-500 font-medium ml-2">{benefit.statLabel}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Box — full-bleed */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto rounded-3xl py-16 sm:py-20 px-6 sm:px-14 text-center flex flex-col items-center relative z-10 overflow-hidden bg-background"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <h3 className="relative font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3">
          Less Admin. <span className="text-gradient">More Patient Care.</span>
        </h3>
        <p className="relative font-display font-medium text-xl sm:text-2xl text-white mb-4">
          What are you waiting for?
        </p>
        <p className="relative text-sm text-white/70 mb-10">
          Start transforming your practice operations today.
        </p>
        <motion.button
          onClick={() => setDemoOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center px-10 py-5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20"
        >
          Start Your Journey
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="ml-2"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.span>
        </motion.button>
      </motion.div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default BenefitsSection;
