"use client";
import Image from "next/image";
import Link from "next/link";

export default function Card({ items  }) {
  return (
    <div className=" cursor-pointer  w-max max-w-72">
      <div className="h-full border-2 border-gray-300  rounded-lg overflow-hidden">
        <div className="h-48 relative">
          <Image
            src={`http://localhost:4000/images/vehicle/${items?.images[0]}`}
            className="-z-10  object-cover object-center"
            fill
            alt="some"
          />
        </div>
        <div className="pt-5 px-5">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Specification
          </h2>
          <h1 className="title-font text-base font-medium text-gray-900 mb-3">
            {items?.year} {items?.make} {items?.model}
          </h1>
          {/* ------------------------------------ */}
          <h1 className="title-font text-sm font-medium gap-1 text-gray-900 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enableBackground="new 0 0 50 50"
              height="15px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="15px"
              xmlSpace="preserve"
            >
              <rect fill="none" height="15" width="15" />
              <polyline
                fill="none"
                points="30,14 30,10   35,10 35,6 21,6 21,10 26,10 26,14 "
                stroke="#000000"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                fill="none"
                points="9,27 5,27 5,21   1,21 1,37 5,37 5,31 9,31 "
                stroke="#000000"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="  M45,20v5h-3v-8.157C42,15.826,41.189,15,40.191,15H19.99c-0.479,0-0.941,0.195-1.28,0.542L14,21h-3c-1,0-2,1-2,2v12  c0,1.018,1.002,2,2,2h3l4.712,5.461C19.051,42.806,19.511,43,19.99,43h12.855c0.479,0,0.939-0.194,1.278-0.539l7.346-7.482  c0.341-0.346,0.53-0.814,0.53-1.303V31h3v5h4V20H45z"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.0077"
              />
              <polygon points="32,28 24,39 27,30 22,30 27,20 32,20 27,28 " />
            </svg>
            {items?.engine}
          </h1>
          {/* ------------------------------------ */}
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

          {/* ------------------------------------ */}
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

            {items?.price}
          </h1>
          {/* ------------------------------------ */}

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
