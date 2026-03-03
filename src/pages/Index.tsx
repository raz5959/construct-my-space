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
      <TickerBar />
      <HeroSection />
      <LeadForm />
      <VideoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
