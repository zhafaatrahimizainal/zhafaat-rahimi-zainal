import { Laptop, Tablet, Smartphone, Sparkles, CheckCircle2, Eye, Compass } from 'lucide-react';
import './ResponsiveShowcase.css';
import logoImg from '../assets/logo.jpeg';
import profileImg from '../assets/Profile.jpeg';

export default function ResponsiveShowcase() {
  return (
    <section className="glass-card responsive-showcase-section">
      <div className="showcase-header">
        <div className="showcase-badge">
          <Sparkles size={16} strokeWidth={2} />
          <span>CROSS-DEVICE ADAPTATION</span>
        </div>
        <h2 className="showcase-title">
          Pixel-Perfect on <span className="gradient-text">Every Screen.</span>
        </h2>
        <p className="showcase-desc">
          Every web experience I build adapts fluidly across modern devices. Experience live 3D screen simulations for MacBook, iTab, and iPhone.
        </p>
      </div>

      {/* 3D Stage Container */}
      <div className="stage-viewport mode-all">
        {/* ================= MACBOOK MODEL ================= */}
        <div className="device-3d macbook-model">
          <div className="macbook-lid">
            <div className="macbook-notch">
              <span className="camera-lens"></span>
            </div>
            <div className="macbook-screen">
              {/* Browser Header Bar */}
              <div className="mock-browser-bar">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address">zhafaat.dev/services</div>
                <div className="browser-pill">1440 × 900 px</div>
              </div>

              {/* Desktop Website Mini Simulation */}
              <div className="screen-content desktop-view">
                <div className="mini-nav">
                  <div className="mini-brand">
                    <img src={logoImg} alt="Logo" className="mini-logo" />
                    <span className="brand-name">zhafaat</span>
                  </div>
                  <div className="mini-nav-links">
                    <span className="link-item">Home</span>
                    <span className="link-item">About</span>
                    <span className="link-item active">Services</span>
                    <span className="link-item">Projects</span>
                  </div>
                </div>

                <div className="mini-hero-row">
                  <div className="mini-profile-card">
                    <img src={profileImg} alt="Profile" className="mini-avatar" />
                    <div className="mini-profile-text">
                      <p className="mini-name">Zhafaat Rahimi, S.Si</p>
                      <span className="mini-sub">Web Maker</span>
                    </div>
                  </div>
                  <div className="mini-pitch-card">
                    <span className="mini-eyebrow">FULL-STACK</span>
                    <p className="mini-headline">Transforming Ideas into Digital Experiences.</p>
                    <div className="mini-cta-row">
                      <span className="mini-btn-primary">Let's Build</span>
                      <span className="mini-btn-secondary">Projects</span>
                    </div>
                  </div>
                </div>

                <div className="mini-bento-subrow">
                  <div className="mini-stack-card">
                    <span>React / Next.js • Tailwind CSS • PostgreSQL</span>
                  </div>
                  <div className="mini-status-card">
                    <span className="mini-indicator"></span>
                    <span>Available Q3/Q4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MacBook Keyboard Base */}
          <div className="macbook-base">
            <div className="macbook-notch-lip"></div>
          </div>
          <div className="device-caption">
            <Laptop size={14} />
            <span>MacBook Pro • Desktop (1280px+)</span>
          </div>
        </div>

        {/* ================= ITAB / IPAD MODEL ================= */}
        <div className="device-3d itab-model">
          <div className="itab-body">
            <div className="itab-camera"></div>
            <div className="itab-screen">
              <div className="mock-tablet-header">
                <span className="status-clock">09:41</span>
                <span className="tablet-url">zhafaat.dev</span>
                <span className="status-battery">100%</span>
              </div>

              {/* Tablet Website Mini Simulation */}
              <div className="screen-content tablet-view">
                <div className="mini-nav">
                  <div className="mini-brand">
                    <img src={logoImg} alt="Logo" className="mini-logo" />
                    <span className="brand-name">zhafaat</span>
                  </div>
                  <div className="tablet-menu-pill">Menu</div>
                </div>

                <div className="mini-tablet-profile">
                  <img src={profileImg} alt="Profile" className="mini-avatar" />
                  <div>
                    <p className="mini-name">Zhafaat Rahimi Zainal, S.Si</p>
                    <span className="mini-sub">Full-Stack Developer</span>
                  </div>
                </div>

                <div className="mini-tablet-pitch">
                  <span className="mini-eyebrow">CROSS-PLATFORM</span>
                  <p className="mini-headline">Fluid Layouts On Tablet Views.</p>
                  <span className="mini-btn-primary">Explore Services</span>
                </div>

                <div className="mini-tablet-pills">
                  <span className="t-pill">Bento Grid</span>
                  <span className="t-pill">Touch-Ready</span>
                  <span className="t-pill">Adaptive</span>
                </div>
              </div>
            </div>
          </div>
          <div className="device-caption">
            <Tablet size={14} />
            <span>iTab • Tablet (768px – 1024px)</span>
          </div>
        </div>

        {/* ================= IPHONE MODEL ================= */}
        <div className="device-3d iphone-model">
          <div className="iphone-body">
            <div className="iphone-dynamic-island">
              <span className="island-camera"></span>
            </div>
            <div className="iphone-screen">
              <div className="mock-mobile-header">
                <span className="status-clock">09:41</span>
                <span className="mobile-5g">5G</span>
              </div>

              {/* Mobile Website Mini Simulation */}
              <div className="screen-content mobile-view">
                <div className="mini-nav-mobile">
                  <div className="mini-brand">
                    <img src={logoImg} alt="Logo" className="mini-logo-sm" />
                    <span className="brand-name-sm">zhafaat</span>
                  </div>
                  <div className="hamburger-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="mini-mobile-profile">
                  <img src={profileImg} alt="Profile" className="mini-avatar-mobile" />
                  <p className="mini-mobile-name">Zhafaat R. Zainal</p>
                  <span className="mini-mobile-sub">Web Maker</span>
                </div>

                <div className="mini-mobile-pitch">
                  <span className="mini-mobile-badge">RESPONSIVE</span>
                  <p className="mini-mobile-headline">Mobile-First Fluid Craft.</p>
                  <div className="mini-mobile-btn">Contact Me</div>
                </div>

                <div className="mini-mobile-footer-pill">
                  <span>Fast • Accessible • Light</span>
                </div>
              </div>

              <div className="iphone-home-bar"></div>
            </div>
          </div>
          <div className="device-caption">
            <Smartphone size={14} />
            <span>iPhone • Mobile (320px – 768px)</span>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="showcase-features-grid">
        <div className="showcase-feature-item">
          <div className="feature-icon-wrapper">
            <Compass size={20} />
          </div>
          <div>
            <h4>Adaptive Breakpoint Design</h4>
            <p>Every element re-arranges automatically from 12-column desktop Bento grids to single-column phone flows.</p>
          </div>
        </div>
        <div className="showcase-feature-item">
          <div className="feature-icon-wrapper">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <h4>Touch & Keyboard Accessible</h4>
            <p>Precise button hit targets, native gestures, smooth scrolling, and zero horizontal overflow on small screens.</p>
          </div>
        </div>
        <div className="showcase-feature-item">
          <div className="feature-icon-wrapper">
            <Eye size={20} />
          </div>
          <div>
            <h4>High-Density Retina Displays</h4>
            <p>Sharp typography, vector icons, and optimized contrast across OLED, Liquid Retina, and external 4K displays.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
