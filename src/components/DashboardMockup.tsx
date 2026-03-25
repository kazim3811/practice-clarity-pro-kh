import { motion } from "framer-motion";

const staff = [
  { name: "Dr. Patel", role: "GP Partner", status: "active", time: "08:00 – 18:00" },
  { name: "Dr. Khan", role: "Salaried GP", status: "active", time: "09:00 – 17:00" },
  { name: "S. Williams", role: "Nurse", status: "break", time: "08:30 – 16:30" },
  { name: "Dr. Ahmed", role: "Registrar", status: "active", time: "10:00 – 18:00" },
  { name: "J. Taylor", role: "HCA", status: "off", time: "—" },
];

const statusColor: Record<string, string> = {
  active: "bg-primary glow-dot",
  break: "bg-amber-400",
  off: "bg-muted-foreground/40",
};

const DashboardMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-4xl mx-auto perspective-1000"
    >
      {/* Main dashboard card */}
      <div className="rounded-2xl border border-border glow-border bg-surface overflow-hidden shadow-2xl shadow-primary/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-raised/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-body">SuperGP — Live Dashboard</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[10px] text-primary font-medium">LIVE</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {/* Left: Today overview */}
          <div className="md:col-span-2 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-headline text-sm">Today — Mon 24 Mar</h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                4 of 5 staff on duty
              </span>
            </div>

            {/* Staff table */}
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-surface-raised text-muted-foreground">
                    <th className="text-left py-2.5 px-3 font-medium">Staff</th>
                    <th className="text-left py-2.5 px-3 font-medium hidden sm:table-cell">Role</th>
                    <th className="text-left py-2.5 px-3 font-medium">Status</th>
                    <th className="text-left py-2.5 px-3 font-medium hidden sm:table-cell">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((s, i) => (
                    <tr key={i} className="border-t border-border/50 hover:bg-surface-raised/30 transition-colors">
                      <td className="py-2.5 px-3 text-foreground font-medium">{s.name}</td>
                      <td className="py-2.5 px-3 text-muted-foreground hidden sm:table-cell">{s.role}</td>
                      <td className="py-2.5 px-3">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${statusColor[s.status]}`} />
                          <span className="capitalize text-muted-foreground">{s.status}</span>
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-muted-foreground hidden sm:table-cell">{s.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Quick stats */}
          <div className="border-t md:border-t-0 md:border-l border-border p-5 space-y-4 bg-surface-raised/30">
            <h3 className="font-display font-semibold text-headline text-sm">Quick View</h3>
            
            <div className="space-y-3">
              <StatBlock label="Appointments" value="47 / 62" percent={76} />
              <StatBlock label="Wait Time" value="12 min" percent={40} color="emerald" />
              <StatBlock label="Tasks Open" value="8" percent={33} color="amber" />
            </div>

            <div className="pt-3 border-t border-border">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Alerts</p>
              <div className="space-y-2">
                <AlertItem text="Dr. Khan — room change to R3" />
                <AlertItem text="Flu vaccine stock: 14 remaining" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-4 top-16 hidden lg:block animate-float"
      >
        <div className="rounded-xl border border-border glow-border bg-surface p-3 shadow-xl w-52">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full bg-primary glow-dot" />
            <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">Live Update</span>
          </div>
          <p className="text-xs text-foreground">Dr. Patel checked in — Room 4</p>
          <p className="text-[10px] text-muted-foreground mt-1">Just now</p>
        </div>
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -left-4 bottom-20 hidden lg:block animate-float-delayed"
      >
        <div className="rounded-xl border border-border glow-border bg-surface p-3 shadow-xl w-44">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Clinic Efficiency</p>
          <p className="text-2xl font-display font-bold text-primary">94%</p>
          <p className="text-[10px] text-emerald-400 mt-0.5">↑ 12% vs last week</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatBlock = ({ label, value, percent, color = "primary" }: { label: string; value: string; percent: number; color?: string }) => {
  const barColor = color === "primary" ? "bg-primary" : color === "emerald" ? "bg-emerald-400" : "bg-amber-400";
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-foreground font-medium">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

const AlertItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 text-xs">
    <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default DashboardMockup;
