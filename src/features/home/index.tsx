import MarqueeText from "@/components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Experience from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/PortofolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import MarqueeLogos from "@/components/MarqueeLogos";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MarqueeLogos/>
      <AboutSection />
      <Portfolio/>
      <Experience />
      <TestimonialsSection />
      <MarqueeText />
      <ContactSection />
    </>
  );
};

export default HomePage;
