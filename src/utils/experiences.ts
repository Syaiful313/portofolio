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
      "Designed and built a web-based procurement application with request submission, approvals, and item status tracking.",
      "Used Next.js, TypeScript, and Tailwind CSS on the frontend, and Express.js, Prisma, and PostgreSQL on the backend.",
      "Implemented JWT authentication and role-based access control for admins, managers, and users.",
      "Built a dashboard with request status summaries, form validation, and real-time status notifications.",
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
      "Developed an internal attendance and education platform for PAC LDII Traji (Pimpinan Anak Cabang Lembaga Dakwah Islam Indonesia).",
      "Built an attendance system with automatic recaps in the admin dashboard.",
      "Designed class, materials, and student attendance management using Prisma ORM and PostgreSQL with complex relations.",
      "Implemented JWT authentication and a role system (admin, instructor, student), plus API integration for weekly attendance reports.",
      "Prepared integration for a companion mobile app using Flutter to support access for field users.",
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
    period: "Sep 2025 – Present",
    description: [
      "Assisted in developing Scuto Indonesia's internal systems across both frontend and backend.",
      "Handled API and database integration, debugging, and development documentation.",
      "Collaborated with the team on building applications using Next.js and Node.js.",
      "Used Git for version control and development workflows.",
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
