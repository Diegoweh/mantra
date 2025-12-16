import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import ScrollIndicator from "@/components/UI/ScrollIndicator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollIndicator />
      <AboutPreview />
      <ServicesPreview />
    </>
  );
}
