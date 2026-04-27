import "./AdminLoginModal.css";
import { useState, useEffect } from "react";
import { useAdmin } from "../context/AdminContext";
import { createPortal } from "react-dom";
import { useSite } from "../context/SiteContext";

export default function AdminLoginModal({ isOpen, onClose }) {
  const { site, loadingSite } = useSite();
  const { loginAdmin, setIsAdmin } = useAdmin();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ===== Close saat tekan ESC =====
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    // ===== LOCK SCROLL HALAMAN =====
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);

      // ===== BALIKKAN SCROLL SAAT MODAL TUTUP =====
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || loadingSite || !site) return null;

  const firstName = site.owner_name.split(" ")[0];
  const displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  // if (!isOpen) return null;

  const handleLogin = async () => {
    const success = await loginAdmin(password);
    if (success) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      onClose();
      setPassword("");
      setError("");
    } else {
      setError("it's wrong, who is this?");
    }
  };

  const modalContent = (
    // ===== Klik area gelap = close =====
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation supaya klik dalam box tidak close */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Hai {displayName}</h2>

        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          autoFocus
        />

        <button onClick={handleLogin}>Login</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById("modal-root"));
}
