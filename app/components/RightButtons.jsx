import Link from "next/link";
import React from "react";

const RightButtons = () => {
  return (
    <div className=" text-xs hidden md:block">
      <Link href="#hero" className=" rightButton bottom-[50vh] ">
        1
      </Link>
      <Link href="#about" className=" rightButton  bottom-[45vh] ">
        2
      </Link>
      <Link href="#skills" className="rightButton  bottom-[40vh] ">
        3
      </Link>
      <Link href="#portfolio" className="rightButton  bottom-[35vh] ">
        4
      </Link>
      <Link href="#contact" className=" rightButton  bottom-[30vh] ">
        5
      </Link>
    </div>
  );
};

export default RightButtons;
