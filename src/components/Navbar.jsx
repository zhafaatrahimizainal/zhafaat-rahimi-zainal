import { useState } from "react";
import { Cloud, Menu, X } from "lucide-react";
import "./Navbar.css";
import Logo from "../assets/logo.jpeg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
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
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#home" className="nav-link active">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <div className="desktop-cta">
          <a href="#contact" className="nav-cta-btn">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="mobile-dropdown">
          <a href="#home" onClick={closeMenu} className="mobile-link active">
            Home
          </a>
          <a href="#about" onClick={closeMenu} className="mobile-link">
            About
          </a>
          <a href="#services" onClick={closeMenu} className="mobile-link">
            Services
          </a>
          <a href="#projects" onClick={closeMenu} className="mobile-link">
            Projects
          </a>
          <a href="#contact" onClick={closeMenu} className="mobile-link">
            Contact
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-primary mobile-cta"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
