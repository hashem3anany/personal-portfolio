import { Briefcase, Code, Shield, Network, Server, Monitor } from "lucide-react";

export const siteMetadata = {
  name: "Hashem Nour El Enany",
  title: "IT Specialist | Front-End Developer "/*| Cybersecurity Enthusiast*/,
  description: "Computer Science graduate with practical experience in IT support and infrastructure, a background in modern web development, and a growing focus on cybersecurity. I enjoy troubleshooting technical problems, building useful web experiences, and continuously improving my technical skills.",
  location: "10th of Ramadan City, Sharqia, Egypt",
  email: "hashemnour3nany@gmail.com",
  github: "https://github.com/hashem3anany",
  linkedin: "https://www.linkedin.com/in/hashem-alenany-70bb12355/",
};

export const skills = {
  itSupport: [
    "IT troubleshooting",
    "Technical support",
    "Networking fundamentals",
    "Servers and switches",
    "Sophos firewall exposure",
    "Backup fundamentals",
    "Printer and email support",
    "IP CCTV and surveillance infrastructure",
    "Windows and general desktop support"
  ],
  frontEnd: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
    "REST API integration",
    "Git and GitHub",
    "Responsive web design"
  ],
  programming: [
    "Node.js background",
    "Problem-solving with C++",
    "API concepts",
    "Component-based development",
    "Debugging fundamentals"
  ],
  /*cybersecurity: [
    "Networking fundamentals",
    "Security fundamentals",
    "Security monitoring concepts",
    "Threat intelligence fundamentals",
    "Incident response concepts",
    "Threat hunting concepts",
    "Digital forensics fundamentals"
  ],*/
  softwareDev: [
    "Requirements analysis",
    "User stories",
    "Acceptance criteria",
    "Agile and Scrum",
    "Jira planning",
    "Git workflows",
    "Pull requests and code reviews",
    "Root Cause Analysis",
    "Bug investigation",
    "Regression testing",
    "Technical documentation",
    "AI-assisted development workflows"
  ]
};

export const experience = [
  {
    title: "IT Specialist",
    company: "Franks Food Industries",
    period: "2024–2025",
    responsibilities: [
      "Supported company employees with hardware, software, and IT troubleshooting.",
      "Worked with servers, switches, network connectivity, and firewall infrastructure.",
      "Supported printers, email, backup operations, and general IT services.",
      "Investigated user, network, and infrastructure problems.",
      "Worked with Sophos firewall technology.",
      "Supported an IP CCTV deployment involving 64 Hikvision IP cameras, two 32-channel NVRs, two 16-port PoE switches, and two 4-port PoE switches.",
      "Supported approximately 30 factory users and four remote users."
    ]
  }
];

export const projects = [
  {
    title: "MediCo — Healthcare Web Application",
    description: "Academic healthcare application with role-based functionality for users, doctors, nurses, and administrators. Includes authentication, doctor and nurse search, real-time chat, and administrative account management.",
    tags: ["React.js", "Pusher", "ASP.NET"],
    status: "Completed",
    github: "",
    live: "",
  },
  {
    title: "Hikvision IP CCTV Infrastructure",
    description: "IT infrastructure case study for a 64-camera surveillance deployment. Involved configuration of cameras, NVRs, PoE switching equipment, and troubleshooting technical challenges.",
    tags: ["Infrastructure", "Networking", "IP CCTV", "Hardware"],
    status: "Completed",
    github: "",
    live: "",
  },
  {
    title: "Modern Front-End Portfolio Application",
    description: "A polished personal portfolio application designed to showcase development skills, professional experience, and technical projects. Built with a modern React stack.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    status: "In Progress",
    github: "https://github.com/hashem3anany",
    live: "",
  },
  {
    title: "Cybersecurity Home Lab",
    description: "Hands-on lab environment focused on log analysis, security monitoring, alert investigation, and incident documentation.",
    tags: ["Security", "Log Analysis", "SIEM", "Incident Response"],
    status: "Planned",
    github: "",
    live: "",
  }
];
