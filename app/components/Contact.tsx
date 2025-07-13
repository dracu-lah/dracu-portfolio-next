"use client";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the form data interface
interface ContactFormData {
  user_name: string;
  user_phno: string;
  user_email: string;
  user_message: string;
  [key: string]: string; // Index signature for EmailJS compatibility
}

// Define the status type
type SubmissionStatus = boolean | null;

const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmissionStatus>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data: ContactFormData) => {
    // Reset status when submitting
    setStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

    // Type guard for environment variables
    if (!serviceId || !templateId || !apiKey) {
      console.error("EmailJS configuration is missing");
      setStatus(false);
      return;
    }

    emailjs.send(serviceId, templateId, data, apiKey).then(
      (response: EmailJSResponseStatus) => {
        console.log("Email sent successfully:", response);
        setStatus(true);
        reset(); // Clear the form on success
      },
      (error: EmailJSResponseStatus) => {
        console.error("Email sending failed:", error);
        setStatus(false);
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-10 flex flex-col gap-y-6 text-sm md:text-xl max-w-[90vh] mb-14 md:mb-0"
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

      <input
        className="p-2 rounded-lg outline-none border-2 focus:border-foreground duration-300 bg-transparent"
        {...register("user_name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters",
          },
        })}
        placeholder="Enter Name"
      />
      {errors.user_name && (
        <span className="text-red-500 text-sm">{errors.user_name.message}</span>
      )}

      <input
        type="tel"
        {...register("user_phno", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9+\-\s()]+$/,
            message: "Please enter a valid phone number",
          },
        })}
        className="p-2 rounded-lg outline-none border-2 focus:border-foreground duration-300 bg-transparent"
        placeholder="Enter Phone Number"
      />
      {errors.user_phno && (
        <span className="text-red-500 text-sm">{errors.user_phno.message}</span>
      )}

      <input
        type="email"
        {...register("user_email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
        })}
        className="p-2 rounded-lg outline-none border-2 focus:border-foreground duration-300 bg-transparent"
        placeholder="Enter Email"
      />
      {errors.user_email && (
        <span className="text-red-500 text-sm">
          {errors.user_email.message}
        </span>
      )}

      <textarea
        placeholder="Type your Query ..."
        className="p-2 rounded-lg outline-none border-2 focus:border-foreground duration-300 bg-transparent"
        cols={30}
        rows={10}
        {...register("user_message", {
          required: "Message is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
        })}
      />
      {errors.user_message && (
        <span className="text-red-500 text-sm">
          {errors.user_message.message}
        </span>
      )}

      <input
        type="submit"
        value="Send Message"
        className="border-2 p-2 text-white cursor-pointer  hover:border-foreground transition-colors duration-300"
      />
    </form>
  );
};

export default Contact;
