"use client";
import { useState } from "react";
import DropIcon from "../icons/DropIcon";

export default function CollapsibleContainer({ children, title, reactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  // bg-[#64748b]
  return (
    <>
      <div className="p-1">
        <button
          onClick={toggleCollapse}
          className=" h-7 text-nowrap text-white p-[0.2rem] w-full flex flex-row-reverse items-center gap-8 rounded overflow-hidden justify-between"
        >
          <span
            className={`w-4 block ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          >
            <DropIcon />
          </span>
          <ul className="flex gap-2 items-center">
            <li>{reactNode}</li>
            <li>{title}</li>
          </ul>
        </button>
      </div>
      <div
        className={`transition-all   ${
          isOpen ? "" : "max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
}
