import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import './Projects.css';

const PROJECTS = [
  {
    title: "Profile & Portfolio Web ",
    category: "Personal Brand & Web UI",
    desc: "A glassmorphic, Bento-grid developer personal website featuring dark/light dynamic styling, Lucide iconography, and responsive layouts.",
    tags: ["React", "Tailwind CSS", "Design Tokens"],
    demoUrl: "https://zhafaat.dev",
    githubUrl: "https://github.com"
  },
  {
    title: "Scientific Data Management Portal",
    category: "Full-Stack Web Application",
    desc: "An analytical platform designed for data tracking, document previewing, and PostgreSQL database queries with high-throughput response times.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Interactive Services Dashboard",
    category: "SaaS & Dashboard UI",
    desc: "A responsive client dashboard focused on real-time task status tracking, micro-interactions, and accessible UI components.",
    tags: ["React", "Lucide Icons", "CSS Modules"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
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
          Featured Projects & <span className="gradient-text">Digital Products.</span>
        </h1>
        <p className="page-description">
          A selection of modern web development projects showcasing full-stack capabilities, clean user interfaces, and intentional UX implementation.
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
                  <span key={tIdx} className="project-tag-item">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link-btn primary">
                  <ExternalLink size={16} /> Live Preview
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-btn secondary">
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