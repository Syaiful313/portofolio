import { FaExclamationCircle, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Sistem Manajemen Toko",
      problem: "Toko kecil kesulitan mengelola inventaris dan pencatatan transaksi secara efisien.",
      solution: "Membangun sistem manajemen berbasis web untuk otomatisasi pencatatan stok dan transaksi.",
      outcome: "Mengurangi waktu pengelolaan stok hingga 30% dan meningkatkan akurasi pencatatan transaksi.",
      image: "/assets/management-system.png",
    },
    {
      title: "Platform Pembelajaran Online",
      problem: "Sekolah memerlukan platform yang memungkinkan pembelajaran jarak jauh dengan akses mudah.",
      solution: "Mengembangkan platform berbasis web yang intuitif untuk guru dan siswa, termasuk fitur kelas virtual dan penyimpanan materi.",
      outcome: "Digunakan oleh lebih dari 500 siswa dengan feedback positif terkait kemudahan penggunaan.",
      image: "/assets/online-learning-platform.png",
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen py-36 bg-black">
      <h2 className="text-center text-5xl font-serif mb-12 text-[#d9c5a7]">Project Case Studies</h2>
      <div className="mx-auto grid w-full max-w-none gap-10 px-8 py-14 sm:grid-cols-2 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 group"
          >
            {/* Gambar dengan overlay */}
            <Image
              src=""
              alt={study.title}
              width={500}
              height={250}
              className="h-[250px] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            <div className="relative p-6 bg-[#1c1c1c] h-full text-[#d9c5a7]">
              <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
              <div className="flex items-start space-x-3 mb-3">
                <FaExclamationCircle className="text-red-500 text-xl" />
                <p>
                  <strong>Problem:</strong> {study.problem}
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-3">
                <FaLightbulb className="text-yellow-500 text-xl" />
                <p>
                  <strong>Solution:</strong> {study.solution}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <p>
                  <strong>Outcome:</strong> {study.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection;

