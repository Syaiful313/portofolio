import PortofolioDetailPage from "@/features/portofolio/PortofolioDetail";
import { projects } from "@/utils/projects";

interface PortfolioDetailProps {
  params: Promise<{ id: string }>;
}

const Portfolio = async ({ params }: PortfolioDetailProps) => {
  const { id } = await params;

  const project = projects.find((item) => item.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <PortofolioDetailPage project={project} />;
};

export default Portfolio;
