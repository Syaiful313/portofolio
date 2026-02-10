import { projects } from "@/utils/projects";

const BASE_URL = "https://muhammad-syaiful.site";

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Syaiful Mu'min",
    url: BASE_URL,
    image: `${BASE_URL}/og/og-cover.png`,
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer yang membangun aplikasi web modern dengan Next.js, React, dan TypeScript.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Temanggung",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    email: "mailto:mthitz313@gmail.com",
    sameAs: [
      "https://github.com/Syaiful313",
      "https://www.linkedin.com/in/muhammad-syaiful-mu-min-599a27283/",
      "https://x.com/fulful_tmg",
      "https://www.instagram.com/fulful.tmg/",
    ],
    knowsAbout: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Golang",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Syaiful Mu'min - Portofolio",
    url: BASE_URL,
    description:
      "Portofolio Muhammad Syaiful Mu'min, Full-Stack Web Developer yang membangun aplikasi web modern.",
    author: {
      "@type": "Person",
      name: "Muhammad Syaiful Mu'min",
    },
    inLanguage: "id",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ProjectSchema({ projectId }: { projectId: number }) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/portfolios/${project.id}`,
    image: project.image ? `${BASE_URL}${project.image}` : undefined,
    author: {
      "@type": "Person",
      name: "Muhammad Syaiful Mu'min",
    },
    keywords: project.technologies.join(", "),
    genre: project.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function CollectionPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portofolio Muhammad Syaiful Mu'min",
    description:
      "Kumpulan proyek web yang dibangun oleh Muhammad Syaiful Mu'min menggunakan teknologi modern.",
    url: BASE_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/portfolios/${project.id}`,
        name: project.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export {
  BreadcrumbSchema,
  CollectionPageSchema,
  PersonSchema,
  ProjectSchema,
  WebSiteSchema,
};
