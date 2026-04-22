import { createContext, useContext, useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const ResumeContext = createContext();

const generatePreview = async (pdfDataUrl) => {
  const pdf = await pdfjsLib.getDocument(pdfDataUrl).promise;
  const page = await pdf.getPage(1);

  const viewport = page.getViewport({ scale: 1.2 });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({
    canvasContext: context,
    viewport: viewport,
  }).promise;

  return canvas.toDataURL("image/png");
};

export function ResumeProvider({ children }) {
  const [resumeURL, setResumeURL] = useState("/resume.pdf");
  const [previewImage, setPreviewImage] = useState("/resumePreview.png");
  // cek apakah ada resume tersimpan di browser
  useEffect(() => {
    const savedResume = localStorage.getItem("resumePDF");
    const savedPreview = localStorage.getItem("resumePreview");

    if (savedResume) setResumeURL(savedResume);
    if (savedPreview) setPreviewImage(savedPreview);
  }, []);

  const updateResume = (file) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const base64 = reader.result;
      // generate thumbnail otomatis 🤯
      const thumbnail = await generatePreview(base64);

      localStorage.setItem("resumePDF", base64);
      localStorage.setItem("resumePreview", thumbnail);

      setResumeURL(base64);
      setPreviewImage(thumbnail);
    };

    reader.readAsDataURL(file);
  };

  return (
    <ResumeContext.Provider value={{ resumeURL, previewImage, updateResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
