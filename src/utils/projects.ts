export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  details: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Company Profile Website",
    description:
      "A company profile website with optimized navigation and an integrated CMS for content management.",
    image: "/CompanyProfile.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Contentful",
      "Vercel",
      "Shadcn UI",
    ],
    liveUrl: "https://strategik.vercel.app/",
    githubUrl: "https://github.com/Syaiful313/Company-Profile",
    details: {
      situation:
        "The company needed a website to showcase their profile, services, and blog with easy content management.",
      task: "Build a responsive website with smooth navigation and CMS integration so content can be managed flexibly.",
      action:
        "Used Next.js and Tailwind CSS for the frontend, Contentful as the CMS, and optimized deployment on Vercel.",
      result:
        "Delivered the website and enabled the team to manage content easily, improving user engagement.",
    },
  },
  {
    id: 2,
    title: "CMS Blog with Contentful",
    description:
      "A CMS-based blog system that enables dynamic content management.",
    image: "/BlogCms.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "TypeScript",
      "Contentful",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    liveUrl: "https://blog-cms-muhammad-syaiful.vercel.app/",
    githubUrl: "https://github.com/Syaiful313/blog-cms",
    details: {
      situation:
        "A flexible blog system was needed to manage content without editing code.",
      task: "Build a blog platform integrated with Contentful so content can be managed dynamically.",
      action:
        "Used Next.js with TypeScript for the frontend, connected Contentful as the CMS, and optimized the UI with Tailwind CSS.",
      result:
        "Shipped a user-friendly interface that lets writers manage articles efficiently.",
    },
  },
  {
    id: 3,
    title: "Blog Platform with Supabase",
    description:
      "A simple blog platform with authentication, post CRUD, and user management.",
    image: "/bloghub.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "Shadcn UI",
    ],
    liveUrl: "https://blog-jcwd-0510-fe.vercel.app/",
    githubUrl: "#",
    details: {
      situation:
        "A blog platform was needed to write and manage articles with login and user management.",
      task: "Build a blog with authentication, database-backed content storage, and a modern responsive UI.",
      action:
        "Used Next.js with TypeScript for the frontend, Supabase (PostgreSQL) for the backend, and Prisma as the ORM.",
      result:
        "Delivered a full-featured blog that runs smoothly and makes it easy for users to write and manage content.",
    },
  },
  {
    id: 4,
    title: "Ticketing App with Transaction System",
    description:
      "A ticket booking app with dynamic transaction statuses, payments, and points usage.",
    image: "/WebTicket.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Shadcn UI",
    ],
    liveUrl: "https://starticket.vercel.app/",
    githubUrl: "#",
    details: {
      situation:
        "A ticket booking system was needed with automated transactions whose status changes based on payment and time.",
      task: "Build an app with ticket purchasing, payment validation, point refunds, and real-time status updates.",
      action:
        "Used Next.js for the frontend, Express.js for the backend, Prisma and PostgreSQL for data management, and Stripe for online payments.",
      result:
        "Built a reliable system that simplifies ticket purchases and ensures secure payment processing.",
    },
  },

  {
    id: 5,
    title: "HotCoffee Blog",
    description:
      "A minimalist, modern blog platform designed for coffee enthusiasts, offering engaging content and subscription features.",
    image: "/blogbackendless.png",
    category: "frontend",
    technologies: [
      "React",
      "Next.js",
      "Backendless",
      "Vercel",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    liveUrl: "https://hotcoffee-blog-backendless.vercel.app",
    githubUrl: "https://github.com/Syaiful313/blog-jcwd-0610",
    details: {
      situation:
        "Recognizing a lack of dedicated platforms for coffee enthusiasts to share and read engaging content, the goal was to create a modern blog focusing on coffee culture.",
      task: "Develop a user-friendly blog platform with features like content categorization, subscription options, and a clean design.",
      action:
        "Utilized React and Next.js for the frontend, integrated Backendless for backend services, and deployed on Vercel for seamless performance.",
      result:
        "Successfully launched the HotCoffee Blog, attracting a growing community of coffee lovers and receiving positive feedback for its design and functionality.",
    },
  },
  {
    id: 6,
    title: "Socio Space",
    description:
      "A company profile website for a co-working space, showcasing services, workspace options, and an integrated blog to drive community engagement.",
    image: "/companyprofilebackendless.png",
    category: "frontend",
    technologies: [
      "React",
      "Next.js",
      "Backendless",
      "Vercel",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    liveUrl: "https://socio-space.vercel.app",
    githubUrl: "https://github.com/Syaiful313/socio-space",
    details: {
      situation:
        "A co-working space needed an online presence to showcase their services and attract potential clients.",
      task: "Create a company profile website highlighting workspace options, services, team members, and a blog for community engagement.",
      action:
        "Developed the site using React and Next.js for a dynamic frontend, integrated Backendless for backend functionalities, and deployed on Vercel.",
      result:
        "The website effectively communicates the brand's offerings, leading to increased inquiries and bookings for the co-working space.",
    },
  },
];
