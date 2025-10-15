"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PropsWithChildren, useState, useEffect } from "react";

const Navbar = ({ children }: PropsWithChildren) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      transition={{ duration: 0.5 }}
      animate={{ y: 0 }}
      className={`flex justify-between items-center p-4 fixed min-w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg" : ""
      }`}
    >
      <a href="#" className="flex text-3xl font-bold gap-x-2 items-center">
        <svg
          className="size-9"
          viewBox="0 0 90 71"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="10"
            width="35"
            className="fill-primary"
            height="52"
          ></rect>
          <path
            className="fill-background"
            d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z"
          ></path>
          <rect
            className="animate-pulse fill-primary opacity-10"
            x="45"
            y="44"
            width="29"
            height="8"
          ></rect>
        </svg>
        <h1 className="text-sm md:text-4xl text-primary">DVLPR</h1>
      </a>
      <div className="flex gap-x-2">
        <a href={"#contact"}>
          <Button className="h-full">contact</Button>
        </a>
        {children}
      </div>
    </motion.nav>
  );
};

export default Navbar;
