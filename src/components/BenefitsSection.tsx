import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Clock, Users, ShieldCheck, Building2, Zap, ArrowRight } from "lucide-react";
import BookDemoDialog from "./BookDemoDialog";

const benefits = [
  {
    icon: Clock,
    stat: 70,
    statSuffix: "%",
    statLabel: "less admin time",
    title: "Cut Admin by 70%",
    description:
      "Automate rotas, tasks, and compliance tracking so your team spends time on patients, not paperwork.",
  },
  {
    icon: Users,
    stat: 100,
    statSuffix: "%",
    statLabel: "staffing visibility",
    title: "Eliminate Staffing Blind Spots",
    description:
      "See exactly who's working, where, and when — maximise patient throughput across every site.",
  },
  {
    icon: ShieldCheck,
    stat: 0,
    statSuffix: "",
    statLabel: "audit surprises",
    title: "Stay Audit-Ready, Always",
    description:
      "Compliance data lives in one place, time-stamped and inspection-ready — no more last-minute scrambles.",
  },
  {
    icon: Building2,
    stat: 1,
    statSuffix: "",
    statLabel: "system for all sites",
    title: "One System, Every Site",
    description:
      "Manage multiple locations with different hours, rooms, and teams — all from a single dashboard.",
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
  },
];

const CountUp = ({
  target,
  suffix = "",
  display,
}: {
  target: number | null;
  suffix: string;
  display?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

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
      <span ref={ref} className="text-primary font-bold text-4xl sm:text-5xl font-display">
        {isInView ? display : "—"}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-primary font-bold text-4xl sm:text-5xl font-display">
      {done ? `${target}${suffix}` : `${value}${suffix}`}
    </span>
  );
};

const BenefitsSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const hero = benefits[0];
  const grid = benefits.slice(1);

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
          className="font-display font-bold text-center text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mb-14"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Unlock Your Clinic's <span className="text-gradient">Full Potential</span>
        </motion.h2>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
        >
          {/* Gradient left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-[hsl(180,50%,55%)] to-[hsl(260,45%,65%)] rounded-l-2xl" />

          <div className="flex flex-col md:flex-row items-center gap-8 p-8 sm:p-10 pl-10 sm:pl-12">
            {/* Stat */}
            <div className="flex flex-col items-center md:items-start shrink-0">
              <CountUp target={hero.stat} suffix={hero.statSuffix} />
              <span className="text-sm text-gray-500 font-medium mt-1">{hero.statLabel}</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gray-200" />

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <hero.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">{hero.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-lg">{hero.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {grid.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl" />

              <div className="p-6 pl-8">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900">{benefit.title}</h3>
                </div>

                {/* Stat */}
                <div className="mb-3">
                  <CountUp
                    target={benefit.stat}
                    suffix={benefit.statSuffix}
                    display={benefit.statDisplay}
                  />
                  <span className="text-sm text-gray-500 font-medium ml-2">{benefit.statLabel}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Box — full-bleed */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto rounded-3xl py-16 sm:py-20 px-6 sm:px-14 text-center flex flex-col items-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsla(143, 35%, 85%, 1) 12%, hsla(114, 67%, 47%, 1) 100%)" }}
      >
        {/* Radial glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 60%)" }}
        />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <h3 className="relative font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-3">
          Less Admin. <span className="opacity-90">More Patient Care.</span>
        </h3>
        <p className="relative font-display font-medium text-lg sm:text-xl text-primary-foreground/70 mb-4">
          What are you waiting for?
        </p>
        <p className="relative text-sm text-primary-foreground/60 mb-10">
          Join 50+ UK practices already transforming their operations
        </p>
        <motion.button
          onClick={() => setDemoOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center px-10 py-5 rounded-xl bg-white text-primary font-display font-semibold text-xl hover:brightness-95 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)]"
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
