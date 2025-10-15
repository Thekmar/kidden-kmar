// Helper utilities for formatting, validations, misc tasks

export function formatPhoneNumber(phone) {
  // Formats phone number as (XXX) XXX-XXXX
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function validateEmail(email) {
  // Simple regex email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function generateRandomId() {
  // Returns a short random ID string
  return Math.random().toString(36).substr(2, 9);
}
