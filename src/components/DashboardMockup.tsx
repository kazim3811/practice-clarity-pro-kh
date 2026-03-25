import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const DashboardMockup = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl mx-auto lg:max-w-none"
    >
      <div className="rounded-2xl border border-border glow-border bg-surface overflow-hidden shadow-2xl shadow-primary/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-raised/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-body">
            SuperGP — Product Demo
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[10px] text-primary font-medium">LIVE</span>
          </div>
        </div>

        {/* Video area */}
        <div
          className="relative aspect-video bg-background flex items-center justify-center cursor-pointer group"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--glow) / 0.4) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--glow) / 0.4) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          {/* Play button + overlay text */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow"
            >
              <Play
                className="w-8 h-8 text-primary-foreground ml-1"
                fill="currentColor"
              />
            </motion.div>
            <p
              className="text-base font-display font-semibold"
              style={{ color: "hsl(222 47% 11%)" }}
            >
              Fix your clinic in 60 seconds
            </p>
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center px-4">
            <p className="text-xs text-muted-foreground font-body">
              See how GP clinics replace spreadsheets, WhatsApp, and rota chaos
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardMockup;
