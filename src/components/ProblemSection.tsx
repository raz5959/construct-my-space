const problems = [
  { n: "01", title: "אין תוכנית מסחר", desc: "נכנסים לעסקה כי \"זה נראה טוב\". יוצאים כי הלב פועם. אין כללים. אין סקריפט." },
  { n: "02", title: "כניסות רגשיות", desc: "FOMO על נר ירוק. פחד אחרי שני הפסדים. החלטות בזמן אמת לפי דופק, לא לפי data." },
  { n: "03", title: "Revenge trading", desc: "הפסדת — ועכשיו אתה \"חייב להחזיר\". החשבון מתאדה בשעה." },
  { n: "04", title: "קפיצה בין שיטות", desc: "שבוע ICT. שבוע Wyckoff. שבוע VWAP. אין עקביות. אין סטטיסטיקה. אין מסקנות." },
  { n: "05", title: "חוסר חשיבה סטטיסטית", desc: "סוחרים לפי \"תחושה\", בלי edge מתמטי. בלי הסתברויות. בלי expectancy." },
  { n: "06", title: "מבלבלים פרייס אקשן עם ניחוש", desc: "קוראים את הגרף — אבל בלי תהליך. כל סטאפ נראה כמו עסקה. כך נראה ניחוש מוסווה." },
];

const SectionHeader = ({ num, title, sub, children }: { num: string; title?: React.ReactNode; sub?: string; children?: React.ReactNode }) => (
  <>
    <div className="font-mono text-[11px] text-muted tracking-[0.22em] uppercase flex items-center gap-3.5 mb-5">
      <span className="w-7 h-px bg-primary" />
      {num}
    </div>
    {title && <h2 className="text-[30px] md:text-[44px] font-extrabold leading-[1.05] tracking-tight mb-5 text-balance max-w-[900px]">{title}</h2>}
    {sub && <p className="text-[17px] text-muted-foreground max-w-[680px] leading-[1.7] mb-12">{sub}</p>}
    {children}
  </>
);

export { SectionHeader };

const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <SectionHeader
          num="§ 01 · הבעיה"
          title={<>לא חסרה לך עוד <em className="not-italic accent-text">אסטרטגיה.</em><br />חסר לך תהליך.</>}
          sub="רוב הסוחרים לא מפסידים בגלל השוק. הם מפסידים בגלל חוסר מבנה, חוסר משמעת, וחוסר חשיבה סטטיסטית."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {problems.map((p, i) => (
            <div
              key={p.n}
              className={`relative p-7 md:p-8 bg-card hover:bg-card-2 transition-colors ${
                i % 3 !== 0 ? "md:border-r md:border-border" : ""
              } ${i < 3 ? "md:border-b md:border-border" : ""} border-b border-border last:border-b-0 md:last:border-b`}
              style={{ background: "hsl(var(--card))" }}
            >
              <div className="absolute left-6 top-6 w-[22px] h-[22px] border border-line-2 rounded-full grid place-items-center text-destructive text-[11px]">
                ×
              </div>
              <div className="font-mono text-[11px] text-primary tracking-[0.18em]">{p.n}</div>
              <h4 className="text-lg font-bold mt-3.5 mb-2.5 leading-tight">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
