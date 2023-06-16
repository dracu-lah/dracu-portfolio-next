import React from "react";
import "./Navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" p-5 md:p-8 flex justify-between  min-w-full z-50 sticky top-0 navbar bg-base-100  border-b border-b-slate-100/10 opacity-90 backdrop-filter backdrop-blur-2xl">
      <Link href="/" className="flex text-3xl font-bold gap-x-2 items-center ">
        <svg
          className="w-9 h-9"
          viewBox="0 0 90 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="6" y="10" width="35" height="52" fill="#000000"></rect>
          <path
            d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z"
            fill="aliceblue"
          ></path>
          <rect
            className="blinkit pulse faster opacity-0 "
            x="45"
            y="44"
            width="29"
            height="8"
            fill="#000000"
          ></rect>
        </svg>
        <h1 className="text-sm md:text-4xl ">DVLPR</h1>
      </Link>
      <div className="flex gap-x-2">
        <Link
          className="border-4  p-2 md:p-4  duration-300 text-xs md:text-sm font-bold bg-transparent hover:bg-white hover:text-black uppercase"
          href={"#contact"}
        >
          contact
        </Link>
        <Link
          className="border-4 gap-y-2  p-2 md:p-4  duration-300 text-xs md:text-sm flex font-bold bg-transparent hover:bg-white hover:text-black uppercase"
          href={
            "https://cloud.appwrite.io/v1/storage/buckets/648b82ed147445b54f1e/files/648b82fd4b2b31a272c0/view?project=648b8256bc833c7ec3e0&mode=admin"
          }
        >
          <span className=" hidden md:block">Download</span>Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
