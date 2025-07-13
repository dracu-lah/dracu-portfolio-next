"use client";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import ContactFormProvider from "./components/FormProvider";
import InputField from "./components/InputField";
import TextareaField from "./components/TextareaField";
import { sendContactEmail } from "@/services/email";
import { ContactFormData } from "@/lib/validation/contact-schema";

const ContactForm = () => {
  const [status, setStatus] = useState<boolean | null>(null);
  const { handleSubmit, reset } = useFormContext<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus(null);
    const success = await sendContactEmail(data);
    setStatus(success);
    if (success) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-10 flex flex-col gap-y-6 text-sm   md:text-xl w-full md:max-w-[40rem] px-4 mb-14 md:mb-0"
      autoComplete="off"
    >
      {status === true && (
        <span className="text-sm text-center text-green-800 p-2 bg-green-300">
          HAHA! Message has been sent successfully.
        </span>
      )}
      {status === false && (
        <span className="text-sm text-center text-red-800 p-2 bg-red-300">
          OOPS! Something Went Wrong.
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

      <input
        type="submit"
        value="Send Message"
        className="border-2 outline-none focus:bg-secondary active:bg-secondary hover:bg-secondary border-secondary p-2 rounded-lg text-primary cursor-pointer transition-colors duration-300"
      />
    </form>
  );
};

const WrappedContactForm = () => (
  <ContactFormProvider>
    <ContactForm />
  </ContactFormProvider>
);

export default WrappedContactForm;
