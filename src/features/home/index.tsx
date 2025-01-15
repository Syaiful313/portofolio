import MarqueeText from "@/components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MarqueeText/>
      <AboutSection />
      <MarqueeText/>
      <ProjectSection />
      <MarqueeText/>
      <ContactSection />
    </>
  );
};

export default HomePage;
