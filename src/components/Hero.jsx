import "./Hero.css";

export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">

      {/* LEFT */}
      <div className="hero-left">
        <h1>Zhafaat Rahimi Zainal</h1>

        <p className="hero-subtitle">
          Transforming Ideas into Digital Experiences |
          Full-Stack Developer & UI/UX Enthusiast.
        </p>

        <p className="hero-desc">
          Building innovative web solutions with passion and precision.
          Let's create something extraordinary.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => scrollToSection("portfolio")}
          >
            Explore My Work
          </button>

          <button
            className="btn-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img src="/profile.png" alt="profile" />
      </div>

    </div>
  );
}