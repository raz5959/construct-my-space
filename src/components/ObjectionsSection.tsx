import { useState } from "react";
import { SectionHeader } from "./ProblemSection";

const items = [
  {
    n: "01",
    q: "\"אין לי מספיק ניסיון\"",
    a: <>הקורס לא מניח אפס ידע, אבל גם לא מבזבז זמן על "מה זה אופציה". אם אתה מבין את היסודות וכבר ביצעת עסקאות — אתה במקום הנכון. <strong className="text-foreground">חוסר ניסיון אמיתי הוא חוסר תהליך, לא חוסר שעות מסך.</strong></>,
  },
  {
    n: "02",
    q: "\"כבר ניסיתי המון שיטות\"",
    a: <>זו בדיוק הבעיה. הקורס לא נותן לך שיטה שביעית — הוא נותן לך מסגרת לבחור, להעריך, ולהיצמד. <strong className="text-foreground">הבעיה לא הייתה בשיטות. הבעיה הייתה שאין מבנה שמחזיק אותן.</strong></>,
  },
  {
    n: "03",
    q: "\"אין לי הרבה זמן\"",
    a: <>היחידות קצרות וצפופות. אפשר לעבור 1–2 ביום. <strong className="text-foreground">וזה גם רעיון מרכזי בקורס: סוחר מקצועי לא מבזבז זמן — הוא מתעל אותו.</strong></>,
  },
  {
    n: "04",
    q: "\"אני מפחד שזה עוד קורס שיווקי\"",
    a: <>בצדק. השוק מלא בזה. הקורס הזה לא מבטיח רווח, לא מציג סקרינשוטים, ולא מכוון אותך לקנות עוד משהו בסוף. אם זה שיווק — זה שיווק של חשיבה. <strong className="text-foreground">תקרא, תשפוט, תחליט.</strong></>,
  },
  {
    n: "05",
    q: "\"אני לא יודע אם זה מתאים לסגנון שלי\"",
    a: <>הקורס יעזור לך לענות על השאלה הזו בעצמך. הוא לא מתמקד באינסטרומנט אחד — הוא מתמקד בתהליך שעובד על כל אינסטרומנט: אופציות, חוזים, מניות, פורקס. <strong className="text-foreground">סגנון זה תכונה. תהליך זה כלי.</strong></>,
  },
];

const ObjectionsSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <SectionHeader
          num="§ 06 · התנגדויות"
          title={<>מה שעוצר אותך — <em className="not-italic accent-text">זה הקורס.</em></>}
          sub="חמש תהיות שחוזרות אצל כל סוחר. תקרא בכנות. תחליט."
        />

        <div className="grid gap-2">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.n}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-line-2 transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-6 md:px-7 flex justify-between items-center gap-6 text-right"
                >
                  <div className="flex gap-4 md:gap-[18px] items-center">
                    <span className="font-mono text-[11px] text-muted tracking-[0.18em] flex-shrink-0">{it.n}</span>
                    <span className="text-[17px] font-semibold">{it.q}</span>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-full border border-line-2 grid place-items-center text-[18px] font-light flex-shrink-0 transition-all ${
                      isOpen ? "bg-primary text-primary-foreground border-primary rotate-45" : "text-muted-foreground"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 md:px-7 pb-7 text-[15px] text-muted-foreground leading-[1.8] max-w-[780px]">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
