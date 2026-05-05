import { motion } from "framer-motion";

const stats = [
  { num: "96%", label: "מהסוחרים מפסידים", sub: "כי הם מחפשים קיצורי דרך" },
  { num: "+8", label: "שנות מסחר אקטיבי", sub: "במשרה מלאה, בשטח" },
  { num: "₪500K", label: "המחיר ששילמתי ללמוד", sub: "כדי שאתה לא תצטרך" },
];

const StatsSection = () => {
  return (
    <section className="px-5 py-8 bg-gradient-to-b from-secondary/40 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <p className="text-[11px] font-semibold text-primary tracking-widest mb-2">המספרים מאחורי</p>
        <h2 className="font-heading text-xl font-black">
          <span className="gold-gradient-text">המציאות</span> של מסחר יומי
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border border-primary/15 rounded-2xl p-5 text-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative">
              <div className="font-heading text-4xl font-black gold-gradient-text mb-1 leading-none">
                {s.num}
              </div>
              <div className="font-heading font-extrabold text-sm mt-2">{s.label}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{s.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
