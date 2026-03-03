import logo from "@/assets/logo-new.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/92 backdrop-blur-xl border-b border-primary/5 px-4 py-3 flex items-center justify-center">
      <img src={logo} alt="רז אלקבץ - האקדמיה למסחר יומי" className="h-20" style={{ mixBlendMode: 'lighten' }} />
    </nav>
  );
};

export default Navbar;
