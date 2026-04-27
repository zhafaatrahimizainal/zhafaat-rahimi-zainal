export const getCurrentSlug = () => {
  const path = window.location.pathname;

  // hapus slash pertama "/"
  const slug = path.split("/")[1];

  // fallback saat buka root "/"
  // if (!slug) return "zhafaat-rahimi-zainal"; 
  // sementara default ke site kamu biar gampang dev

  return slug;
};