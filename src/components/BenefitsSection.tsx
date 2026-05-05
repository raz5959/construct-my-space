import { SectionHeader } from "./ProblemSection";

const units = [
  { n: "UNIT 01", title: "מסחר כתהליך — לא כהימור", desc: "איך לבנות מסגרת החלטה חוזרת ומדידה. למה process > outcome.", glyph: "⌬" },
  { n: "UNIT 02", title: "משמעת סביב כניסה ויציאה", desc: "הגדרת trigger, invalidation, ו-exit logic מראש. בלי \"אני אחליט בזמן אמת\".", glyph: "∎" },
  { n: "UNIT 03", title: "סטטיסטיקה כמסנן רעש", desc: "למה expectancy, win-rate ו-R-multiple חשובים יותר מ\"איך אתה מרגיש לגבי השוק\".", glyph: "σ" },
  { n: "UNIT 04", title: "להפסיק לרדוף תנועה", desc: "איך לבחור setup אחד טוב מתוך עשרים בינוניים. למה patience היא edge.", glyph: "⟶" },
  { n: "UNIT 05", title: "\"אין עסקה\" — זו עסקה", desc: "מקצועיות זה לדעת מתי לא לסחור. ואיך לבנות את היכולת הזו במשמעת.", glyph: "∅" },
  { n: "UNIT 06", title: "שגרת סוחר יומית", desc: "Pre-market, בזמן אמת, post-trade review. השגרה שמייצרת עקביות לאורך זמן.", glyph: "↻" },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <SectionHeader
          num="§ 02 · מה תקבלו בקורס"
          title={<>תוכן מובנה. <em className="not-italic accent-text">אפס סיסמאות.</em></>}
          sub={`הקורס לא מלמד "איפה לקנות". הוא מלמד איך לחשוב, איך לסנן, ואיך להחליט — לפני שהגרף בכלל זז.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {units.map((u) => (
            <div
              key={u.n}
              className="relative bg-card border border-border rounded-2xl p-7 overflow-hidden transition-all hover:-translate-y-0.5 hover:border-line-2"
            >
              <span className="font-mono text-xs text-primary tracking-[0.18em] mb-4 block">{u.n}</span>
              <h4 className="text-xl font-bold leading-tight mb-2.5">{u.title}</h4>
              <p className="text-sm text-muted-foreground leading-[1.7]">{u.desc}</p>
              <div className="absolute left-4 bottom-3 font-mono text-[38px] text-line-2 font-light">{u.glyph}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
