import AboutSection from "./components/about/page";
import ContactSection from "./components/contact/page";
import Footer from "./components/footer/page";
import HomeSection from "./components/home/page";
import MarqueeText from "./components/marqueeImages/page";
import Navbar from "./components/navbar/page";
import ProjectSection from "./components/project/page";

export default function Home() {
  return (
    <div className="m-0 box-border p-0">
      <div className="leading-relaxed bg-black">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <MarqueeText />
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}
