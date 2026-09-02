import { Link } from 'react-router-dom';
import { User, PawPrint, Share2, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="glass-card footer-card">
        <div className="footer-top">
          <a href='https://www.instagram.com/zhafaatrahimizainal' target='_blank' className="footer-brand">
            <div className="footer-logo-icon">
              <User size={20} strokeWidth={2} />
            </div>
            <div>
              <span className="footer-brand-title">zhafaat</span>
              <p className="footer-brand-sub">Zhafaat Rahimi Zainal, S.Si</p>
            </div>
          </a>

          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <PawPrint size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Share2 size={18} />
            </a>
            <a href="mailto:zhafaat.rahimi@icloud.com" target="_blank" rel="noreferrer" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Zhafaat Rahimi Zainal, S.Si. All rights reserved.</p>
          <p className="footer-tech-tag">Built with React & Lucide Iconography</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;