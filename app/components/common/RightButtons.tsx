"use client";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const RightButtons = () => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (progress) => {
    if (progress > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  const navItems = [
    { id: "", href: "#", label: "/" },
    { id: "about", href: "#about", label: "About" },
    { id: "skills", href: "#skills", label: "Skills" },
    { id: "portfolio", href: "#portfolio", label: "Portfolio" },
    { id: "contact", href: "#contact", label: "Contact" },
  ];

  return (
    <div className=" fixed top-[40vh]  right-10 z-50">
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: show ? 0 : 200 }}
        className="hidden md:flex gap-2   flex-col  "
      >
        {navItems.map((item, idx) => (
          <a key={item.label} href={item.href}>
            <Button className="text-xs w-full ">
              <span className=""> {item.label}</span>
            </Button>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default RightButtons;
