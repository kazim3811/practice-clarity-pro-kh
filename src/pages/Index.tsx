import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import KeyFeatures from "@/components/KeyFeatures";
import TeamSection from "@/components/TeamSection";
import BenefitsSection from "@/components/BenefitsSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainPoints />
      <KeyFeatures />
      <TeamSection />
      <BenefitsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
