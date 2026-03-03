import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import LeadForm from "@/components/LeadForm";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <Navbar />
      <div className="text-center py-2 gold-gradient-bg">
        <p className="text-[11px] font-bold text-primary-foreground tracking-wide">
          🔥 מוגבל ל-200 הנרשמים הראשונים
        </p>
      </div>
      <HeroSection />
      <LeadForm />
      <VideoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
