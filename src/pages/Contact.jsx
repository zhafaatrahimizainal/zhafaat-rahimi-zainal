import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <section className="glass-card contact-hero-card">
        <div className="eyebrow-badge">
          <MessageSquare size={16} strokeWidth={2} />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="page-title">
          Let's Build Something <span className="gradient-text">Great Together.</span>
        </h1>
        <p className="page-description">
          Have an upcoming project, a question, or a business proposal? Send a message and I will respond within 24 hours.
        </p>
      </section>

      {/* Split Contact Layout */}
      <div className="contact-grid">
        {/* Info Box */}
        <div className="glass-card contact-info-card">
          <h2 className="info-title">Contact Information</h2>
          <p className="info-sub">Reach out directly via email or social platforms.</p>

          <div className="info-details">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div>
                <p className="item-label">Direct Email</p>
                <a href="mailto:zhafaat.rahimi@icloud.com" className="item-value">zhafaat.rahimi@icloud.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="item-label">Location & Status</p>
                <p className="item-value">Available for Remote & Contract Work</p>
              </div>
            </div>
          </div>

          <div className="contact-status-box">
            <span className="status-dot"></span>
            <span>Currently accepting new Q3/Q4 web projects</span>
          </div>
        </div>

        {/* Form Box */}
        <div className="glass-card contact-form-card">
          {submitted ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', marginBottom: '1rem' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Message Sent!</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Thank you for reaching out! Your message has been received. I will respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required placeholder="e.g. Alex Smith" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required placeholder="alex@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details / Message</label>
                <textarea id="message" rows="5" required placeholder="Tell me about your website goals..."></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;