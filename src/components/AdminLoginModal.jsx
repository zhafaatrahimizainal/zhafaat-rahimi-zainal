import "./AdminLoginModal.css"
import { useState, useEffect } from "react";
import { useAdmin } from "../context/AdminContext";
import { createPortal } from "react-dom";

export default function AdminLoginModal({ isOpen, onClose }) {
  const { loginAdmin } = useAdmin();
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

  if (!isOpen) return null;

  const handleLogin = () => {
    const success = loginAdmin(password);
    if (success) {
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
      <div 
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Hai Zhafaat</h2>

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

  return createPortal(
    modalContent, document.getElementById("modal-root")
  )
}