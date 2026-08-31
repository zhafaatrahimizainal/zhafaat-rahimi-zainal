import { Zap, ArrowRight } from "lucide-react";
import ProfileCard from "./ProfileCard";
import TechStack from "./TechStack";
import ProjectStatus from "./ProjectStatus";
import "./Hero.css";

function Hero() {
  return (
    <div className="bento-grid">
      {/* Profile Widget */}
      <div className="grid-area-profile">
        <ProfileCard />
      </div>

      {/* Main Pitch Card */}
      <section className="glass-card grid-area-pitch hero-pitch-card">
        <div>
          <div className="eyebrow-badge">
            <Zap size={16} strokeWidth={2} />
            <span>WEB MAKER & FULL-STACK DEVELOPER</span>
          </div>

          <h1 className="hero-headline">
            Transforming Ideas into{" "}
            <span className="gradient-text">Digital Experiences.</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive websites and digital products that help
            individuals, businesses, and brands establish a powerful, performant
            online presence.
          </p>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Let's Build Something
            <ArrowRight
              size={20}
              strokeWidth={3}
              style={{ marginLeft: "0.5rem" }}
            />
          </a>
          <a href="#projects" className="btn-secondary">
            View My Work
          </a>
        </div>
      </section>

      {/* Stack Widget */}
      <div className="grid-area-stack">
        <TechStack />
      </div>

      {/* Status Widget */}
      <div className="grid-area-status">
        <ProjectStatus />
      </div>
    </div>
  );
}

export default Hero;
