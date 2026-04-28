import { useEffect } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Hammer, Mic2, Wrench } from "lucide-react";
import teamMirran from "@/assets/team-mirren.png";
import teamTak from "@/assets/team-tak.png";
import teamKazim from "@/assets/team-kazim.png";

/** Same three stops for outer card (135deg) and name/bio divider (90deg). */
function teamCardBorderGradient(stops: readonly [string, string, string]): string {
  const [a, b, c] = stops;
  return `linear-gradient(135deg, ${a} 0%, ${b} 50%, ${c} 100%)`;
}

function teamBioDividerGradient(stops: readonly [string, string, string]): string {
  const [a, b, c] = stops;
  return `linear-gradient(90deg, ${a} 0%, ${b} 50%, ${c} 100%)`;
}

type TeamMember = {
  name: string;
  role: string;
  Icon: LucideIcon;
  image: string;
  bio: string[];
  /** HSL color stops — outer border + bio divider */
  accentStops: readonly [string, string, string];
};

const team: TeamMember[] = [
  {
    name: "Dr Mirran Carpenter",
    role: "Clinical Lead | Voice of the customer",
    Icon: Mic2,
    image: teamMirran,
    accentStops: ["hsl(172 72% 46%)", "hsl(185 60% 42%)", "hsl(195 55% 40%)"] as const,
    bio: [
      "A GP by trade, I currently run three clinics supporting over 10,000 patients. Having managed a team of 50+, I've lived the exact frustrations SuperGP is designed to solve.",
      "I act as Voice of the customer here, making sure every feature we build genuinely meets the shifting demands of the NHS and makes sense on the front lines.",
    ],
  },
  {
    name: "Tak Cheung",
    role: "Product Director",
    Icon: Hammer,
    image: teamTak,
    accentStops: ["hsl(265 55% 58%)", "hsl(280 50% 52%)", "hsl(245 50% 48%)"] as const,
    bio: [
      "With over 12 years of experience building at scale for Amazon and BT, I now focus on transforming legacy sectors with modern digital solutions.",
      "At SuperGP, I lead product development; obsessing over the user experience to ensure The SuperGP app is as intuitive as it is powerful, ultimately making life easier for practice teams.",
    ],
  },
  {
    name: "Kazim Hussein",
    role: "CTO",
    Icon: Wrench,
    image: teamKazim,
    accentStops: ["hsl(38 90% 52%)", "hsl(28 85% 48%)", "hsl(200 65% 45%)"] as const,
    bio: [
      "Backed by 15 years in technology and consulting, I oversee the technical delivery of the platform.",
      "My focus is on ensuring SuperGP isn't just fast and responsive, but built on a secure, best-in-class infrastructure that practices can rely on 24/7.",
    ],
  },
];

const TeamSection = () => {
  // #region agent log
  useEffect(() => {
    fetch("http://127.0.0.1:7327/ingest/f62c733a-6f21-472f-b6df-fbe754224eb5", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "abc4c9" },
      body: JSON.stringify({
        sessionId: "abc4c9",
        runId: "verify",
        hypothesisId: "H2",
        location: "TeamSection.tsx:mount",
        message: "TeamSection mounted (asset imports resolved)",
        data: { mirranSrcType: typeof teamMirran },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
  }, []);
  // #endregion

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
          className="mb-6 flex justify-start"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface font-display text-xs text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            Meet the team
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-display text-3xl font-bold leading-tight text-foreground text-left sm:text-4xl lg:text-5xl"
        >
          Built by{" "}
          <span>People Who Get It</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 max-w-2xl font-body text-base leading-relaxed text-muted-foreground text-left sm:text-lg"
        >
          SuperGP is designed by GP&apos;s and built by tech Experts.
        </motion.p>

        {/* Team cards — single surface per profile (photo, name, bio) */}
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="h-full min-w-0"
            >
              <div
                className="h-full min-w-0 rounded-2xl p-px"
                style={{ background: teamCardBorderGradient(member.accentStops) }}
              >
                <div className="relative flex h-full min-w-0 flex-col items-center rounded-[calc(1rem-1px)] bg-surface px-5 pt-6 pb-5 text-center sm:px-6 sm:pt-6 sm:pb-6 lg:pt-5">
                  <div
                    className="absolute left-4 top-4 z-20 flex size-9 items-center justify-center rounded-lg border border-border bg-background/80 text-primary shadow-sm backdrop-blur-sm sm:left-5 sm:top-5"
                    title={member.role}
                  >
                    <member.Icon className="size-[18px]" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="relative isolate shrink-0 self-center">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-3 z-0 rounded-full bg-gradient-to-br from-primary/35 via-violet-500/25 to-primary/20 opacity-[0.55] blur-xl sm:-inset-4 sm:blur-2xl"
                    />
                    <div className="relative z-10 rounded-full bg-gradient-to-br from-primary/45 via-violet-500/30 to-primary/25 p-[2px] shadow-[0_0_24px_hsl(var(--glow)/0.12),0_0_48px_hsl(260_45%_65%/0.07)]">
                      <div className="h-40 w-40 overflow-hidden rounded-full bg-secondary/60 ring-2 ring-background sm:h-44 sm:w-44">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          width={512}
                          height={680}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reserve ~2 name lines so roles + bios line up across cards; keep min-h modest on lg to avoid a gap above short names */}
                  <div className="mt-4 w-full min-w-0 sm:mt-3 lg:mt-2">
                    <div className="flex min-h-[2.5rem] w-full flex-col justify-center sm:min-h-[3.125rem] sm:justify-end lg:min-h-[3.5rem]">
                      <h3 className="font-display font-semibold leading-snug text-gradient text-base sm:text-xl sm:font-bold lg:text-2xl lg:leading-tight">
                        {member.name}
                      </h3>
                    </div>
                    <p className="mt-0.5 font-body text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-5 flex min-h-0 w-full min-w-0 flex-1 flex-col">
                    <div
                      aria-hidden
                      className="mb-3 h-[2px] w-full shrink-0 rounded-full opacity-90"
                      style={{ background: teamBioDividerGradient(member.accentStops) }}
                    />
                    <div className="flex min-h-0 w-full max-w-prose flex-1 flex-col items-center justify-start gap-3 text-center">
                      {member.bio.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="w-full min-w-0 font-display text-sm leading-relaxed text-foreground/90 text-pretty"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
