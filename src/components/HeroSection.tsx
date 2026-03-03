const HeroSection = () => {
  return (
    <section className="px-5 pt-7 pb-6 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/[0.06] border border-success/[0.18] rounded-full text-[11px] font-semibold text-success mb-4">
        <span className="w-1.5 h-1.5 bg-success rounded-full blink-dot" />
        שיעור חדש בחינם — לזמן מוגבל
      </div>

      {/* Title */}
      <h1 className="font-heading font-black leading-tight mb-3 text-xl">
        בזמן שאחרים מחכים שהשוק יעלה
        <br />
        יש אנשים שמייצרים <span className="gold-gradient-text">כסף בכל יום</span>
        <br />
        ממסחר יומי!
      </h1>

      {/* Subtitle */}
      <p className="text-lg font-heading font-bold text-foreground mb-5">
        השאלה היא באיזה צד אתה?
      </p>

      {/* Free class box */}
      <div className="bg-card border border-primary/10 rounded-xl p-4 mb-5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-[3px] gold-gradient-bg" />
        <p className="font-heading font-extrabold text-base text-foreground mb-1">
          ההדרכה בחינם לחלוטין
        </p>
        <p className="text-xs text-destructive font-semibold">
          🔥 מוגבל ל-200 איש הראשונים
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-7 text-center">
        בהדרכה תגלה איך מסחר יומי עובד באמת — איך לזהות הזדמנויות בזמן אמת, לנהל סיכון בצורה חכמה, ולבנות מיומנות שיכולה להפוך למקור רווח נוסף.
      </p>
    </section>);

};

export default HeroSection;