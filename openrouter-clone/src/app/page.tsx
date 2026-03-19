import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModelsSection from "@/components/ModelsSection";
import FeaturesSection from "@/components/FeaturesSection";
import RankingsSection from "@/components/RankingsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="divider" />
        <ModelsSection />
        <div className="divider" />
        <FeaturesSection />
        <div className="divider" />
        <RankingsSection />
        <div className="divider" />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
