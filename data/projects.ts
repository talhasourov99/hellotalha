export type ProjectCategory = "Software" | "Research" | "Innovation";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  problem: string;
  approach: string;
  nextStep: string;
  stack: string[];
  status: "Concept" | "Academic project" | "Research direction";
};

export const projects: Project[] = [
  {
    id: "rewoven",
    number: "01",
    title: "REWOVEN — Textile Circularity",
    category: "Innovation",
    year: "2026",
    summary:
      "A digital product passport concept for textile surplus, bringing material identity, traceability and circularity information into one structured view.",
    problem:
      "Textile surplus can be difficult to assess and route efficiently when material composition, condition and provenance are fragmented.",
    approach:
      "A structured passport concept covering product identity, source material, processing history, circularity data and an AI-assisted assessment layer.",
    nextStep:
      "Validate the data model with real recycler and manufacturer workflows, then build a working prototype.",
    stack: ["Product Passport", "Traceability", "Circular Economy", "AI Concept"],
    status: "Concept",
  },
  {
    id: "lost-found",
    number: "02",
    title: "Lost & Found System",
    category: "Software",
    year: "2026",
    summary:
      "A web application for reporting, searching and recovering lost items, designed around an MVC architecture and relational database.",
    problem:
      "Lost-item information can be scattered across informal channels, making it difficult to discover and match reports.",
    approach:
      "An ASP.NET Core MVC application direction with Razor views, structured item records, search and SQL Server persistence.",
    nextStep:
      "Add verified screenshots, repository link and a feature-by-feature implementation summary.",
    stack: ["ASP.NET Core MVC", "C#", "Razor", "SQL Server"],
    status: "Academic project",
  },
  {
    id: "ai-detection",
    number: "03",
    title: "Explainable and Robust AI-Generated Image Detection Under Unseen Generators",
    category: "Research",
    year: "2026",
    summary:
      "My ongoing undergraduate thesis research: investigating explainable and robust AI-generated image detection, with a focus on reliability when evaluating images from generators unseen during training.",
    problem:
      "A detector may perform well on familiar data but lose reliability when image-generation methods change.",
    approach:
      "Developing a leakage-aware experimental protocol with careful dataset provenance, generator-disjoint evaluation, cross-generator generalization analysis and explainability. Implementation and evaluation are ongoing.",
    nextStep:
      "Complete the dataset and split validation, implement the experimental pipeline in Python, evaluate generalization on unseen generators, and report results after validation.",
    stack: ["Computer Vision", "Machine Learning", "Explainable AI", "Python"],
    status: "Research direction",
  },
  {
    id: "flood-node",
    number: "04",
    title: "Flood Early-Warning Node",
    category: "Innovation",
    year: "2026",
    summary:
      "A proposed solar-powered ESP32 system to monitor water level and rainfall, classify risk and alert riverside communities.",
    problem:
      "Communities in flood-prone areas need timely local warnings that can operate under connectivity and power constraints.",
    approach:
      "A proposed sensing node with water-level and rainfall inputs, risk tiers, local siren/LED and remote notification.",
    nextStep:
      "Prototype the sensor node and test power autonomy, connectivity, alert reliability and field maintainability.",
    stack: ["ESP32", "IoT", "Sensors", "Early Warning"],
    status: "Concept",
  },

  {
    id: "coaching-management",
    number: "05",
    title: "Coaching Management System",
    category: "Software",
    year: "Academic",
    summary: "A full-stack web application for managing coaching-centre operations, including student records, attendance, courses, dashboards and fee administration.",
    problem: "Coaching operations require a central place to organize student information, attendance, courses and payments.",
    approach: "Built with an HTML/CSS interface, PHP backend and MySQL database.",
    nextStep: "Add screenshots and a repository or demo link when available.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    status: "Academic project",
  },
];
