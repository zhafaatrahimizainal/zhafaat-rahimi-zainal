import { createContext, useContext, useEffect, useState } from "react";
import { uploadResume, saveResumeURL, getResumeURL } from "../api/resumeApi";
import { supabase } from "../lib/supabaseClient";
import { useSite } from "./SiteContext";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const { site } = useSite();

  const [resumeURL, setResumeURL] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // load resume saat app start
  useEffect(() => {
    if (!site) return;

    const loadResume = async () => {
      try {
        const data = await getResumeURL(site.id);  
        if (!data) {
          console.log("⚠️ Resume belum ada");
          return;
        }
  
        console.log("📄 Resume loaded for site:", site.slug);
  
        setResumeURL(data.value.fileURL);
        setPreviewImage(data.value.previewURL);
        
      } catch (error) {
        console.error("Gagal load resume:", error.message)
      }
    };

    loadResume();
  }, [site]);

  // fungsi upload resume (dipakai admin)
  const updateResume = async (file) => {
    if (!file || !site) return;
    try {
      setUploading(true);
      console.log("📤 Uploading resume for:", site.slug);

      // 1️⃣ Upload file ke storage
      const { fileURL, previewURL } = await uploadResume(file, site.template_theme, site.id);
      const resumeData = await saveResumeURL(fileURL, previewURL, site.id);
      setResumeURL(fileURL);
      setPreviewImage(previewURL);
      console.log("Success Upload", resumeData);
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
