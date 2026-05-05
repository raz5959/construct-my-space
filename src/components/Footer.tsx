const Footer = () => {
  return (
    <footer className="border-t border-border py-14 bg-bg-2">
      <div className="max-w-site mx-auto px-5 md:px-7">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-[30px] h-[30px] grid place-items-center border border-primary rounded-md text-primary font-mono text-[11px] font-bold">
                0
              </div>
              <div>
                <div className="text-sm font-bold tracking-wider leading-none">0DTE LAB</div>
                <div className="text-[11px] text-muted mt-0.5 tracking-[0.18em] uppercase">Raz Elkabets</div>
              </div>
            </div>
            <p className="text-[13px] text-muted max-w-[480px] leading-[1.7]">
              מעבדה לסוחרים. מסגרת חשיבה לכל סוחר רציני — מבוססת תהליך, סטטיסטיקה ומשמעת ביצוע.
            </p>
          </div>
          <div className="text-xs text-muted leading-[1.8] p-5 border border-dashed border-line-2 rounded-lg bg-white/[0.01]">
            <strong className="block mb-1.5 text-muted-foreground font-mono text-[11px] tracking-[0.18em] uppercase">
              // DISCLAIMER
            </strong>
            התוכן באתר ובקורס הוא לימודי בלבד ואינו מהווה ייעוץ השקעות, המלצה לפעולה או הבטחה לתוצאות. מסחר בשוק ההון כרוך בסיכון, לרבות אובדן מלא של הקרן. כל פעולה היא באחריות הסוחר בלבד.
          </div>
        </div>
        <div className="flex justify-between items-center pt-7 border-t border-border font-mono text-[11px] text-muted tracking-wide">
          <span>© 2026 · 0DTE LAB</span>
          <span className="hidden md:block">EDGE · TIMING · DISCIPLINE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
