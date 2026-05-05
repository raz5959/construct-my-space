import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "אני מתחיל לגמרי, זה מתאים לי?",
    a: "בהחלט. ההדרכה בנויה כך שתבין את היסודות מאפס — בלי ז'רגון מיותר. דווקא מתחילים שלא 'נדבקו' בהרגלים רעים מתקדמים מהר יותר.",
  },
  {
    q: "כמה זמן ביום אצטרך להשקיע?",
    a: "מסחר יומי הוא מקצוע. אם אתה מחפש 'חצי שעה ביום' — זה לא בשבילך. מי שרציני באמת משקיע שעות של למידה ותרגול. בתמורה — מקבל skill לכל החיים.",
  },
  {
    q: "צריך הון התחלתי גדול?",
    a: "לא. אפשר להתחיל ולתרגל גם עם סכומים קטנים מאוד, ואפילו בחשבון דמו. החשוב הוא לבנות את היסודות — הכסף יבוא אחר כך.",
  },
  {
    q: "מה ההבדל בין ההדרכה הזו לכל הקורסים האחרים?",
    a: "אני לא מבטיח 'כסף קל'. אני מספר את האמת — גם כשהיא קשה. ההדרכה מבוססת על שנים של מסחר אמיתי, נפילות אמיתיות ולקחים אמיתיים. לא תיאוריה מויקיפדיה.",
  },
  {
    q: "ההדרכה באמת בחינם?",
    a: "כן, לחלוטין. בלי קאצ', בלי כרטיס אשראי. רק מוגבל ל-200 הראשונים — אחר כך הרישום נסגר.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-5 py-8 border-t border-foreground/[0.04]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <p className="text-[11px] font-semibold text-primary tracking-widest mb-2">שאלות נפוצות</p>
        <h2 className="font-heading text-xl font-black">
          הכל מה שרצית <span className="gold-gradient-text">לדעת</span>
        </h2>
      </motion.div>

      <div className="space-y-2">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-card border border-primary/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-right"
              >
                <span className="font-heading font-bold text-sm text-foreground flex-1">{f.q}</span>
                <span
                  className={`text-primary text-xl shrink-0 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-xs text-muted-foreground leading-7">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
