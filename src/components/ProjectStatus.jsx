import { useState } from "react";
import "./ProjectStatus.css";
import { ClipboardList, Send } from "lucide-react";
import { getWhatsAppUrl } from "../constants/contact";

function ProjectStatus() {
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setShowError(true);
      return;
    }

    setShowError(false);
    const whatsappUrl = getWhatsAppUrl(trimmedMessage);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleTextChange = (e) => {
    setMessage(e.target.value);
    if (showError && e.target.value.trim()) {
      setShowError(false);
    }
  };

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
          <p className="status-value">
            Accepting new custom website & web app projects
          </p>
        </div>

        <div className="status-input-group">
          <textarea
            id="status-project-message"
            className={`status-textarea ${showError ? "input-error" : ""}`}
            value={message}
            onChange={handleTextChange}
            placeholder="Tell me about your project..."
            rows={3}
            aria-label="Tell me about your project"
          />
          {showError && (
            <span className="status-error-msg">
              Please enter a message first
            </span>
          )}
        </div>
      </div>

      <div className="status-footer">
        <span className="response-time">Fast Response (&lt; 24h)</span>
        <button
          type="button"
          onClick={handleSendMessage}
          className="status-link-btn"
          aria-label="Send WhatsApp message"
        >
          Send Message <Send size={14} style={{ marginLeft: "0.375rem" }} />
        </button>
      </div>
    </div>
  );
}

export default ProjectStatus;
