import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/lib/validation/contact-schema";

export async function sendContactEmail(
  data: ContactFormData,
): Promise<boolean> {
  const serviceId = "service_pk03a79";
  const templateId = "template_uz2gf3a";
  const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

  if (!serviceId || !templateId || !apiKey) return false;

  try {
    await emailjs.send(serviceId, templateId, data, apiKey);
    return true;
  } catch {
    return false;
  }
}
