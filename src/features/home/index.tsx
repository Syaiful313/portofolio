import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortofolioSection";
import TestimonialsSection from "./components/TestimonialsSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
