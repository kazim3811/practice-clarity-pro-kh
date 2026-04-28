import { Users, ShieldAlert, CalendarClock, MessageSquare, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    icon: Users,
    header: "Your Rota Falls Apart Weekly",
    body: "Your rota lives in spreadsheets, breaks constantly, and leaves you scrambling to plug last-minute gaps.",
  },
  {
    icon: ShieldAlert,
    header: "You're Not Audit-Ready",
    body: "Compliance is scattered across systems, so when inspections come, you're chasing evidence instead of being prepared.",
  },
  {
    icon: CalendarClock,
    header: "You're Leaving Appointments on the Table",
    body: "Without a clear view of staffing and rooms, capacity goes unused and patients go unseen.",
  },
  {
    icon: MessageSquare,
    header: "Your Team Is Drowning in Admin",
    body: "Endless WhatsApps, emails, and updates eat into your day and slow everything down.",
  },
  {
    icon: Database,
    header: "Everything Lives in Different Places",
    body: "Staff, rota, and compliance data are split across tools—leading to duplication, confusion, and mistakes.",
  },
];

const keyStats = [
  { value: "£50k+", label: "annual locum overspend risk" },
  { value: "15–20%", label: "appointment capacity wasted" },
  { value: "20%+", label: "team bandwidth lost to admin" },
  { value: "90 days", label: "annual effort on manual processes" },
];

const StickyPainCard = ({
  point,
  index,
}: {
  point: (typeof painPoints)[number];
  index: number;
}) => {
  const Icon = point.icon;
  return (
    <div
      className="sticky w-full"
      style={{ top: `${88 + index * 24}px` }}
    >
      <div
        className={cn(
          "p-6 rounded-2xl shadow-lg flex flex-col h-auto w-full",
          "bg-zinc-800 border border-zinc-700"
        )}
      >
        <div className="flex items-start gap-4">
          <div className="mt-0.5 rounded-lg bg-destructive/10 p-2.5 flex-shrink-0">
            <Icon className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg text-foreground">{point.header}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {point.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PainPoints = () => {
  const scrollContainerHeight = `calc(100vh + ${painPoints.length * 120}px)`;

  return (
    <section className="bg-gradient-to-b from-zinc-300 via-zinc-400 to-slate-500 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl border border-zinc-700/60 bg-zinc-900/95 p-6 shadow-2xl sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left: sticky heading, stats */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-20">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 font-display text-sm">
            <div className="h-2 w-2 rounded-full bg-destructive" />
            <span className="text-zinc-300">We understand your challenges</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Drowning in admin and spreadsheets?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            It&apos;s costing you more than you think!
          </p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {keyStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-zinc-600/80 bg-gradient-to-br from-zinc-800 via-zinc-800 to-zinc-700/90 p-4 ring-1 ring-inset ring-white/10 shadow-[0_8px_24px_rgba(15,23,42,0.35)]"
              >
                <p
                  className="font-display text-2xl font-semibold leading-none sm:text-3xl text-destructive"
                  aria-label={stat.value}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: scrolling stacking cards */}
        <div
          className="relative flex flex-col gap-4"
          style={{ height: scrollContainerHeight }}
        >
          {painPoints.map((point, index) => (
            <StickyPainCard key={point.header} point={point} index={index} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default PainPoints;
