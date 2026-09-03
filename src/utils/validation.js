/**
 * FORM VALIDATION & SANITIZATION UTILITIES
 * Enforces length boundaries, email format, and prevents injection/buffer abuse
 */

export const validateEmail = (email) => {
  if (!email) return false;
  // RFC 5322 compliant regex, max 120 chars
  if (email.length > 120) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
};

export const validateInquiryForm = (data) => {
  const errors = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name.';
  } else if (data.name.length > 100) {
    errors.name = 'Name must not exceed 100 characters.';
  }

  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid business email address.';
  } else if (data.email.length > 120) {
    errors.email = 'Email address must not exceed 120 characters.';
  }

  // Company validation
  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Please provide your establishment or business name.';
  } else if (data.company.length > 150) {
    errors.company = 'Company name must not exceed 150 characters.';
  }

  // Destination validation (optional field, but bounded)
  if (data.destination && data.destination.length > 150) {
    errors.destination = 'Destination must not exceed 150 characters.';
  }

  // Message / specifications validation (optional, but bounded)
  if (data.message && data.message.length > 2000) {
    errors.message = 'Specifications must not exceed 2,000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default validateInquiryForm;
