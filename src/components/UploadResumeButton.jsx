import { useRef, useState } from "react";
import { useResume } from "../context/ResumeContext";
import { PencilLine, Check, Loader2, X } from "lucide-react";
import "./UploadResumeButton.css";

export default function UploadResumeButton() {
  const inputRef = useRef();
  const { updateResume } = useResume();

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setStatus("error");
      resetStatus();
      return;
    }

    try {
      setStatus("loading");
      await updateResume(file);

      setStatus("success");
      resetStatus();
    } catch (err) {
      console.error("ini muncul kah", err);
      setStatus("error");
      resetStatus();
    }

    e.target.value = null;
  };

  const resetStatus = () => {
    setTimeout(() => setStatus("idle"), 2000);
  };

  const renderIcon = () => {
    switch (status) {
      case "loading":
        return <Loader2 size={20} className="spin" />;
      case "success":
        return <Check size={20} strokeWidth={3.5} />;
      case "error":
        return <X size={20} strokeWidth={3.5} />;
      default:
        return <PencilLine size={20} />;
    }
  };

  return (
    <>
      <button
        className={`edit-resume-btn ${status}`}
        onClick={() => inputRef.current.click()}
      >
        {renderIcon()}
      </button>

      <input
        type="file"
        accept="application/pdf"
        ref={inputRef}
        onChange={handleFileChange}
        hidden
      />
    </>
  );
}