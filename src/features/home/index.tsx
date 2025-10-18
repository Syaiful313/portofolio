import MarqueeLogos from "@/components/MarqueeLogos";
import MarqueeText from "@/components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortofolioSection";
import TestimonialsSection from "./components/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MarqueeLogos />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <MarqueeText />
      <ContactSection />
    </>
  );
};

export default HomePage;
