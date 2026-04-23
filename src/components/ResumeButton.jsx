import { useState } from "react";
import "./ResumeButton.css";
import { useResume } from "../context/ResumeContext";
import { useAdmin } from "../context/AdminContext";
import UploadResumeButton from "./UploadResumeButton";

export default function ResumeButton() {
  const [showPreview, setShowPreview] = useState(false);
  const { isAdmin } = useAdmin();
  const { resumeURL, previewImage } = useResume();

  // console.log(previewImage)

  const openResume = () => {
    if (!resumeURL) {
      alert("Resume belum tersedia");
      return;
    }
    console.log(resumeURL);

    window.open(resumeURL, "_blank", "noopener,noreferrer");
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
