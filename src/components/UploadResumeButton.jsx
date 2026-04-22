import { useRef } from "react";
import { useResume } from "../context/ResumeContext";
import { PencilLine } from "lucide-react";
import "./UploadResumeButton.css";

export default function UploadResumeButton() {
  const inputRef = useRef();
  const { updateResume } = useResume();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF allowed!");
      return;
    }

    updateResume(file);
  };

  return (
    <>
      <button
        className="edit-resume-btn"
        onClick={() => inputRef.current.click()}
      >
        <PencilLine size={20} />
      </button>

      <input
        type="file"
        accept="application/pdf"
        ref={inputRef}
        onChange={handleFile}
        hidden
      />
    </>
  );
}
