import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import VisualDivider from "@/components/VisualDivider";
import PositioningSection from "@/components/PositioningSection";
import AboutSection from "@/components/AboutSection";
import ForWhomSection from "@/components/ForWhomSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-overlay" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-glow-overlay" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <BenefitsSection />
          <VisualDivider />
          <PositioningSection />
          <AboutSection />
          <ForWhomSection />
          <ObjectionsSection />
          <FinalCTA />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
