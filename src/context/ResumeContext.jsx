import { createContext, useContext, useEffect, useState } from "react";
import { uploadResume, saveResumeURL, getResumeURL } from "../api/resumeApi";
import { supabase } from "../lib/supabaseClient";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeURL, setResumeURL] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // load resume saat app start
  useEffect(() => {
    const loadResume = async () => {
      const resumeData = await getResumeURL();
      
      if (resumeData) {
        console.log("📄 Resume loaded from DB");
        setResumeURL(resumeData.value.fileURL);
        setPreviewImage(resumeData.value.previewURL);
      } else {
        console.log("⚠️ No resume found");
      }
    };

    loadResume();
  }, []);

  // fungsi upload resume (dipakai admin)
  const updateResume = async (file) => {
    try {
      if (!file) return;

      setUploading(true);
      console.log("📤 Uploading resume...");

      // 1️⃣ Upload file ke storage
      const { fileURL, previewURL } = await uploadResume(file);
      await saveResumeURL(fileURL, previewURL);
      console.log("Success Upload", previewURL);
      setResumeURL(fileURL);
      setPreviewImage(previewURL)
    } catch (err) {
      console.error(err);
      throw err; // 🔥 INI YANG PENTING
    } finally {
      setUploading(false);
    }
  };

  return (
    <ResumeContext.Provider
      value={{ resumeURL, previewImage, updateResume, uploading }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
