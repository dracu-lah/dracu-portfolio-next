"use client";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ContactFormProvider from "./components/FormProvider";
import InputField from "./components/InputField";
import TextareaField from "./components/TextareaField";
import { sendContactEmail } from "@/services/email";
import { ContactFormData } from "@/lib/validation/contact-schema";

const ContactForm = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null,
  );
  const { handleSubmit, reset } = useFormContext<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const success = await sendContactEmail(data);
      if (success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Auto-clear status after 3 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-10 flex flex-col gap-y-6 text-sm md:text-xl w-full md:max-w-[40rem] px-4 mb-14 md:mb-0"
      autoComplete="off"
    >
      {status === "success" && (
        <span className="text-sm text-center text-green-800 p-2 bg-green-300">
          Message sent successfully.
        </span>
      )}
      {status === "error" && (
        <span className="text-sm text-center text-red-800 p-2 bg-red-300">
          Something went wrong.
        </span>
      )}

      <InputField name="user_name" placeholder="Enter Name" />
      <InputField
        name="user_phno"
        placeholder="Enter Phone Number"
        type="tel"
      />
      <InputField name="user_email" placeholder="Enter Email" type="email" />
      <TextareaField name="user_message" placeholder="Type your Query ..." />

      <button
        type="submit"
        disabled={status === "loading"}
        className={`border-2 outline-none border-secondary p-2 rounded-lg text-primary cursor-pointer transition-colors duration-300 
          ${status == "loading" ? "bg-white/5 cursor-not-allowed" : "hover:bg-secondary focus:bg-secondary active:bg-secondary"}`}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

const WrappedContactForm = () => (
  <ContactFormProvider>
    <ContactForm />
  </ContactFormProvider>
);

export default WrappedContactForm;
