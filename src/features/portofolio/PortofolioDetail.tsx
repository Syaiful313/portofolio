import type { Project } from "@/utils/projects";
import ContentSection from "./components/ContentSection";
import HeroSection from "./components/HeroSection";

const PortofolioDetailPage = ({ project }: { project: Project }) => {
  if (!project) return <div>Project not found</div>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 text-[#d9c5a7]">
      <HeroSection project={project} />
      <ContentSection project={project} />
    </main>
  );
};

export default PortofolioDetailPage;
