import { useState } from "react";
import "./ResumeButton.css";
import { useResume } from "../context/ResumeContext";
import { useAdmin } from "../context/AdminContext";
import UploadResumeButton from "./UploadResumeButton";

export default function ResumeButton() {
  const [showPreview, setShowPreview] = useState(false);
  const { isAdmin } = useAdmin();
  const { resumeURL, previewImage } = useResume();

  const openResume = () => {
    const newTab = window.open("", "_blank"); // anti popup blocker

    try {
      // ambil base64 dari resumeURL (BUKAN localStorage)
      const base64Data = resumeURL.split(",")[1];

      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      const blob = new Blob([byteArray], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);

      newTab.location.href = blobUrl;

      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    } catch {
      newTab.document.write("Failed to open PDF");
    }
  };

  return (
    <div
      className="resume-wrapper"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      {isAdmin && <UploadResumeButton />}
      <button className="resume-btn" onClick={openResume}>
        Resume
      </button>

      {showPreview && (
        <div className="resume-popover">
          <img src={previewImage} alt="Resume Preview" />
          <p>View full PDF</p>
        </div>
      )}
    </div>
  );
}
