import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="px-5 py-7 bg-secondary">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full aspect-video bg-card border border-primary/[0.08] rounded-2xl flex flex-col items-center justify-center gap-2 mb-3.5"
      >
        <div className="w-12 h-12 gold-gradient-bg rounded-full flex items-center justify-center text-xl text-primary-foreground pulse-ring">
          ▶
        </div>
        <span className="text-[10px] text-muted">טריילר של 60 שניות</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-xs text-muted-foreground text-center leading-7"
      >
        גלו את השיטה שעוזרת לי לנתח שווקים בזמן אמת.
      </motion.p>
    </section>
  );
};

export default VideoSection;
