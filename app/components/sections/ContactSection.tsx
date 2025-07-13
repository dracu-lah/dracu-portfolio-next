import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import Contact from "../Contact";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row md:gap-x-10 lg:justify-around justify-center items-center min-h-screen"
    >
      <div className="text-center text-primary">
        <h1 className="text-5xl py-10 lg:text-6xl font-bold">CONTACT ME</h1>
        <p>I have got just what you need. Let&apos;s talk</p>
        <div className="flex flex-col justify-center items-center pt-4">
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <p className="flex gap-x-2">
              <PhoneIcon className="w-5" />
              <span>+91 9207932070</span>
            </p>
            <p className="flex gap-x-2">
              <EnvelopeIcon className="w-5" />
              nevilkrishna@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default ContactSection;
