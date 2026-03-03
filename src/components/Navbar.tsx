import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/92 backdrop-blur-xl border-b border-primary/5 px-4 py-2 flex items-center justify-between">
      <img src={logo} alt="רז אלקבץ - האקדמיה למסחר יומי" className="h-10 rounded" />
      <button className="gold-gradient-bg px-4 py-2 rounded-lg font-heading font-bold text-xs text-primary-foreground">
        להדרכה בחינם
      </button>
    </nav>
  );
};

export default Navbar;
