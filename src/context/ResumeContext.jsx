import { createContext, useContext, useEffect, useState } from "react";
import {
  uploadResume,
  saveResumeURL,
  getResumeURL,
} from "../api/resumeApi";
import { supabase } from "../lib/supabaseClient";
import { useSite } from "./SiteContext";
import { compressPDF, validateResume } from "../utils/compressResume";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const { site } = useSite();

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
        setPreviewImage(data.value.previewURL);
      } catch (error) {
        console.error("Gagal load resume:", error.message);
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
      // validasi ukuran file < 5 MB
      validateResume(file);
      // compress
      console.log("compressing PDF...");
      const compressedFile = await compressPDF(file);
      console.log("Before:", file.size / 1024, "KB");
      console.log("After :", compressedFile.size / 1024, "KB");
      // 1️⃣ Upload file ke storage
      const { previewURL } = await uploadResume(file, site.id);
      setPreviewImage(previewURL);
      const resumeData = await saveResumeURL(previewURL, site.id);
      console.log("Success Upload", resumeData);
    } catch (err) {
      console.error(err);
      throw err; // 🔥 INI YANG PENTING
    } finally {
      setUploading(false);
    }
  };

  return (
    <ResumeContext.Provider value={{ previewImage, updateResume, uploading }}>
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
