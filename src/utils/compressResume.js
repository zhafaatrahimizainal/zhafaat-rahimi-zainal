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