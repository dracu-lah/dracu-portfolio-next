import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Contact from "./components/ContactForm";
import { GithubIcon, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex  flex-col lg:flex-row md:gap-x-10 lg:justify-around justify-center items-center min-h-screen"
    >
      <div className="text-center text-primary">
        <h1 className="text-5xl py-10  lg:text-6xl font-bold">CONTACT ME</h1>
        <p className="px-2">I have got just what you need. Let&apos;s talk</p>
        <div className="flex flex-col justify-center items-center pt-4">
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <p className="flex gap-x-2">
              <EnvelopeIcon className="w-5" />
              nevilkrishna@gmail.com
            </p>

            <p className="flex gap-x-2">
              <Linkedin className="w-5" />
              <a
                href="https://linkedin.com/in/nevil-krishna-k-77170222a"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default ContactSection;
