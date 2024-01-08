"use client";
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "./query/vehicleQuery";
import { useEffect, useState } from "react";
import Filter from "./filter/page";
import FeedsPanel from "./[feeds-panel]/page";
import ImageSlider from "./imageSlider/ImageSlider";

export default function Home() {
  const { loading, error, data } = useQuery(GET_VEHICLES);
  const images = [
    "085eac400e834ed15f5b.jpg",
    "09ea6f2ff6e182354bd8.jpg",
    "0bac4f94d2ec5adff41d.jpg",
  ];

  return (
    <main className="h-dvh overflow-y-scroll overflow-x-hidden customeScroll">
      <ImageSlider images={images} />
      <Filter />

      <div className="flex items-center justify-center w-300px text-black py-10 sm:w-fit m-auto">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap pr-5 text-[#405560]">
          Perfect Ride that Sparks Your Dreams!
        </h1>
      </div>

      <section className="home-container justify-center text-gray-600 body-font flex  m-auto 2xl:w-[70vw] gap-3">
        <FeedsPanel />
      </section>
    </main>
  );
}
