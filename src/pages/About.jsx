import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { User, GraduationCap, Code2, Compass, X, Maximize2 } from 'lucide-react';
import profileImage from "../assets/Profile.jpeg";
import './About.css';

function About() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsImageModalOpen(false);
    };
    if (isImageModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isImageModalOpen]);

  return (
    <div className="about-container">
      {/* Header Banner */}
      <section className="glass-card about-hero-card">
        <div className="about-hero-content">
          <div className="eyebrow-badge">
            <User size={16} strokeWidth={2} />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h1 className="page-title">
            Analytical Thinking Meets <span className="gradient-text">Creative Web Crafts.</span>
          </h1>
          <p className="page-description">
            I am Zhafaat Rahimi Zainal, S.Si — a Full-Stack Developer and UI/UX enthusiast. I combine scientific rigor with practical web technologies to build user-centered digital solutions.
          </p>
        </div>
        <div className="about-portrait-wrapper">
          <div 
            className="about-portrait-frame" 
            onClick={() => setIsImageModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsImageModalOpen(true); }}
            aria-label="Click to enlarge profile picture"
          >
            <img src={profileImage} alt="Zhafaat Rahimi Zainal" className="about-portrait-img" />
            <span className="about-portrait-zoom-hint" title="Click to view full image">
              <Maximize2 size={16} />
            </span>
          </div>
        </div>
      </section>

      {/* Grid Highlights */}
      <div className="about-grid">
        <div className="glass-card about-card">
          <div className="about-card-icon">
            <GraduationCap size={22} />
          </div>
          <h3>Scientific Foundation (S.Si)</h3>
          <p>
            My Bachelor of Science background instills a structured approach to problem-solving, data modeling, algorithms, and logical application design.
          </p>
        </div>

        <div className="glass-card about-card">
          <div className="about-card-icon">
            <Code2 size={22} />
          </div>
          <h3>Full-Stack Capability</h3>
          <p>
            I build end-to-end applications: from responsive React/Next.js dynamic frontends to robust Node.js backend services and PostgreSQL databases.
          </p>
        </div>

        <div className="glass-card about-card">
          <div className="about-card-icon">
            <Compass size={22} />
          </div>
          <h3>User Experience First</h3>
          <p>
            Clean code means little if the interface confuses users. I prioritize intuitive layouts, swift performance, accessibility, and clean visual tokens.
          </p>
        </div>
      </div>

      {/* Full Image Preview Modal */}
      {isImageModalOpen && (
        createPortal(
          <div 
            className="image-lightbox-backdrop" 
            onClick={() => setIsImageModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Full size profile image"
          >
            <div className="image-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="image-lightbox-close" 
                onClick={() => setIsImageModalOpen(false)}
                aria-label="Close image preview"
              >
                <X size={22} />
              </button>
              <img 
                src={profileImage} 
                alt="Zhafaat Rahimi Zainal - Full View" 
                className="image-lightbox-img" 
              />
            </div>
          </div>,
          document.getElementById('modal-root') || document.body
        )
      )}
    </div>
  );
}

export default About;