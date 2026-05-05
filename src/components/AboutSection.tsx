import razPortrait from "@/assets/raz-portrait.png";

const tags = ["OPTIONS", "FUTURES", "STOCKS", "PRICE ACTION", "EXECUTION", "STATISTICAL EDGE", "RISK"];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <div className="grid md:grid-cols-[.9fr_1.1fr] gap-10 md:gap-16 items-center">
          {/* Portrait */}
          <div className="aspect-[4/5] bg-card border border-border rounded-2xl relative overflow-hidden">
            <img
              src={razPortrait}
              alt="רז אלקבץ — סוחר ומייסד 0DTE LAB"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "contrast(1.04) saturate(0.92) brightness(0.92)" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%), radial-gradient(circle at 50% 25%, rgba(61,240,168,0.10), transparent 55%)",
              }}
            />
            <span className="absolute left-[18px] top-[18px] font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase z-10">
              // OPERATOR
            </span>
          </div>

          <div>
            <h3 className="text-sm accent-text font-mono tracking-[0.18em] uppercase mb-4">§ 04 · מי עומד מאחורי</h3>
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.1] mb-5 tracking-tight">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
