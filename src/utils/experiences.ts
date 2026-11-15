export type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Fullstack Web Developer",
    company: "Freelance Project - Procurement Web App",
    period: "Feb 2025 – Apr 2025",
    description: [
      "Merancang dan membangun aplikasi pengadaan berbasis web dengan fitur pengajuan, persetujuan, dan pelacakan status barang.",
      "Menggunakan Next.js, TypeScript, dan Tailwind CSS untuk frontend, serta Express.js, Prisma, dan PostgreSQL untuk backend.",
      "Menerapkan autentikasi JWT dan pembatasan akses berbasis peran untuk admin, manajer, dan pengguna.",
      "Membangun dashboard ringkasan status pengajuan, validasi formulir, dan notifikasi perubahan status.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Fullstack Web Developer",
    company:
      "Volunteer Project - PAC LDII Traji Attendance & Education Platform",
    period: "Aug 2025 – Sep 2025",
    description: [
      "Mengembangkan platform internal untuk absensi dan pendidikan PAC LDII Traji (Pimpinan Anak Cabang Lembaga Dakwah Islam Indonesia).",
      "Membangun sistem absensi dengan rekap otomatis di dashboard admin.",
      "Merancang pengelolaan kelas, materi, dan absensi siswa menggunakan Prisma ORM dan PostgreSQL dengan relasi yang kompleks.",
      "Menerapkan autentikasi JWT dan sistem peran admin, pengajar, serta siswa, sekaligus mengintegrasikan API untuk laporan absensi mingguan.",
      "Menyiapkan integrasi dengan aplikasi pendamping berbasis Flutter untuk mendukung akses pengguna lapangan.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Flutter",
    ],
  },
  {
    id: 3,
    title: "Systems Development Intern",
    company: "Scuto Indonesia",
    period: "Sep 2025 – Maret 2026",
    description: [
      "Membantu mengembangkan sistem internal Scuto Indonesia pada sisi frontend dan backend.",
      "Menangani integrasi API dan database, debugging, serta dokumentasi pengembangan.",
      "Berkolaborasi dengan tim dalam membangun aplikasi menggunakan Next.js dan Node.js.",
      "Menggunakan Git untuk pengelolaan versi dan alur kerja pengembangan.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    id: 4,
    title: "Systems Development",
    company: "Scuto Indonesia",
    period: "Maret 2026 – Present",
    description: [
      "Membantu mengembangkan sistem internal Scuto Indonesia pada sisi frontend dan backend.",
      "Menangani integrasi API dan database, debugging, serta dokumentasi pengembangan.",
      "Berkolaborasi dengan tim dalam membangun aplikasi menggunakan Next.js dan Node.js.",
      "Menggunakan Git untuk pengelolaan versi dan alur kerja pengembangan.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "Git",
    ],
  },
];
