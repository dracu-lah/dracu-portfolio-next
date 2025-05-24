"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY
      )
      .then(
        function (response) {
          setStatus(true);
        },
        function (error) {
          setStatus(false);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" pt-10  flex flex-col gap-y-6 text-sm md:text-xl max-w-[90vh] mb-14 md:mb-0"
      autoComplete="off"
    >
      {status === true && (
        <span className="text-sm text-center text-green-800 p-2 bg-green-300">
          HAHA! Message has been sent sucessfully.
        </span>
      )}
      {status === false && (
        <span className="text-sm text-center text-red-800 p-2 bg-red-300">
          OOPS! Something Went Wrong.
        </span>
      )}
      <input
        className="p-2 rounded-lg outline-none border-2 focus:border-sky-300  duration-300 bg-transparent"
        {...register("user_name")}
        placeholder="Enter Name"
      />
      <input
        type="number"
        {...register("user_phno")}
        className="p-2 rounded-lg outline-none  border-2 focus:border-sky-300  duration-300  bg-transparent"
        placeholder="Enter Phone Number"
      />
      <input
        type="email"
        {...register("user_email")}
        className="p-2 rounded-lg outline-none  border-2 focus:border-sky-300  duration-300  bg-transparent"
        placeholder="Enter Email"
      />
      <textarea
        placeholder="Type your Query ..."
        className="p-2 rounded-lg outline-none  border-2 focus:border-sky-300  duration-300  bg-transparent"
        cols="30"
        rows="10"
        {...register("user_message")}
      ></textarea>

      <input type="submit" className="border-2 p-2 text-white cursor-pointer" />
    </form>
  );
};

export default Contact;
