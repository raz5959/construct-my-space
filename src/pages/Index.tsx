import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TruthSection from "@/components/TruthSection";
import ForWhomSection from "@/components/ForWhomSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TruthSection />
      <ForWhomSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
