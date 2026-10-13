import { Zap, ArrowRight } from "lucide-react";
import ProfileCard from "./ProfileCard";
import TechStack from "./TechStack";
import ProjectStatus from "./ProjectStatus";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bento-grid">
      {/* Profile Widget */}
      <div className="grid-area-profile">
        <Link
          to="/about"
          style={{
            textDecoration: "none",
          }}
        >
          <ProfileCard />
        </Link>
      </div>

      {/* Main Pitch Card */}
      <section className="glass-card grid-area-pitch hero-pitch-card">
        <div>
          <div className="eyebrow-badge">
            <Zap size={16} strokeWidth={2} />
            <span>WEB MAKER & FULL-STACK DEVELOPER</span>
          </div>

          <h1 className="hero-headline">
            Build your own digital home{" "}
            <span className="gradient-text">on the World Wide Web.</span>
          </h1>

          <p className="hero-description">
            I am your digital architect and developer, building custom web homes that empower individuals, businesses, and brands to thrive online.
          </p>
        </div>

        <div className="hero-actions">
          <Link to="/services" className="btn-primary">
            Let's Build Something
            <ArrowRight
              size={20}
              strokeWidth={3}
              style={{ marginLeft: "0.5rem" }}
            />
          </Link>
          <Link to="/projects" className="btn-secondary">
            View My Work
          </Link>
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
