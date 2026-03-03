import { motion, type Easing } from "framer-motion";

const ease: Easing = "easeOut";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease }
});

const HeroSection = () => {
  return (
    <section className="px-5 pt-7 pb-6 text-center">

      {/* Title */}
      <motion.h1 {...fadeUp(0.25)} className="font-heading font-black leading-tight mb-3 text-xl">
        בזמן שאחרים מחכים שהשוק יעלה
        <br />
        יש אנשים שמייצרים <span className="gold-gradient-text">כסף בכל יום</span>
        <br />
        ממסחר יומי!
      </motion.h1>

      {/* Subtitle */}
      <motion.p {...fadeUp(0.4)} className="text-lg font-heading font-bold text-foreground mb-5">
        השאלה היא באיזה צד אתה?
      </motion.p>

      {/* Free class box */}
      <motion.div {...fadeUp(0.55)} className="bg-card border border-primary/10 rounded-xl p-4 mb-5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-[3px] gold-gradient-bg" />
        <p className="font-heading font-extrabold text-base mb-1 text-success">
          ההדרכה בחינם לחלוטין
        </p>
        <p className="text-xs text-destructive font-semibold"> מוגבל ל-200 איש הראשונים 🔥

        </p>
      </motion.div>

      {/* Description */}
      <motion.p {...fadeUp(0.7)} className="text-sm text-muted-foreground leading-7 text-center">
        בהדרכה תגלה איך מסחר יומי עובד באמת — איך לזהות הזדמנויות בזמן אמת, לנהל סיכון בצורה חכמה, ולבנות מיומנות שיכולה להפוך למקור רווח נוסף.
      </motion.p>
    </section>);

};

export default HeroSection;