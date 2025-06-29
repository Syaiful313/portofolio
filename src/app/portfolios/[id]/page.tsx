import PortofolioDetailPage from "@/features/portofolio/PortofolioDetail";
import { projects } from "@/utils/projects";

interface PortfolioDetailProps {
  params: Promise<{ id: string }>; // Changed to Promise
}

const Portfolio = async ({ params }: PortfolioDetailProps) => { // Added async
  const { id } = await params; // Added await
  
  const project = projects.find(
    (item) => item.id.toString() === id // Use destructured id
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return <PortofolioDetailPage project={project} />;
};

export default Portfolio;