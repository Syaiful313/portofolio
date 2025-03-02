import MarqueeText from "@/components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ExperienceSection from "./components/ExperienceSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialsSection />
      <MarqueeText />
      <ContactSection />
    </>
  );
};

export default HomePage;
