/**
 * WHATSAPP CONCIERGE URL BUILDER
 * Generates an elegant, pre-formatted message payload for international B2B procurement inquiries
 */

export const normalizePhoneNumber = (rawNumber = '') => {
  let cleaned = String(rawNumber).replace(/\D/g, '');
  if (!cleaned) return '6289669241131'; // Official Essence Indonesia Trade Desk
  
  // If number starts with 0 (e.g. 08123456789), convert to Indonesian country code 628...
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  
  return cleaned;
};

export const generateWhatsAppUrl = ({
  phoneNumber,
  brandName = 'Essence Indonesia',
  formData = {}
}) => {
  const cleanPhone = normalizePhoneNumber(phoneNumber);
  
  if (!formData.name && !formData.company) {
    const defaultMsg = `Hello ${brandName} Trade Desk, I would like to inquire about direct export sourcing for Indonesian Vanilla (Beans & Value-Added Derivatives).`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines = [
    `*GLOBAL SOURCING INQUIRY — ${brandName.toUpperCase()}*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `*Contact Name:* ${formData.name || 'Not provided'}`,
    `*Company / Establishment:* ${formData.company || 'Not provided'}`,
    `*Work Email:* ${formData.email || 'Not provided'}`,
    `*Target Commodity:* ${formData.commodity || formData.inquiryType || 'Indonesian Vanilla'}`,
    formData.destination ? `*Destination Country / Port:* ${formData.destination}` : null,
    formData.incoterms ? `*Preferred Incoterms:* ${formData.incoterms}` : null,
    formData.volume ? `*Estimated Volume:* ${formData.volume}` : null,
    formData.message ? `*Specific Requirements:* ${formData.message}` : null,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via Essence Indonesia Digital Trade Concierge_`
  ].filter(Boolean);

  const textPayload = lines.join('\n');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textPayload)}`;
};

export default generateWhatsAppUrl;
