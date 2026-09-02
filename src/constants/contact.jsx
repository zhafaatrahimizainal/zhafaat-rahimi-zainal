export const WHATSAPP_NUMBER = "6282216709879";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Zhafaat, I want to build my profile website and I'd like to discuss with you.";

export const getWhatsAppUrl = (message = DEFAULT_WHATSAPP_MESSAGE) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};