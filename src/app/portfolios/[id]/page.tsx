import PortofolioDetailPage from "@/features/portofolio/PortofolioDetail";
import { projects } from "@/utils/projects";

interface PortfolioDetailProps {
  params: { id: string };
}

const Portfolio = ({ params }: PortfolioDetailProps) => {
  const project = projects.find(
    (item) => item.id.toString() === params.id
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return <PortofolioDetailPage project={project} />;
};

export default Portfolio;