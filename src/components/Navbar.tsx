const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-site mx-auto flex items-center justify-between gap-6 px-5 md:px-7 py-3.5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] grid place-items-center border border-primary rounded-md text-primary font-mono text-[11px] font-bold shadow-[0_0_24px_rgba(61,240,168,0.18)_inset]">
            0
          </div>
          <div>
            <div className="text-sm font-bold tracking-wider leading-none">0DTE LAB</div>
            <div className="text-[11px] text-muted mt-0.5 tracking-[0.18em] uppercase">Raz Elkabets</div>
          </div>
        </a>

        {/* Ticker pills */}
        <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 px-2.5 py-1.5 border border-border rounded-full bg-card">
            <span className="w-1.5 h-1.5 rounded-full bg-primary glow-primary pulse-dot" />
            <span className="font-mono">TRADING LAB</span>
          </div>
          <div className="px-2.5 py-1.5 border border-border rounded-full bg-card font-mono">
            EDGE · TIMING · DISCIPLINE
          </div>
        </div>

        <a
          href="#cta"
          className="px-4 py-2.5 border border-primary text-primary text-[13px] font-semibold rounded-md transition-all hover:bg-primary hover:text-primary-foreground"
        >
          קבלו את הקורס
        </a>
      </div>
    </header>
  );
};

export default Navbar;
