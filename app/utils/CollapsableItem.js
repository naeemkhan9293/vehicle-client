"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import DropIcon from "../icons/DropIcon";

function CollapsableItem({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-auto mx-4 my-2 w-4/5 rounded-[4px] bg-custome-color-secondary">
      <div className="flex gap-3 flex-row-reverse items-center text-white  rounded-[4px] ">
        <button onClick={toggleCollapse} className="p-2">
          <span
            className={`w-4 block ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          >
            <DropIcon />
          </span>
        </button>
        <Link className="w-4/5 pl-3" href={`/?make=${title}`}>
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
              href={`/?model=${item}`}
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
