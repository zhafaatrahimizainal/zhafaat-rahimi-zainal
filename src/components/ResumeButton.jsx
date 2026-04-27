import { useState } from "react";
import "./ResumeButton.css";
import { useResume } from "../context/ResumeContext";
import { useAdmin } from "../context/AdminContext";
import UploadResumeButton from "./UploadResumeButton";
import { getResumeSignedUrl } from "../api/resumeApi";
import { useSite } from "../context/SiteContext";

export default function ResumeButton() {
  const [showPreview, setShowPreview] = useState(false);
  const { isAdmin } = useAdmin();
  const {site} = useSite()
  const { previewImage } = useResume();

  // console.log(previewImage)

  const openResume =  async () => {
    try {
    const url = await getResumeSignedUrl(site.id);
    window.open(url, "_blank", "noopener,noreferrer");
  } catch (err) {
    alert("Resume belum tersedia");
    console.error(err);
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
