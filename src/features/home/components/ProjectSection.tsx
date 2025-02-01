import {
  FaExclamationCircle,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  const caseStudies = [
    {
      title: "Blog App",
      image: "/assets/bloghub.png",
      link: "https://blog-jcwd-0510-fe.vercel.app/",
    },
    {
      title: "Web Ticket",
      image: "/assets/WebTicket.png",
      link: "https://starticket.vercel.app/",
    },
    {
      title: "Company Profile",
      image: "/assets/CompanyProfile.png",
      link: "https://strategik.vercel.app/",
    },
    {
      title: "Blog with cms",
      image: "/assets/BlogCms.png",
      link: "https://blog-cms-muhammad-syaiful.vercel.app/",
    },
    
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black to-[#111111] px-8 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
        >
          <defs>
            <pattern
              id="geometric-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="3" fill="#ffffff" />
              <path
                d="M0 0 L100 100 M100 0 L0 100"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
      </div>

      <h2 className="relative z-10 mb-12 text-center font-serif text-4xl text-[#d9c5a7]">
        Project Case Studies
      </h2>
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Card
            key={index}
            className="mx-auto flex w-full max-w-sm transform flex-col rounded-3xl bg-[#1c1c1c] text-[#d9c5a7] shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <CardHeader className="relative h-48 flex-shrink-0 overflow-hidden rounded-t-3xl">
              <Image
                src={study.image}
                alt={`${study.title} Screenshot`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl object-cover brightness-90 transition-all duration-300 ease-out hover:brightness-100"
              />
              <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </CardHeader>

            <CardContent className="flex-grow space-y-4 p-4">
              <CardTitle className="text-xl font-semibold">
                {study.title}
              </CardTitle>
            </CardContent>

            <CardFooter className="p-4">
              <Link
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-[#d9c5a7] px-4 py-1 text-sm font-semibold text-[#d9c5a7] transition-colors duration-300 hover:bg-[#d9c5a7] hover:text-gray-900"
              >
                View Project Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
