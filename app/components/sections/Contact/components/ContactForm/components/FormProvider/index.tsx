"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  contactSchema,
  ContactFormData,
} from "@/lib/validation/contact-schema";

const ContactFormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ContactFormProvider;
