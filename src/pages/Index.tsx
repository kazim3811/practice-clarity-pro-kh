import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import KeyFeatures from "@/components/KeyFeatures";
import TeamSection from "@/components/TeamSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainPoints />
      <KeyFeatures />
      <TeamSection />
      <CtaSection />
    </div>
  );
};

export default Index;
