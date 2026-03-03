const VideoSection = () => {
  return (
    <section className="px-5 py-7 bg-secondary">
      <div className="w-full aspect-video bg-card border border-primary/[0.08] rounded-2xl flex flex-col items-center justify-center gap-2 mb-3.5">
        <div className="w-12 h-12 gold-gradient-bg rounded-full flex items-center justify-center text-xl text-primary-foreground pulse-ring">
          ▶
        </div>
        <span className="text-[10px] text-muted">טריילר של 60 שניות</span>
      </div>
      <p className="text-xs text-muted-foreground text-center leading-7">
        גלו את השיטה שעוזרת לי לנתח שווקים בזמן אמת.
      </p>
    </section>
  );
};

export default VideoSection;
