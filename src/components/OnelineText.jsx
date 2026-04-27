import { useEffect, useRef, useState } from "react";
import { PencilLine, Check, X } from "lucide-react";
import Spinner from "./Spinner";
import "./OnelineText.css";

export default function OnelineText({
  name,
  value,
  onSave,
  as: Tag = "span",
  className = "",
  isAdmin = false,
  loading = false,
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const [status, setStatus] = useState("idle");
  const inputRef = useRef(null);

  useEffect(() => {
    setText(value || "");
  }, [value]);

  // autofocus saat edit
  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const startEdit = () => {
    if (!isAdmin) return;
    setEditing(true);
  };

  const cancelEdit = () => {
    setText(value);
    setEditing(false);
    setStatus("idle");
  };

  const handleSave = async () => {
    if (!text.trim()) return;

    try {
      setStatus("loading");
      await onSave(text);

      setStatus("success");
      setEditing(false);

      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") cancelEdit();
  };

  if (loading) {
    return (
      <div className={`editable-wrapper ${className}`}>
        <Spinner size={20} />
      </div>
    );
  }

  const renderIcon = () => {
    switch (status) {
      case "loading":
        return <Spinner size={16} />;
      case "success":
        return <Check size={16} className="success" strokeWidth={3} />;
      case "error":
        return <X size={16} className="error" strokeWidth={3} />;
      default:
        return <PencilLine size={16} />;
    }
  };

  return (
    <div className="editable-wrapper">

      {/* TOOLBAR */}
      {isAdmin && (
        <div className="edit-toolbar">
          {!editing ? (
            <button className={`edit-icon ${status == "idle" ? "idle" : ""}`} onClick={startEdit}>
              {renderIcon()}
            </button>
          ) : (
            <>
              <button className="save-btn" onClick={handleSave}>
                <Check size={16} strokeWidth={3} />
              </button>

              <button className="cancel-btn" onClick={cancelEdit}>
                <X size={16} strokeWidth={3} />
              </button>
            </>
          )}
        </div>
      )}

      {/* TEXT / INPUT */}
      {editing ? (
        <input
          ref={inputRef}
          className={`editable-input ${className}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <Tag className={className}>{text}</Tag>
      )}
    </div>
  );
}