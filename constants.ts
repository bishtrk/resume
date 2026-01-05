
import { ResumeData } from './types';

export const INITIAL_DATA: ResumeData = {
  name: "Alex Rivera",
  title: "Senior Full Stack Engineer",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800&q=80",
  email: "alex.rivera@example.com",
  phone: "+1 (555) 000-1111",
  website: "alexrivera.dev",
  github: "github.com/arivera",
  linkedin: "linkedin.com/in/arivera",
  summary: "Results-driven Senior Software Engineer with 8+ years of experience in building scalable web applications. Expert in React, Node.js, and Cloud Infrastructure. Proven track record of leading cross-functional teams and delivering high-impact features for millions of users.",
  experiences: [
    {
      id: "1",
      company: "TechFlow Systems",
      role: "Senior Frontend Lead",
      location: "San Francisco, CA",
      period: "2021 — Present",
      description: "Architected a modular micro-frontend architecture using React and Module Federation, reducing build times by 40%. Led a team of 6 developers in shipping a complete redesign of the core dashboard, resulting in a 25% increase in user engagement."
    },
    {
      id: "2",
      company: "DataStream AI",
      role: "Full Stack Engineer",
      location: "Austin, TX",
      period: "2018 — 2021",
      description: "Developed real-time data visualization tools using D3.js and WebSockets. Optimized backend API performance by implementing Redis caching layer, cutting response times by 60%."
    }
  ],
  projects: [
    {
      id: "p1",
      name: "Nebula Engine",
      tech: ["Rust", "Wasm", "TypeScript"],
      description: "A high-performance 2D rendering engine compiled to WebAssembly for real-time web gaming and interactive simulations.",
      link: "github.com/arivera/nebula"
    },
    {
      id: "p2",
      name: "CloudScale CLI",
      tech: ["Go", "Docker", "AWS"],
      description: "Command-line tool for automated multi-cloud deployments with zero-downtime rolling updates and integrated monitoring.",
      link: "cli.cloudscale.io"
    }
  ],
  education: [
    {
      id: "e1",
      school: "Stanford University",
      degree: "B.S. Computer Science",
      year: "2017"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"]
    },
    {
      category: "Infrastructure",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    }
  ]
};
