import { PDFDocument } from "pdf-lib";

export async function compressPDF(file) {
  const arrayBuffer = await file.arrayBuffer();

  const pdfDoc = await PDFDocument.load(arrayBuffer);

  // ini membuat ulang struktur PDF → sering mengurangi size signifikan
  const compressedPdfBytes = await pdfDoc.save({
    useObjectStreams: true,
  });

  return new File([compressedPdfBytes], "resume.pdf", {
    type: "application/pdf",
  });
}

export function validateResume(file) {
  if (file.type !== "application/pdf") {
    throw new Error("File harus PDF");
  }

  const maxSize = 5 * 1024 * 1024; // 5MB sebelum compress
  if (file.size > maxSize) {
    throw new Error("Ukuran maksimal 5MB");
  }
}