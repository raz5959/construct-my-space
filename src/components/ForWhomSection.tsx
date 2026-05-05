import { motion } from "framer-motion";

const ForWhomSection = () => {
  return (
    <section className="px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <p className="text-[11px] font-semibold text-primary tracking-widest mb-2">למי זה מתאים</p>
        <h2 className="font-heading text-xl font-black">
          ההדרכה הזו <span className="gold-gradient-text">לא לכולם</span>
        </h2>
        <p className="text-xs text-muted-foreground mt-2">אבל אם אתה מזהה את עצמך כאן — אתה במקום הנכון</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-card border border-success/20 rounded-xl p-4"
        >
          <p className="font-heading font-extrabold text-sm text-success mb-3">✓ זה בשבילך אם...</p>
          <ul className="space-y-2 text-xs text-foreground/85 leading-6">
            <li>• אתה מוכן להשקיע זמן ולעבור תהליך אמיתי</li>
            <li>• כבר ניסית, נפלת, ומחפש מישהו שיגיד לך את האמת</li>
            <li>• אתה רוצה לבנות מקצוע — לא לרדוף אחרי "פיק"</li>
            <li>• אתה מוכן לקחת אחריות מלאה על התוצאות שלך</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card border border-destructive/20 rounded-xl p-4"
        >
          <p className="font-heading font-extrabold text-sm text-destructive mb-3">✗ זה לא בשבילך אם...</p>
          <ul className="space-y-2 text-xs text-foreground/85 leading-6">
            <li>• אתה מחפש "כסף קל" או "התעשרות מהירה"</li>
            <li>• אתה לא מוכן ללמוד ולתרגל באופן עקבי</li>
            <li>• אתה רוצה הכנסה צדדית של חצי שעה ביום</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhomSection;
