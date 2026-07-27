export const portfolioData = {
  hero: {
    title: "Hi, I'm Hoang Hai.",
    subtitle: "Java Backend Engineer & Full-stack Developer",
    description: "I specialize in architecting scalable, enterprise-grade backend systems using Spring Boot and Microservices, perfectly integrated with high-performance Next.js web interfaces."
  },
  about: {
    description: "I am a Software Engineering student at FPT University, deeply passionate about architecting scalable systems and building real-time applications. My expertise spans across modern backend frameworks, database design, and cloud deployments.",
    skills: [
      { name: "Java", icon: "Coffee" },
      { name: "Spring Boot", icon: "Leaf" },
      { name: "Next.js", icon: "Zap" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "Docker", icon: "Box" },
      { name: "WebRTC", icon: "Radio" },
    ]
  },
  projects: [
    {
      id: "thriftly",
      title: "Thriftly",
      description: "A real-time auction e-commerce platform allowing users to bid on secondhand items with live updates.",
      tags: ["Spring Boot", "Next.js", "WebSockets", "PostgreSQL", "Escrow"],
      githubUrl: "https://github.com/hoanghai/thriftly",
      liveUrl: "https://thrift-swap.vercel.app",
      image: "/images/thriftly-official.png",
    },
    {
      id: "complipilot",
      title: "CompliPilot",
      description: "A B2B SaaS platform for automating compliance checks and managing enterprise regulations.",
      tags: ["Java", "Spring Boot", "Next.js", "AWS", "Docker"],
      githubUrl: "https://github.com/lehai170504/complipilot-backend",
      liveUrl: "https://complipilot-frontend.vercel.app",
      image: "/images/complipilot-official.png",
    },
    {
      id: "wealthtrack",
      title: "WealthTrack",
      description: "A comprehensive personal and group finance management platform featuring RBAC, real-time spending statistics, savings goals, and budget alerts.",
      tags: ["Spring Boot", "Next.js", "Redis", "Docker", "OAuth"],
      githubUrl: "https://github.com/lehai170504/Finance-Backend",
      liveUrl: "https://finance-website-pi.vercel.app",
      image: "/images/wealthtrack-official.png",
    }
  ],
  experience: [
    {
      id: 1,
      title: "Software Engineering Student",
      organization: "FPT University",
      date: "2021 - Present",
      description: "Focused on scalable backend systems, database optimization, and real-time application development.",
    },
    {
      id: 2,
      title: "Full-stack Developer",
      organization: "Freelance",
      date: "2022 - Present",
      description: "Built and deployed multiple web applications using Spring Boot and Next.js, including real-time auction platforms.",
    },
    {
      id: 3,
      title: "Full-stack Software Engineer",
      organization: "WealthTrack",
      date: "Jan 2026 - Apr 2026",
      description: "Architected a finance management platform with Spring Boot and Next.js. Optimized performance by 40% using TanStack Query caching and integrated Redis, Docker, and Google OAuth.",
    }
  ],
  socials: {
    github: "https://github.com/lehai170504",
    linkedin: "https://www.linkedin.com/in/lê-hoàng-hải-4708b43ba/",
    email: "mailto:hoanghaile175@gmail.com"
  }
};
