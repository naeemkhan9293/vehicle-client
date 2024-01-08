"use client";
import ImageSlider from "@/app/imageSlider/ImageSlider";
import React, { useEffect, useState } from "react";

export default function VehicleInformation() {
  const [arr, setArr] = useState([]);
  const dispData = () => {
    for (let i = 0; i < 10; i++) {
      setArr((prevI) => [...prevI, i]);
    }
  };

  useEffect(() => {
    dispData();
  }, []);

  return (
    <main className="flex flex-col gap-28">
      <ImageSlider data={{ images: "./mvac.jpg", category: "category" }} />
      <section className="flex flex-col gap-5 w-4/5 m-auto">
        {arr?.map((i, index) => {
          return (
            <div key={index} className="flex gap-2 bg-slate-300">
              <div className="w-7 h-4 bg-slate-500" />
              <div className="w-full h-4 bg-slate-500" />
            </div>
          );
        })}
      </section>
    </main>
  );
}
