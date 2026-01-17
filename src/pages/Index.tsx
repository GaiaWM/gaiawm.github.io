import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";
import WhatIsSection from "@/components/WhatIsSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommercialSection from "@/components/CommercialSection";
import UseCasesSection from "@/components/UseCasesSection";
import VisionSection from "@/components/VisionSection";
import InvestorsSection from "@/components/InvestorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MarketSection />
        <WhatIsSection />
        <LiveDemoSection />
        <FeaturesSection />
        <CommercialSection />
        <UseCasesSection />
        <VisionSection />
        <InvestorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
