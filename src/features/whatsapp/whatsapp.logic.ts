/**
 * WhatsApp feature logic.
 * Pure functions for building WhatsApp URLs.
 */

/**
 * Builds a WhatsApp URL with the specified phone number and message.
 * Uses the universal WhatsApp URL format compatible with desktop and mobile.
 * 
 * @param phoneNumber - WhatsApp phone number (format: country code + number, e.g., "5491123456789").
 * @param message - Message text to pre-fill (will be URL encoded).
 * @returns Complete WhatsApp URL.
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
