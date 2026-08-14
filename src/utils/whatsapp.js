/**
 * WHATSAPP CONCIERGE URL BUILDER
 * Generates an elegant, pre-formatted message payload for B2B procurement inquiries
 */

export const normalizePhoneNumber = (rawNumber = '') => {
  let cleaned = String(rawNumber).replace(/\D/g, '');
  if (!cleaned) return '6281234567890'; // Safe default fallback
  
  // If number starts with 0 (e.g. 08123456789), convert to Indonesian country code 628...
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  
  return cleaned;
};

export const generateWhatsAppUrl = ({
  phoneNumber,
  brandName = 'SVARNA',
  formData = {}
}) => {
  const cleanPhone = normalizePhoneNumber(phoneNumber);
  
  if (!formData.name && !formData.company) {
    const defaultMsg = `Hello ${brandName} Concierge, I would like to inquire about sourcing your premium Indonesian vanilla beans.`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines = [
    `*Inquiry for ${brandName} Vanilla Sourcing*`,
    `----------------------------------------`,
    `*Name:* ${formData.name || 'Not provided'}`,
    `*Company / Establishment:* ${formData.company || 'Not provided'}`,
    `*Email:* ${formData.email || 'Not provided'}`,
    `*Inquiry Type:* ${formData.inquiryType || 'Gourmet Sourcing'}`,
    formData.volume ? `*Estimated Volume:* ${formData.volume}` : null,
    formData.message ? `*Message:* ${formData.message}` : null,
    `----------------------------------------`,
    `_Sent via ${brandName} Digital Concierge_`
  ].filter(Boolean);

  const textPayload = lines.join('\n');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textPayload)}`;
};

export default generateWhatsAppUrl;
