const HeroSection = () => {
  const bullets = [
    { text: "בלי ניסיון קודם", sub: "— גם למתחילים" },
    { text: "גישה מבוססת נתונים", sub: "— לא תחושות" },
    { text: "תוכנית פעולה ברורה", sub: "" },
  ];

  return (
    <section className="px-5 pt-7 pb-6">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/[0.06] border border-success/[0.18] rounded-full text-[11px] font-semibold text-success mb-4">
        <span className="w-1.5 h-1.5 bg-success rounded-full blink-dot" />
        שיעור חדש בחינם — לזמן מוגבל
      </div>

      {/* Title */}
      <h1 className="font-heading text-[26px] font-black leading-tight mb-3">
        איך לייצר <span className="gold-gradient-text">הכנסה יומית</span>
        <br />
        ממסחר בשוק ההון
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-muted-foreground leading-7 mb-5">
        בשיעור הזה אני חושף את{" "}
        <strong className="text-foreground">השיטה המדויקת</strong> שמאפשרת לי
        לייצר הכנסה ממסחר יומי במניות — שיטה שפיתחתי בזכות הרקע שלי ב-Big Data.
      </p>

      {/* Bullet points */}
      <div className="flex flex-col gap-2.5 mb-5">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-[13px] font-medium">
            <div className="w-[22px] h-[22px] bg-success/[0.08] border border-success/[0.18] rounded-md flex items-center justify-center text-[11px] text-success shrink-0">
              ✓
            </div>
            <span>
              <strong className="text-foreground">{b.text}</strong>
              {b.sub && <span className="text-foreground"> {b.sub}</span>}
            </span>
          </div>
        ))}
      </div>

      {/* Social proof */}
      <div className="flex items-center gap-3 pt-3.5 border-t border-foreground/[0.04]">
        <div className="flex">
          {["ד", "א", "י", "+"].map((letter, i) => {
            const colors = ["bg-blue-600", "bg-green-600", "bg-red-600", "gold-gradient-bg"];
            return (
              <div
                key={i}
                className={`w-7 h-7 rounded-full border-2 border-background -ml-2 flex items-center justify-center text-[10px] font-bold ${colors[i]} ${i === 3 ? "text-primary-foreground" : "text-foreground"}`}
                style={{ zIndex: 4 - i }}
              >
                {letter}
              </div>
            );
          })}
        </div>
        <div className="text-[11px] text-muted">
          <strong className="text-foreground block text-xs">1,000+ תלמידים</strong>
          שכבר למדו את השיטה
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
