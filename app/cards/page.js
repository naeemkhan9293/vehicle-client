"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Card({ items }) {
  const { StandardFeatures, images } = items;
  return (
    <div className="p-4 md:w-1/3 min-w-[320px] snap-start cursor-pointer">
      <div className="h-full border-2 border-gray-300  rounded-lg overflow-hidden">
        <div className="h-48 relative">
          <Image
            src={`http://localhost:4000/images/vehicle/${images[0]}`}
            className="-z-10 rounded-b-xl rounded-bl-xl object-cover object-center"
            fill
            alt="some"
          />
        </div>
        <div className="pt-5 px-5">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Specification
          </h2>
          <h1 className="title-font text-base font-medium text-gray-900 mb-3">
            {items?.year} {items?.make} {items?.model} {items?.engine}
          </h1>
          <h1 className="title-font  text-sm font-medium gap-1  text-gray-900 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 pb-[1px]"
            >
              <path
                fillRule="evenodd"
                d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
              />
            </svg>
            {items?.location}
          </h1>

          <h1 className="title-font  text-sm font-medium gap-1  text-gray-900 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-currency-dollar"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="#111827"
              fill="none"
              strokeLinecap="round"
              strokeinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
              <path d="M12 3v3m0 12v3" />
            </svg>

            {items.price}
          </h1>

          <div className="flex items-center flex-wrap pb-5">
            <Link
              href={`/vehicle-infromation/${1}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2 pt-[2px]"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
