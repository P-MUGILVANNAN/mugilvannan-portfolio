export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
  year: string;
}

export interface ProjectItem {
  title: string;
  techStack: string[];
  description: string;
  codeUrl?: string;
  liveUrl: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  instagram: string;
  github: string;
}

export const portfolioData = {
  personalInfo: {
    name: "MUGILVANNAN P",
    role: "Academic Coordinator(TL) & Full Stack Developer",
    tagline: "Empowering the next generation of developers with practical skills and real-world knowledge.",
    resumeUrl: "#", // Placeholder for CV
    profileCard: {
      experience: "2.5+ Years",
      studentsMentored: "500+",
      projectsCompleted: "15+",
      placementRate: "90%"
    }
  },
  about: {
    description: "Passionate Academic Coordinator(TL) at FIIT Formacion Pvt Ltd with 2.5+ years of experience in full-stack development training. Bridging the gap between academic theory and industry practice through hands-on, project-based learning.",
    teachingApproach: "I specialize in creating interactive learning experiences that make complex concepts accessible. My methodology focuses on real-world applications and practical implementation.",
    highlights: [
      { text: "2.5+ Years Training Experience", label: "Professional Training" },
      { text: "Full Stack Development", label: "MERN & Python Specialist" },
      { text: "Project-Based Learning", label: "Practical Lab Focus" },
      { text: "Student Mentoring", label: "Career Guidances" }
    ],
    experienceAdditional: "Also worked as a Development Team Lead at EntryKode IT Solutions for 6 months, coordinating development sprints, establishing software architectures, and driving key product updates."
  },
  skills: [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js", "Angular", "Vue.js", "Next.js", "Nuxt.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Nest.js", "Python", "Django", "Java", "Spring Boot", "REST APIs", "Servlets", "JSP", "PHP", "Laravel"]
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB", "Oracle", "PostgreSQL", "MSSQL", "Firebase", "SQLite"]
    },
    {
      category: "Cloud & Tools",
      skills: ["AWS", "Vercel", "Git", "VS Code", "Figma", "Postman"]
    },
    {
      category: "Programming & Data",
      skills: ["C", "C++", "C#", "NumPy", "SciPy", "Pandas", "Matplotlib", "Seaborn"]
    }
  ] as SkillCategory[],
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Loyola Institute of Technology",
      score: "GPA: 8.2 / 10.0",
      year: "2019–2023",
      description: "Acquired deep foundations in computer systems, algorithms, network management, and software engineering. Graduated with first-class honors."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sri Lakshmi Vidhyalaya Matriculation Higher Secondary School",
      score: "Percentage: 85%",
      year: "2018–2019",
      description: "Focused on Mathematics, Physics, Chemistry, and Biology stream."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Balamandir Matriculation Higher Secondary School",
      score: "Percentage: 94%",
      year: "2016–2017",
      description: "Completed general secondary education with distinctions in Science and Mathematics."
    }
  ] as EducationItem[],
  certifications: [
    {
      name: "MERN Full Stack Development",
      provider: "Ethnus Codemithra",
      year: "2024"
    }
  ] as CertificationItem[],
  projects: [
    {
      title: "FIITJOBS - Career Partners",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS S3"],
      description: "An enterprise job portal and recruitment platform. Built to connect candidates with opportunities, featuring detailed profiles, job applications, resume parsing, and recruiter pipelines.",
      liveUrl: "https://fiitjobs.com/"
    },
    {
      title: "EntryKode IT Solutions",
      techStack: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js", "MongoDB"],
      description: "Official corporate website and services platform for EntryKode IT Solutions. Showcases web services, project development calculators, client testimonials, and a start-project wizard.",
      liveUrl: "https://entrykode.com/"
    },
    {
      title: "Nithya Fancy Costumes",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      description: "E-commerce platform for fancy dress and costume rentals. Features filtering by events (Christmas, Dance, Mascots), product detail galleries, rent booking calendar, and secure payment pathways.",
      liveUrl: "https://nithyafancycostumes.com/"
    }
  ] as ProjectItem[],
  contact: {
    email: "mugilvannanpichai02@gmail.com",
    linkedin: "https://www.linkedin.com/in/mugilvannan-p-215559266/",
    instagram: "https://www.instagram.com/micky_mouse.23/",
    github: "https://github.com/P-MUGILVANNAN"
  } as ContactInfo
};
