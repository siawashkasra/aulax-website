import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import VisionSection from "./components/sections/VisionSection";
import WhyAulaxSection from "./components/sections/WhyAulaxSection";
import NominateSection from "./components/sections/NominateSection";
import NominateFormSection from "./components/sections/NominateFormSection";
import VideoShowcaseSection from "./components/sections/VideoShowcaseSection";
import PartnershipSection from "./components/sections/PartnershipSection";
import ForBusinessSection from "./components/sections/ForBusinessSection";
import ConvenientShoppingSection from "./components/sections/ConvenientShoppingSection";
import AppShowcaseSection from "./components/sections/AppShowcaseSection";
import TrustSection from "./components/sections/TrustSection";
import BusinessReadySection from "./components/sections/BusinessReadySection";
import CTASection from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <HeroSection />
        <VisionSection />
        <WhyAulaxSection />
        <VideoShowcaseSection />
        <NominateSection />
        <NominateFormSection />
        <ForBusinessSection />
        <PartnershipSection />
        <ConvenientShoppingSection />
        <AppShowcaseSection />
        <TrustSection />
        <BusinessReadySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
