import './ProjectStatus.css';
import { ClipboardList } from 'lucide-react';

function ProjectStatus() {
  return (
    <div className="glass-card status-card">
      <div className="status-header">
        <div className="status-title-wrapper">
          <div className="status-icon">
            <ClipboardList size={20} strokeWidth={2} />
          </div>
          <h3 className="status-title">Project Status</h3>
        </div>
        <span className="live-pulse"></span>
      </div>

      <div className="status-body">
        <div className="status-box">
          <p className="status-label">Current Focus</p>
          <p className="status-value">Accepting new custom website & web app projects</p>
        </div>
      </div>

      <div className="status-footer">
        <span className="response-time">Fast Response (&lt; 24h)</span>
        <a href="#contact" className="status-link">
          Send Message &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProjectStatus;