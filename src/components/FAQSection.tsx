import { useState } from "react";

const faqs = [
  { q: "האם הקורס מתאים למתחילים?", a: "חלקית. הקורס לא מסביר מאפס מה זו אופציה, אבל אם אתה בתחילת הדרך עם רקע בסיסי — תקבל מסגרת חשיבה שתחסוך לך שנים של ניסוי וטעייה." },
  { q: "האם יש הבטחה לרווח?", a: "לא. אף אחד לא יכול להבטיח רווח בשוק ההון, וכל מי שמבטיח — משקר. הקורס לימודי בלבד." },
  { q: "למי הקורס מתאים? מסחר באיזה אינסטרומנט?", a: "לכל סוחר שרוצה לעבוד מסודר — אופציות, חוזים, מניות, פורקס, קריפטו. הרעיונות (תהליך, משמעת, expectancy, ניהול סיכון) תקפים בכל אינסטרומנט ובכל שוק." },
  { q: "האם זה מתאים למי שסוחר חוזים?", a: "כן. הרעיונות — תהליך, משמעת, expectancy, ניהול סיכון — תקפים בכל אינסטרומנט. גם בחוזים, גם בפרייס אקשן." },
  { q: "מה קורה אחרי שאני משאיר פרטים?", a: "תקבל אימייל עם גישה לקורס. בלי שיחת מכירה אגרסיבית, בלי לחץ. אתה תחליט אם זה בשבילך אחרי שתעבור עליו." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-[880px] mx-auto px-5 md:px-7">
        <div className="font-mono text-[11px] text-muted tracking-[0.22em] uppercase flex items-center gap-3.5 mb-5">
          <span className="w-7 h-px bg-primary" />
          § 07 · שאלות נפוצות
        </div>
        <h2 className="text-[30px] md:text-[44px] font-extrabold leading-[1.05] tracking-tight mb-12">FAQ.</h2>

        <div className="grid">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full py-6 px-2 flex justify-between items-center gap-6 text-right">
                  <span className="text-lg font-semibold">{f.q}</span>
                  <span className={`w-7 h-7 font-mono text-[18px] grid place-items-center transition-all flex-shrink-0 ${isOpen ? "accent-text rotate-45" : "text-muted-foreground"}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-2 pb-6 text-[15px] text-muted-foreground leading-[1.8] max-w-[780px]">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
