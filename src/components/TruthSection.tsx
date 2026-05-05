import { motion } from "framer-motion";

const truths = [
  {
    icon: "🎯",
    title: "מסחר זה מקצוע, לא תחביב",
    desc: "לא חצי שעה ביום ולא 'כסף קל'. זה מקצוע לכל דבר — שדורש מחויבות, שיטה ומשמעת.",
  },
  {
    icon: "🧠",
    title: "השוק לא אשם — אתה כן",
    desc: "ברגע שלוקחים אחריות מלאה, הכל משתנה. בלי זה — אין סיכוי, גם עם השיטה הכי טובה בעולם.",
  },
  {
    icon: "⚡",
    title: "96% מפסידים — לא כי אי אפשר",
    desc: "אלא כי הם מחפשים קיצורי דרך. מי שמוכן לתהליך אמיתי — מגיע לתוצאות אמיתיות.",
  },
  {
    icon: "🛡️",
    title: "Skill לכל החיים",
    desc: "המטרה היא לא 'עוד עסקה'. המטרה היא לבנות בך סוחר שיודע לייצר הכנסה — לא משנה מה השוק עושה.",
  },
];

const TruthSection = () => {
  return (
    <section className="px-5 py-8 bg-secondary/40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <p className="text-[11px] font-semibold text-primary tracking-widest mb-2">מה שלא יספרו לך</p>
        <h2 className="font-heading text-xl font-black leading-tight">
          האמת על מסחר יומי —
          <br />
          <span className="gold-gradient-text">בלי סוכריות</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {truths.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-primary/10 rounded-xl p-4 flex gap-3 items-start"
          >
            <div className="text-2xl shrink-0">{t.icon}</div>
            <div>
              <h3 className="font-heading font-extrabold text-sm mb-1">{t.title}</h3>
              <p className="text-xs text-muted-foreground leading-6">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TruthSection;
