"use client";
import { useState } from "react";

export default function CollapsibleContainer({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-1">
        <button
          onClick={toggleCollapse}
          className="bg-blue-500 h-7 text-nowrap text-white p-[0.2rem] w-full flex items-center gap-8 rounded overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <span>{title}</span>
        </button>
      </div>
      <div
        className={`transition-all overflow-y-hidden customeScroll ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
