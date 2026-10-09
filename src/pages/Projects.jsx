import { FolderGit2, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Electrical Lab",
    category: "Electrical Engineering & Education",
    desc: "An interactive electrical laboratory website designed to explore electrical concepts, experiment with circuits, and visualize engineering principles through hands-on learning and simulation.",
    tags: ["Electrical Engineering", "Circuit Simulation", "Education"],
    demoUrl: "https://electrical-lab.netlify.app/",
    githubUrl: "https://github.com/zhafaatrahimizainal/Electrical-Lab.git",
  },
  {
    title: "HealtyWay",
    category: "Food & Beverage Web UI",
    desc: "A modern food and beverage website showcasing artisanal milk and fresh fruit drinks through an engaging visual experience, product-focused layouts, and a refreshing brand identity.",
    tags: ["Food & Beverage", "Product Showcase", "Web Design"],
    demoUrl: "https://healtyway.netlify.app/",
    githubUrl: "https://github.com/zhafaatrahimizainal/HealtyWay.git",
  },
  {
    title: "Semiconductor Era", // Update based on your project title
    category: "Web Application", // e.g., "Educational / Tech Platform"
    desc: "A web platform dedicated to semiconductor technology, industry insights, and educational resources.",
    tags: ["React", "JavaScript", "CSS"], // Update with the technologies used
    demoUrl: "https://semiconductorera.netlify.app",
    githubUrl: "https://github.com/zhafaatrahimizainal/Semiconductor-Era.git", // Replace with your repository link
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {/* Header */}
      <section className="glass-card projects-hero-card">
        <div className="eyebrow-badge">
          <FolderGit2 size={16} strokeWidth={2} />
          <span>PORTFOLIO & WORK</span>
        </div>
        <h1 className="page-title">
          Featured Projects &{" "}
          <span className="gradient-text">Digital Products.</span>
        </h1>
        <p className="page-description">
          A selection of modern web development projects showcasing full-stack
          capabilities, clean user interfaces, and intentional UX
          implementation.
        </p>
      </section>

      {/* Project Cards Grid */}
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div key={index} className="glass-card project-card">
            <div className="project-card-top">
              <span className="project-category">{project.category}</span>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.desc}</p>
            </div>

            <div className="project-card-bottom">
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-item">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn primary"
                >
                  <ExternalLink size={16} /> Live Preview
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn secondary"
                >
                  <GithubIcon size={16} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
