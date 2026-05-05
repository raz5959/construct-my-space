import { SectionHeader } from "./ProblemSection";

const yes = [
  "אתה סוחר שרוצה מבנה ולא עוד אסטרטגיה",
  "אתה מוכן לעבוד על משמעת, לא רק לקרוא עליה",
  "אתה רוצה להבין תהליך — לא לקבל \"תשובה\"",
  "נמאס לך מקבוצות טלגרם ורעש",
  "אתה רוצה לגשת לשוק כמקצוען, לא כחובב",
];

const no = [
  "אתה מחפש רווח מובטח",
  "אתה מחפש \"מי קונה ומתי\" במקום ללמוד",
  "אתה מחפש \"כסף קל\" או shortcut",
  "אתה לא מוכן לקחת אחריות על הביצוע שלך",
  "אתה רוצה שמישהו יחליט בשבילך בזמן אמת",
];

const ForWhomSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <SectionHeader
          num="§ 05 · התאמה"
          title={<>למי זה מתאים. <em className="not-italic accent-text">ולמי לא.</em></>}
          sub="הקורס לא מנסה לדבר לכולם. הוא מנסה לדבר לסוחרים נכונים."
        />

        <div className="grid md:grid-cols-2 border border-border rounded-2xl overflow-hidden">
          <div
            className="p-9 md:p-10"
            style={{ background: "linear-gradient(180deg, hsl(var(--primary) / 0.04), transparent)" }}
          >
            <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-[0.18em] uppercase accent-text">
              <span className="w-6 h-6 rounded-full grid place-items-center border border-current text-[13px]">✓</span>
              <span>FOR</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">הקורס בנוי בשבילך אם —</h3>
            <ul className="list-none">
              {yes.map((t, i) => (
                <li key={i} className="py-3.5 border-b border-border last:border-b-0 text-[15px] text-muted-foreground flex gap-3 items-start">
                  <span className="flex-none w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-9 md:p-10 border-t md:border-t-0 md:border-r border-border"
            style={{ background: "linear-gradient(180deg, hsl(var(--destructive) / 0.03), transparent)" }}
          >
            <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-[0.18em] uppercase text-destructive">
              <span className="w-6 h-6 rounded-full grid place-items-center border border-current text-[13px]">×</span>
              <span>NOT FOR</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">הקורס לא בשבילך אם —</h3>
            <ul className="list-none">
              {no.map((t, i) => (
                <li key={i} className="py-3.5 border-b border-border last:border-b-0 text-[15px] text-muted-foreground flex gap-3 items-start">
                  <span className="flex-none w-1.5 h-1.5 rounded-full bg-destructive opacity-50 mt-2" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
