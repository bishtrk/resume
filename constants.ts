
import { ResumeData } from './types';

export const INITIAL_DATA: ResumeData = {
  name: "Raj Kamal Bisht",
  title: "Full Stack Software Architect",
  profileImage: "https://raw.githubusercontent.com/bishtrk/resume/main/assets/profile.jpg",
  email: "rajkamal612@gmail.com",
  phone: "+91 -",
  website: "-",
  github: "github.com/bishtrk",
  linkedin: "linkedin.com/in/rajkamalbisht",
  summary: "Full Stack Software Architect with experience designing, developing and delivering scalable enterprise systems. Strong background in Java, Spring Boot, Microservices, AWS Cloud, and data pipelines. Proven ability to translate business requirements into robust architectures and lead projects from ideation to production.",
  experiences: [
    {
      id: "1",
      company: "Private IT Services",
      role: "Full Stack Software Architect",
      location: "Gurgaon, India",
      period: "Jan 2024 — Present",
      description: "Leading solutioning and development of logistics data platforms including CFAST OneSearch. Designed and delivered Spring Boot and React applications, Kafka-based data pipelines, and secure API integrations using WSO2 and OAuth2 on Kubernetes."
    },
    {
      id: "2",
      company: "IT Services Major",
      role: "Technical Lead / Architect",
      location: "Bangalore, India",
      period: "Till Jan 2022",
      description: "Designed and built cloud-native platforms on AWS including HPC orchestration systems and enterprise retail backends. Led architecture, development, and client coordination across multiple large-scale Spring Boot microservices."
    }
  ],
  projects: [
    {
      id: "p1",
      name: "CFAST OneSearch",
      tech: ["Spring Boot", "React", "Kafka", "Kubernetes", "OAuth2"],
      description: "Enterprise search and traceability platform for logistics data, built as a scalable microservices-based application.",
      link: "internal-enterprise-project"
    },
    {
      id: "p2",
      name: "WMS Premium Platform",
      tech: ["Spring Boot", "React", "Kafka", "REST", "SOAP"],
      description: "Developer productivity platform automating BlueYonder WMS development lifecycle via Git and DLX integrations.",
      link: "internal-enterprise-project"
    }
  ],
  education: [
    {
      id: "e1",
      school: "Lund University, Sweden",
      degree: "M.Sc. Corporate Entrepreneurship",
      year: ""
    }
  ],
  skills: [
    {
      category: "Backend & Architecture",
      items: ["Java 8", "Spring Boot", "Spring Cloud", "Microservices", "REST", "SOAP", "Kafka"]
    },
    {
      category: "Frontend",
      items: ["React", "WebSockets", "SSE"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "Jenkins", "ECS Fargate", "ELK Stack"]
    }
  ]
}
;
