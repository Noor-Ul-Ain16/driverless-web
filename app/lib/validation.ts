import { z } from "zod";

/**
 * Remove CR/LF (and collapse surrounding whitespace) so user-supplied values
 * cannot inject additional headers when interpolated into an email subject,
 * `from` display name, or any other header field.
 */
export function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Escape the five HTML-significant characters so user input is safe to
 * interpolate into an HTML email body (no markup / script injection).
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const name = z.string().trim().min(1, "Required").max(100);
const email = z
  .string()
  .trim()
  .max(200)
  .regex(emailRegex, "Invalid email address");
const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

export const contactSchema = z.object({
  firstName: name,
  lastName: name,
  email,
  phone: optionalText(50),
  message: z.string().trim().min(1, "Required").max(5000),
});

export const sponsorshipSchema = z.object({
  firstName: name,
  lastName: name,
  email,
  company: z.string().trim().min(1, "Required").max(200),
  phone: optionalText(50),
  jobTitle: optionalText(200),
  interests: z.array(z.string().trim().max(200)).max(50).optional().default([]),
  message: optionalText(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type SponsorshipInput = z.infer<typeof sponsorshipSchema>;
