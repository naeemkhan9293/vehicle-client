"use client";
import Link from "next/link";
import { useRef, useState } from "react";

function CollapsableItem({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-auto mx-4 my-2 w-4/5 rounded-[4px]  bg-[#273748]">
      <div className="flex gap-3 items-center text-white  rounded-[4px] "
      >
        <button onClick={toggleCollapse} className="p-2">
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
        </button>
        <Link className="w-4/5" href={`/feeds-panel?make=${title}`}>
          {title}
        </Link>
      </div>
      <div
        className={`transition-all overflow-hidden flex flex-col text-white  ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {items?.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/feeds-panel?model=${item}`}
              className="px-3 py-[2px] mx-4 mt-3 last:mb-3 hover:bg-white hover:text-black rounded-[4px]  flex-1"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CollapsableItem;
