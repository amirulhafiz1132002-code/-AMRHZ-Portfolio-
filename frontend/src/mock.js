// Mock GitHub Data - Will be replaced with real API integration later

export const mockGitHubData = {
  user: {
    name: "Muhammad Amirul Hafiz",
    username: "amirulhafiz1132002-code",
    email: "amirulhafiz1132002@gmail.com",
    bio: "Building AI-powered systems, not just apps",
    avatar: "https://github.com/amirulhafiz1132002-code.png",
    followers: 45,
    following: 32,
    public_repos: 25
  },
  repositories: [
    {
      id: 1,
      name: "AMRHZ-Portfolio",
      description: "Main portfolio & AI integration hub - Transforming from static to AI-Powered Agent System",
      language: "TypeScript",
      stars: 12,
      forks: 3,
      url: "https://github.com/amirulhafiz1132002-code/-AMRHZ-Portfolio--9fc24822",
      status: "active",
      category: "core",
      achievement: "Dashboard UI Complete",
      progress: 80,
      tags: ["AI", "Portfolio", "TypeScript", "Dashboard"]
    },
    {
      id: 2,
      name: "ap1-core",
      description: "AI Automation System - Core engine for workflow management and task execution",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      url: "https://github.com/Amrhz1132002/ap1-core",
      status: "active",
      category: "core",
      achievement: "Architecture Defined",
      progress: 40,
      tags: ["AI", "Automation", "Node.js", "Backend"]
    },
    {
      id: 3,
      name: "ap1",
      description: "AP1 Bash Toolkit - System-level automation and task management",
      language: "Shell",
      stars: 5,
      forks: 1,
      url: "https://github.com/amirulhafiz1132002-code/ap1",
      status: "active",
      category: "core",
      achievement: "Automation Toolkit",
      progress: 60,
      tags: ["Bash", "Automation", "CLI"]
    },
    {
      id: 4,
      name: "rye",
      description: "Python Package Manager - Forked for customization",
      language: "Rust",
      stars: 15,
      forks: 0,
      url: "https://github.com/amirulhafiz1132002-code/rye",
      status: "complete",
      category: "tools",
      achievement: "Python Package Manager",
      progress: 100,
      tags: ["Rust", "Python", "Package Manager"]
    },
    {
      id: 5,
      name: "proto-neural-zkp",
      description: "AI + Zero-Knowledge Proofs research project",
      language: "Python",
      stars: 22,
      forks: 4,
      url: "https://github.com/amirulhafiz1132002-code/proto-neural-zkp",
      status: "research",
      category: "research",
      achievement: "AI + Zero-Knowledge Proofs",
      progress: 45,
      tags: ["AI", "Cryptography", "Research", "Python"]
    },
    {
      id: 6,
      name: "WedemyServer",
      description: "Full Backend System built with Spring Boot",
      language: "Java",
      stars: 18,
      forks: 5,
      url: "https://github.com/amirulhafiz1132002-code/WedemyServer",
      status: "complete",
      category: "backend",
      achievement: "Full Backend System",
      progress: 100,
      tags: ["Java", "Spring Boot", "Backend", "API"]
    },
    {
      id: 7,
      name: "awesome",
      description: "Curated lists on interesting topics",
      language: "Markdown",
      stars: 8,
      forks: 2,
      url: "https://github.com/amirulhafiz1132002-code/awesome",
      status: "active",
      category: "resources",
      achievement: "Curated Lists",
      progress: 70,
      tags: ["Resources", "Documentation"]
    },
    {
      id: 8,
      name: "docs",
      description: "Documentation references and guides",
      language: "Markdown",
      stars: 6,
      forks: 1,
      url: "https://github.com/amirulhafiz1132002-code/docs",
      status: "active",
      category: "resources",
      achievement: "Documentation Hub",
      progress: 80,
      tags: ["Documentation", "Guides"]
    }
  ],
  stats: {
    totalProjects: 25,
    activeProjects: 3,
    languages: ["TypeScript", "JavaScript", "Python", "Java", "Rust", "Bash", "HTML", "CSS"],
    focusAreas: ["AI", "Automation", "System Architecture"],
    currentPhase: "Foundation Building"
  }
};

export const roadmapPhases = [
  {
    phase: 1,
    title: "Foundation",
    period: "Current",
    progress: 80,
    status: "active",
    items: [
      { name: "Portfolio Dashboard UI", completed: true },
      { name: "AP1 Architecture", completed: true },
      { name: "API Endpoint Creation", completed: false },
      { name: "Initial Deployment", completed: false }
    ]
  },
  {
    phase: 2,
    title: "AI Integration",
    period: "Q3 2026",
    progress: 0,
    status: "upcoming",
    items: [
      { name: "LLM Integration", completed: false },
      { name: "Vector Database Setup", completed: false },
      { name: "RAG Pipeline", completed: false },
      { name: "AI Feature Release", completed: false }
    ]
  },
  {
    phase: 3,
    title: "Automation",
    period: "Q4 2026",
    progress: 0,
    status: "upcoming",
    items: [
      { name: "Workflow Orchestration", completed: false },
      { name: "Analytics Dashboard", completed: false },
      { name: "User Authentication", completed: false },
      { name: "Scaling Infrastructure", completed: false }
    ]
  },
  {
    phase: 4,
    title: "Optimization",
    period: "2027",
    progress: 0,
    status: "future",
    items: [
      { name: "Microservices", completed: false },
      { name: "Global Distribution", completed: false },
      { name: "Advanced AI", completed: false }
    ]
  }
];

export const techStack = {
  frontend: ["TypeScript", "HTML", "CSS", "JavaScript", "React"],
  backend: ["Node.js", "Express.js", "Python"],
  ai: ["OpenAI API", "LangChain", "Vector Databases", "RAG"],
  databases: ["Redis", "MongoDB", "PostgreSQL"],
  devops: ["Docker", "GitHub Actions", "CI/CD"],
  infrastructure: ["GitHub Pages", "Vercel", "Node.js Servers", "AWS"]
};

export const achievements = [
  {
    category: "Development",
    items: [
      "Portfolio Evolution - Transformed static site → Interactive AI-ready platform",
      "Architecture Design - Designed scalable system architecture for AP1 Core",
      "Documentation - Comprehensive project documentation and guides",
      "Integration Patterns - Established reusable API integration patterns"
    ]
  },
  {
    category: "Learning & Growth",
    items: [
      "Advanced understanding of AI/ML integration",
      "Explored vector databases and RAG systems",
      "Gained expertise in full-stack automation",
      "Built strong foundation for scalable systems"
    ]
  },
  {
    category: "Community",
    items: [
      "Contributed to multiple open-source projects",
      "Maintained curated awesome lists",
      "Active in documentation and knowledge sharing"
    ]
  }
];
