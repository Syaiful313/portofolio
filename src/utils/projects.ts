export const projects = [
  {
    id: 1,
    title: "Company Profile Website",
    description:
      "Website company profile dengan navigasi yang optimal dan CMS terintegrasi untuk mengelola konten.",
    image: "/CompanyProfile.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Contentful",
      "Vercel",
      "Shadcn UI",
    ],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      situation:
        "Perusahaan membutuhkan website untuk menampilkan profil, layanan, dan blog mereka dengan pengelolaan konten yang mudah.",
      task: "Membuat website responsif dengan navigasi yang lancar serta integrasi dengan CMS agar konten bisa dikelola dengan fleksibel.",
      action:
        "Menggunakan Next.js dan Tailwind CSS untuk frontend, Contentful sebagai CMS, serta melakukan optimasi deployment di Vercel.",
      result:
        "Website berhasil dikembangkan dan mempermudah tim perusahaan dalam mengelola konten, meningkatkan keterlibatan pengguna.",
    },
  },
  {
    id: 2,
    title: "Blog CMS dengan Contentful",
    description:
      "Sistem blog berbasis CMS yang memungkinkan pengelolaan konten secara dinamis.",
    image: "/BlogCms.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "TypeScript",
      "Contentful",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      situation:
        "Diperlukan sistem blog yang fleksibel dengan kemampuan mengelola konten tanpa harus mengedit kode.",
      task: "Membangun platform blog yang terintegrasi dengan Contentful agar konten dapat dikelola secara dinamis.",
      action:
        "Menggunakan Next.js dengan TypeScript untuk frontend, menghubungkan Contentful sebagai CMS, serta mengoptimalkan tampilan dengan Tailwind CSS.",
      result:
        "Platform berhasil dikembangkan dengan antarmuka yang mudah digunakan, memungkinkan penulis untuk mengelola artikel secara efisien.",
    },
  },
  {
    id: 3,
    title: "Blog Platform dengan Supabase",
    description:
      "Platform blog sederhana dengan fitur autentikasi, CRUD post, dan manajemen pengguna.",
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
    liveUrl: "#",
    githubUrl: "#",
    details: {
      situation:
        "Membutuhkan platform blog untuk menulis dan mengelola artikel dengan fitur login dan manajemen pengguna.",
      task: "Membangun blog dengan sistem autentikasi, penyimpanan konten di database, dan tampilan yang modern serta responsif.",
      action:
        "Menggunakan Next.js dengan TypeScript untuk frontend, Supabase sebagai backend dengan PostgreSQL, serta Prisma untuk ORM.",
      result:
        "Blog berhasil dibuat dengan fitur lengkap dan berjalan lancar, mempermudah pengguna dalam menulis dan mengelola konten.",
    },
  },
  {
    id: 4,
    title: "Tiket App dengan Sistem Transaksi",
    description:
      "Aplikasi pemesanan tiket dengan status transaksi dinamis, sistem pembayaran, dan penggunaan poin.",
    image: "/WebTicket.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Socket.io",
      "Shadcn UI",
    ],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      situation:
        "Dibutuhkan sistem pemesanan tiket yang memiliki transaksi otomatis dengan status yang dapat berubah berdasarkan pembayaran dan waktu.",
      task: "Membangun aplikasi dengan fitur pembelian tiket, validasi pembayaran, pengembalian poin, serta update status real-time.",
      action:
        "Menggunakan Next.js untuk frontend, Express.js untuk backend, Prisma dan PostgreSQL untuk manajemen data, serta Stripe untuk pembayaran online.",
      result:
        "Sistem berhasil dikembangkan dengan fitur yang berfungsi optimal, memudahkan pengguna dalam membeli tiket dan memastikan pembayaran berjalan aman.",
    },
  },

  {
    id: 5,
    title: "HotCoffee Blog",
    description:
      "A minimalist and modern blog platform designed for coffee enthusiasts, offering engaging content and a subscription feature.",
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
    githubUrl: "https://github.com/yourusername/hotcoffee-blog",
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
      "A company profile website for a co-working space, showcasing services, workspace options, and an integrated blog for community engagement.",
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
    githubUrl: "https://github.com/yourusername/socio-space",
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
