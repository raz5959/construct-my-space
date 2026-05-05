const PositioningSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <div className="bg-gradient-to-b from-card to-transparent border border-border rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="font-mono text-[120px] leading-[0.7] accent-text opacity-30 -mb-8">"</div>
          <div className="font-mono text-[11px] text-muted tracking-[0.22em] uppercase flex items-center gap-3.5 mb-3.5 relative">
            <span className="w-7 h-px bg-primary" />
            § 03 · עמדה
          </div>
          <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.25] mb-6 max-w-[880px] tracking-tight relative">
            זה לא קורס שמבטיח לך{" "}
            <span className="text-destructive line-through">כסף</span>.
            <br />
            זה קורס שמחזיר אותך <em className="not-italic accent-text">לתהליך.</em>
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[720px] leading-[1.75] mb-3.5 relative">
            אני לא מוכר חלום. לא הולך להראות לך screenshot של חשבון מנופח, ולא מבטיח לך כמה אחוזים ביום.
          </p>
          <p className="text-[17px] text-muted-foreground max-w-[720px] leading-[1.75] relative">
            המטרה היא אחרת: להחזיר אותך לחשוב בבהירות. לשלוט בביצוע. ולהבין את ההבדל בין הימור — לבין החלטה מקצועית מבוססת תהליך.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
