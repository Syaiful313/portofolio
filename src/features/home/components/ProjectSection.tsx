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
} from "@/components/ui/card"; // Komponen dari ShadCN UI
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  const caseStudies = [
    {
      title: "Blog App",
      problem: "Kesulitan mengelola dan menerbitkan artikel blog.",
      solution: "Aplikasi web untuk membuat dan mengelola konten blog secara mudah.",
      outcome: "Meningkatkan efisiensi penulisan dan pengelolaan blog.",
      image: "/assets/blog-app-screenshot.png", // Pastikan gambar ini ada di public/assets/
      link: "https://blog-app.example.com", // Ganti dengan URL proyek Anda
    },
    {
      title: "Web Ticket",
      problem: "Proses pemesanan tiket acara yang rumit.",
      solution: "Website sederhana untuk memesan tiket acara dengan sistem pembayaran mudah.",
      outcome: "Mempermudah pengguna dalam memesan tiket dan meningkatkan transaksi.",
      image: "/assets/web-ticket-mockup.jpg", // Pastikan gambar ini ada di public/assets/
      link: "https://web-ticket.example.com", // Ganti dengan URL proyek Anda
    },
    {
      title: "Company Profile",
      problem: "Perusahaan membutuhkan website untuk memperkenalkan layanan mereka.",
      solution: "Website sederhana untuk menampilkan profil perusahaan dan layanan.",
      outcome: "Meningkatkan visibilitas perusahaan dengan desain yang jelas dan profesional.",
      image: "/assets/company-profile-screenshot.png", // Pastikan gambar ini ada di public/assets/
      link: "https://company-profile.example.com", // Ganti dengan URL proyek Anda
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-b from-black to-[#111111] py-24 px-8 overflow-hidden"
    >
      {/* Overlay Pola Geometris */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-10"
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

      <h2 className="mb-12 text-center font-serif text-4xl text-[#d9c5a7] relative z-10">
        Project Case Studies
      </h2>
      <div className="mx-auto grid max-w-6xl gap-6 grid-cols-1 md:grid-cols-3 relative z-10">
        {caseStudies.map((study, index) => (
          <Card
            key={index}
            className="mx-auto w-full max-w-sm transform rounded-3xl bg-[#1c1c1c] text-[#d9c5a7] shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col"
          >
            <CardHeader className="relative overflow-hidden rounded-t-3xl h-48 flex-shrink-0">
              <Image
                src={study.image}
                alt={`${study.title} Screenshot`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl object-cover brightness-90 hover:brightness-100 transition-all duration-300 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-t-3xl"></div>
            </CardHeader>

            <CardContent className="p-4 space-y-4 flex-grow">
              <CardTitle className="text-xl font-semibold">
                {study.title}
              </CardTitle>
              <CardDescription className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaExclamationCircle className="text-2xl text-red-500 mt-1" />
                  <p className="text-sm">
                    <strong className="text-white">Problem:</strong> {study.problem}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaLightbulb className="text-2xl text-yellow-400 mt-1" />
                  <p className="text-sm">
                    <strong className="text-white">Solution:</strong> {study.solution}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-2xl text-green-500 mt-1" />
                  <p className="text-sm">
                    <strong className="text-white">Outcome:</strong> {study.outcome}
                  </p>
                </div>
              </CardDescription>
            </CardContent>

            <CardFooter className="p-4">
              <Link
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-[#d9c5a7] border border-[#d9c5a7] rounded-full px-4 py-1 hover:bg-[#d9c5a7] hover:text-gray-900 transition-colors duration-300"
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
