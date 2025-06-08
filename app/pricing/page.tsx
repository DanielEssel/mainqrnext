import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/PricingSection";
import Info3 from "@/components/pages/info3/page";
import FAQSection from "@/components/sections/FAQSection";
import PricingHeroSec from "@/components/PricingHeroSec";
import AddOnsSection from "@/components/AddOnsSection";

export default function PricingPage() {
  return (
    <div className="pt-16 md:pt-18 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeroSec />
        <PricingSection />
        <AddOnsSection />
        <FAQSection />
        <Info3 />
      </main>
      
      <Footer />
    </div>
  );
}