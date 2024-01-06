"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import countries from "@/app/navbar/countries.json";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { usePathname } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_MAKEMODEL } from "../query/vehicleQuery";
import { contextState } from "../context";

export default function Navbar() {
  const { loading, error, data } = useQuery(GET_MAKEMODEL);
  const { asideToggle, setAsideToggle } = contextState();
  const hamClick = () => {
    asideToggle ? setAsideToggle(false) : setAsideToggle(true);
  };

  const capitalizedStr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const pathName = usePathname();

  return (
    <>
      <header className="fixed z-[1] bg-[#405560] transition duration-1000 bg-opacity-70z-50">
        <div className="text-white w-screen  justify-around z-50 shadow-sm flex items-center ">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 "
          >
            <Image src={Logo} width={100} alt="kjk" className="invert-[1]" />
            <span className="ml-3 text-xl text-white">Vehicle Web</span>
          </Link>
          <nav className="flex gap-4">
            <span>Hello</span>
            <span>World</span>
          </nav>

          {/* --------Hamburger---------- */}
          <button
            onClick={hamClick}
            className="inline-flex items-center text-black  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
