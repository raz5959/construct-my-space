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
