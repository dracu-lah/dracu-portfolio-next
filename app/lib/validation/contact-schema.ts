import { z } from "zod";

export const contactSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_phno: z.string().regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  user_email: z.email("Invalid email address"),
  user_message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
