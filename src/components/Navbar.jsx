import Logo from "../assets/logo.jpeg";
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';
import './Navbar.css';
import { getWhatsAppUrl } from "../constants/contact";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            {/* <Cloud size={24} strokeWidth={2} /> */}
            <img
              src={Logo}
              alt="Zhafaat Rahimi Zainal"
              className="logo-img"
            />
          </div>
          <div className="logo-text">
            <span className="logo-title">zhafaat</span>
            <span className="logo-subtitle">Web Maker</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>

        {/* WhatsApp CTA */}
        <div className="desktop-cta">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="mobile-dropdown">
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>Services</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>Contact</NavLink>
          <Link to="/contact" onClick={closeMenu} className="btn-primary mobile-cta">Start a Project</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;