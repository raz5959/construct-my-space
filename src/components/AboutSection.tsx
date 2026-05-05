const tags = ["OPTIONS", "FUTURES", "STOCKS", "PRICE ACTION", "EXECUTION", "STATISTICAL EDGE", "RISK"];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <div className="grid md:grid-cols-[.9fr_1.1fr] gap-10 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <div
            className="aspect-[4/5] bg-card border border-border rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 12px, rgba(255,255,255,.02) 12px 13px), linear-gradient(180deg, hsl(var(--card-2)) 0%, hsl(var(--background)) 100%)",
            }}
          >
            <span className="absolute left-[18px] top-[18px] font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              // OPERATOR
            </span>
            <span className="absolute inset-0 grid place-items-center text-muted font-mono text-[11px] tracking-[0.18em] uppercase">
              RAZ ELKABETS
            </span>
            <span className="absolute right-[18px] bottom-[18px] font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              TRADER
            </span>
          </div>

          <div>
            <h3 className="text-sm accent-text font-mono tracking-[0.18em] uppercase mb-4">§ 04 · מי עומד מאחורי</h3>
            <h2 className="text-[30px] md:text-[46px] font-extrabold leading-[1.1] mb-5 tracking-tight">
              0DTE LAB.
              <br />
              מעבדה לסוחרים שמאסו ברעש.
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] mb-3.5 max-w-[560px]">
              רז אלקבץ סוחר למחייתו כבר 6 שנים, פרייס אקשן, משמעת ביצוע וחשיבה סטטיסטית. הגישה שלי? שוק כסביבה הסתברותית, לא כתחזית.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8] mb-3.5 max-w-[560px]">
              0DTE LAB נבנה לסוחרים שמחפשים דרך ברורה, מובנית ומקצועית לגשת לשוק — בלי קבוצות טלגרם, בלי דרמה.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-muted-foreground px-3 py-1.5 border border-border rounded-full tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
