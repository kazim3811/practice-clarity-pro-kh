import { motion } from "framer-motion";
import { Users, ShieldAlert, CalendarClock, MessageSquare, Database } from "lucide-react";

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

const PainPoints = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-20 leading-tight"
        >
          Stop Managing Your Rota.
          <br />
          Start Leading Your Surgery.
        </motion.h2>

        <div className="space-y-16 sm:space-y-24">
          {painPoints.map((point, index) => {
            const isEven = index % 2 === 1;
            const Icon = point.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col sm:flex-row items-start gap-6 ${
                  isEven ? "sm:flex-row-reverse sm:text-right" : ""
                }`}
              >
                <div
                  className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center`}
                  style={{ backgroundColor: "hsl(172 66% 50% / 0.12)" }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: "hsl(172 66% 50%)" }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    {point.header}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
