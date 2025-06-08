// This is a server component

import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import Info2 from "@/components/pages/info2/page";
import Navbar from "@/components/layout/Navbar";
import Info3 from "@/components/pages/info3/page";
import FAQSection from "@/components/sections/FAQSection";
import { QRGeneratorSection } from "@/components/pages/qrgenerationsection/page";
import BlogSection from "@/components/sections/BlogSection";
import TutorialSection1 from "@/components/pages/tutorialsec1/page";
import TutorialSection2 from "@/components/pages/tutorialsec2/page";
import TutorialSection3 from "@/components/pages/tutorialsec3/page";
import ExperienceSection from "@/components/ExperienceSection";
import QRInterface from "@/components/qr/QRInterface";


export default function Home() {
  return (
    <div className="pt-18 w-full" >
      <Navbar />
      <HeroSection />
      <QRInterface />
      <InfoSection />
      <Info2 />
      <TutorialSection1 />
      <TutorialSection2 />
      <TutorialSection3 />
      <QRGeneratorSection />
      <FAQSection/>
      <BlogSection />
      <ExperienceSection />
      <Info3/>
      <Footer />
    </div>
  );
}