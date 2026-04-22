// About.jsx
import { useState, useEffect, useRef } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import "./About.css";

const projects = [
  {
    title: "PyJogjaMeetUp",
    desc: "Group Discussion Participant",
    img: "PyJogjaMeetUp.PNG",
  },
  {
    title: "MEI Seminar & Discussion",
    desc: "Served as Moderator at the MEI Seminar and Discussion",
    img: "MEISeminar&Discussion.jpg",
  },
  {
    title: "DIKE Student Gathering",
    desc: "Committee Member, DIKE Student Gathering",
    img: "DIKEStudentGathering.jpg",
  },
  {
    title: "Finance Tracker",
    desc: "Track your expenses smartly",
    img: "https://via.placeholder.com/250x150",
  },
  {
    title: "AI Dashboard",
    desc: "Analytics powered by AI",
    img: "https://via.placeholder.com/250x150",
  },
];

function About() {
  const [index, setIndex] = useState(0);
  const visibleCards = 1; // jumlah card terlihat

  const maxIndex = projects.length - visibleCards;

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="about-container">
      {/* LEFT */}
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I am pursuing a science education with a concentration in electronics physics and instrumentation, learning to become a lecturer.I try to earn money by creating landing pages and personal websites, and I aspire to explore many places with beautiful natural scenery.
        </p>

        <h4>Key Skills:</h4>
        <div className="skills">
          <span>Electronics & Instrumentation</span>
          <span>IoT</span>
          <span>Web Developer</span>
          <span>React.js</span>
          <span>Node.js</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        <h2>Experience</h2>

        <div className="carousel-wrapper">
          <button className="arrow-left" onClick={prevSlide}>
            <ChevronsLeft size={20} />
          </button>

          <div className="carousel">
            <div
              className="track"
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {projects.map((p, i) => {
                const isActive = i === index;
                return (
                  <div
                    className={`exp-card ${isActive ? "active" : ""}`}
                    key={i}
                  >
                    <img
                      src={new URL(`../assets/${p.img}`, import.meta.url).href}
                      loading="lazy"
                      alt="project"
                    />
                    {/* LEFT DARK GRADIENT */}
                    {/* <div className="overlay-left" /> */}

                    {/* RIGHT FADE (for overflow hint) */}
                    <div className="overlay-right" />

                    {/* TEXT */}
                    <div className="exp-text">
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="arrow-right" onClick={nextSlide}>
            <ChevronsRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
