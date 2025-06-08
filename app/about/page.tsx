import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutThirdSection from '@/components/about/AboutThirdSection';
import WhatWeStandFor from '@/components/about/WhatWeStandForSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import BlogSection from '@/components/sections/BlogSection';
import FAQSection from '@/components/sections/FAQSection';

export default function AboutPage() {
  return (
    <main className="pt-18">
      <Navbar />

      <div className="flex flex-col space-y-12 overflow-hidden">
        {/* Hero Section */}
        <AboutHeroSection />

        {/* Our Values */}
        <WhatWeStandFor />

        {/* Additional Info */}
        <AboutThirdSection />

        {/* FAQs */}
        <FAQSection />

        {/* Blog Section */}
        <BlogSection />
      </div>

      <Footer />
    </main>
  );
}