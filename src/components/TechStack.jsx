import "./TechStack.css";
import {
  Folder,
  Atom,
  Palette,
  Server,
  PenTool,
  Database,
  Workflow,
} from "lucide-react";

const STACKS = [
  {
    name: "React / Next.js",
    sub: "Frontend",
    bg: "#cffaff",
    color: "#0891b2",
    icon: Atom,
  },
  {
    name: "Tailwind CSS",
    sub: "Styling",
    bg: "#ccfbf1",
    color: "#0d9488",
    icon: Palette,
  },
  {
    name: "Node / Express",
    sub: "Backend",
    bg: "#d1fae5",
    color: "#059669",
    icon: Server,
  },
  {
    name: "UI/UX Design",
    sub: "Figma Prototyping",
    bg: "#f3e8ff",
    color: "#9333ea",
    icon: PenTool,
  },
  {
    name: "PostgreSQL",
    sub: "Databases",
    bg: "#dbeafe",
    color: "#2563eb",
    icon: Database,
  },
  {
    name: "REST & GraphQL",
    sub: "Integration",
    bg: "#fef3c7",
    color: "#d97706",
    icon: Workflow,
  },
];

function TechStack() {
  return (
    <div className="glass-card tech-card">
      <div className="tech-header">
        <div className="tech-title-wrapper">
          <div className="tech-icon">
            <Folder size={20} strokeWidth={2} />
          </div>
          <div>
            <h3 className="tech-title">Capabilities & Stack</h3>
            <p className="tech-subtitle">Core technologies & tools</p>
          </div>
        </div>
        <span className="tech-tag">Recents</span>
      </div>

      <div className="tech-grid">
        {STACKS.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.name} className="tech-item">
              <span
                className="stack-badge"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                <IconComponent size={18} strokeWidth={2} />
              </span>
              <div className="stack-info">
                <p className="stack-name">{item.name}</p>
                <p className="stack-sub">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
