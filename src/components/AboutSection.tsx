import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-5 py-8 border-t border-foreground/[0.04]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-5"
      >
        <p className="text-[11px] font-semibold text-primary tracking-widest mb-2">מי אני</p>
        <h2 className="font-heading text-2xl font-black mb-3">
          <span className="gold-gradient-text">רז אלקבץ</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-7">
          סוחר במשרה מלאה. הגעתי לתחום מתוך אותו חיפוש של "כסף קל ומהיר" שכולם מכירים — והתרסקתי.
          הפסדתי מאות אלפי שקלים, יום אחד אפילו 50 אלף ביום אחד. אבל במקום לוותר, הבנתי דבר אחד:
          <span className="text-foreground font-semibold"> האשם היחיד הוא אני, לא השוק.</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="bg-card border border-primary/10 rounded-2xl p-5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 left-0 h-[3px] gold-gradient-bg" />
        <p className="text-sm text-foreground/90 leading-7 text-center italic">
          "מסחר זה המקצוע האולטימטיבי לטוב ולרע — הוא יאתגר אותך, ישבור אותך, ובסוף יבנה אותך מחדש."
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
