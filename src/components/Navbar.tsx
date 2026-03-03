import logo from "@/assets/logo-black.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-primary/5 flex items-center justify-center">
      <img src={logo} alt="רז אלקבץ - האקדמיה למסחר יומי" className="h-20 md:h-28" style={{ mixBlendMode: 'lighten' }} />
    </nav>
  );
};

export default Navbar;
