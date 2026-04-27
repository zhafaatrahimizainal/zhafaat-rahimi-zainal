import { useState, useEffect } from "react";
import "./Navbar.css";
import AdminLoginModal from "./AdminLoginModal";
import { useAdmin } from "../context/AdminContext";
import ResumeButton from "./ResumeButton";
import { useSite } from "../context/SiteContext";
import Spinner from "./Spinner";
import { updateOwnerName } from "../api/siteService";
import OnelineText from "./OnelineText";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { isAdmin, logoutAdmin } = useAdmin();
  const { site, setSite, loadingSite } = useSite();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // DETEKSI SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const saveOwnerName = async (newName) => {
    const updatedData = await updateOwnerName(site.id, newName);
    setSite(updatedData);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <OnelineText
          name="logo"
          value={site?.owner_name || "My Website"}
          loading={loadingSite}
          onSave={saveOwnerName}
          as="h2"
          isAdmin={isAdmin}
          className="logo"
        />

        <div className="nav-right-container">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
          <ResumeButton />
          {/* <button className="resume-btn">Resume PDF</button> */}
        </div>

        {!isAdmin ? (
          <button className="itsme-btn" onClick={() => setOpenModal(true)}>
            It's me
          </button>
        ) : (
          <button className="itsme-btn" onClick={logoutAdmin}>
            Logout
          </button>
        )}

        <AdminLoginModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
