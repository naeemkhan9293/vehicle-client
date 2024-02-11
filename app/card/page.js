"use client";
import Image from "next/image";
import Link from "next/link";
import EngineIcon from "../icons/EngineIcon";
import LocationIcon from "../icons/LocationIcon";
import PriceIcon from "../icons/PriceIcon";
import ArrowDirRightIcon from "../icons/ArrowDirRightIcon";
import EyetIcon from "../icons/EyetIcon";
import MsgIcon from "../icons/MsgIcon";

export default function Card({ items }) {
  return (
    <div className=" cursor-pointer w-80">
      <div className="h-full border-2 border-gray-300  rounded-md overflow-hidden">
        {/* image container */}
        <div className="h-48 w-full relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_HOST}/images/vehicle/${items?.images[0]}`}
            className="h-36 object-cover object-center"
            fill
            alt="vehicle-image"
          />
        </div>
        {/* vehicle information */}
        <div className="pt-5 px-5">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Specification
          </h2>
          <h1 className="title-font text-base font-medium text-gray-900 mb-3">
            {items?.year} {items?.make} {items?.model}
          </h1>
          {/* ------------------------------------ */}
          <h1 className="title-font text-sm font-medium gap-1 text-gray-900 mb-3 flex items-center">
            <span className="w-4">
              <EngineIcon />
            </span>
            {items?.engine}
          </h1>
          {/* ------------------------------------ */}
          <h1 className="title-font  text-sm font-medium gap-1  text-gray-900 mb-3 flex items-center">
            <span className="w-4">
              <LocationIcon />
            </span>
            {items?.location}
          </h1>

          {/* ------------------------------------ */}
          <h1 className="title-font  text-sm font-medium gap-1  text-gray-900 mb-3 flex items-center">
            <span className="w-4">
              <PriceIcon />
            </span>

            {items?.price}
          </h1>
          {/* ------------------------------------ */}
          {/* Bottom part of card */}
          <div className="flex items-center gap-2 flex-wrap justify-between pb-5">
            <Link
              href={`/vehicle-infromation/${items?.id}/`}
              className="text-indigo-500 flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <span className="w-4 ml-1 ">
                <ArrowDirRightIcon />
              </span>
            </Link>
            <div className=" flex ">
              <span className="w-4">
                <EyetIcon />
              </span>
              <span>1.2K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
