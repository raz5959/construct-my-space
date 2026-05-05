import LeadForm from "./LeadForm";
import tradingOffice from "@/assets/trading-office.png";

const HeroSection = () => {
  return (
    <section className="max-w-site mx-auto px-5 md:px-7 pt-12 md:pt-20 pb-10 md:pb-16 grid md:grid-cols-[1.15fr_.85fr] gap-10 md:gap-16 items-start">
      <div>
        <h1 className="text-[36px] md:text-[56px] font-extrabold leading-[1.02] tracking-tight my-6 text-balance">
          תפסיק לסחור <span className="strike-danger">בניחוש</span>.
          <br />
          תתחיל לסחור <span className="accent-text">לפי נתונים.</span>
        </h1>

        <p className="text-[17px] md:text-lg text-muted-foreground max-w-[540px] leading-[1.7] mb-9">
          קורס חינמי לסוחרים שרוצים להבין איך לגשת לשוק ההון עם תהליך, סטטיסטיקה ושליטה — בלי הבטחות, בלי קיצורי דרך.
        </p>

        <div className="grid grid-cols-3 border-y border-border mb-9">
          <div className="py-[18px] px-4 border-l border-border">
            <div className="font-mono text-[22px] font-semibold text-foreground">FREE</div>
            <div className="text-xs text-muted mt-1 tracking-wide">פוקוס: מסחר יומי</div>
          </div>
          <div className="py-[18px] px-4 border-l border-border">
            <div className="font-mono text-[22px] font-semibold text-foreground">04</div>
            <div className="text-xs text-muted mt-1 tracking-wide">Edge · Timing · Risk · Mind</div>
          </div>
          <div className="py-[18px] px-4">
            <div className="font-mono text-[22px] font-semibold text-foreground">100%</div>
            <div className="text-xs text-muted mt-1 tracking-wide">תוכן לימודי טהור</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold text-[15px] border border-primary transition-all hover:shadow-[0_0_0_4px_rgba(61,240,168,0.18)] hover:-translate-y-px"
          >
            <span>שלחו לי את הקורס החינמי</span>
            <span>←</span>
          </a>
          <a
            href="#problem"
            className="px-5 py-4 rounded-lg font-semibold text-sm text-muted-foreground border border-line-2 transition-all hover:text-foreground"
          >
            איך זה עובד
          </a>
        </div>

        <div className="text-xs text-muted mt-4 font-mono tracking-wide">
          ללא התחייבות <span className="mx-1.5 text-line-2">·</span> תוכן לימודי <span className="mx-1.5 text-line-2">·</span> מתאים לסוחרים שרוצים לעבוד מסודר
        </div>
      </div>

      {/* Right column: visual + form */}
      <div>
        <div className="hero-visual">
          <img src={tradingOffice} alt="0DTE LAB trading room" loading="lazy" />
        </div>
        <LeadForm />
      </div>
    </section>
  );
};

export default HeroSection;
