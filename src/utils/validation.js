/**
 * FORM VALIDATION UTILITIES
 */

export const validateEmail = (email) => {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
};

export const validateInquiryForm = (data) => {
  const errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name.';
  }
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid business email address.';
  }
  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Please provide your establishment or business name.';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
