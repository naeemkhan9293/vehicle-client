"use client";
import Image from "next/image";
import ImageSlider from "./imageSlider/ImageSlider";
import Card from "./cards/page";
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "./query/vehicleQuery";
import { useState } from "react";
import Filter from "./filter/page";

export default function Home() {
  const { loading, error, data } = useQuery(GET_VEHICLES);
  const images = [
    "085eac400e834ed15f5b.jpg",
    "09ea6f2ff6e182354bd8.jpg",
    "0bac4f94d2ec5adff41d.jpg",
  ];

  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <ImageSlider images={images} />
      <Filter comStyle="relative bottom-16" />
      <section className="home-container text-gray-600 body-font flex overflow-x-scroll scroll-smooth snap-mandatory snap-x mt-11">
        {data?.getVehicles.map((item, index) => {
          return <Card key={index} items={item} />;
        })}
      </section>

      {/* parallax background */}
      <div
        className="parallax min-h-screen bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(http://localhost:4000/images/vehicle/085eac400e834ed15f5b.jpg)",
        }}
      ></div>

      <div className="h-96 bg-red-500 text-white text-3xl flex items-center justify-center">
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </main>
  );
}
