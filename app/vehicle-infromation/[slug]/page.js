"use client";
import ImageSlider from "@/app/imageSlider/ImageSlider";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GETVEHICLE_DETAIL } from "../../query/vehicleQuery";

export default function VehicleInformation({ params }) {
  const { loading, error, data } = useQuery(GETVEHICLE_DETAIL, {
    variables: { vehicleId: params?.slug },
  });

  return (
    <main className="">
      {/* Vehicle images */}
      {data?.getVehicle?.images && (
        <ImageSlider images={data?.getVehicle?.images} />
      )}

      <section className="px-4 mt-8">
        {/* Vehicle information */}
        <div className="container bg-orange-400 max-w-[40rem] text-gray-900  m-auto mb-3 overflow-x-auto">
          <span className="p-2 bg-[#373a2c] text-white block w-[40rem]">
            <h1 className="">Specification</h1>
          </span>
          {data?.getVehicle && (
            <ul className="text-xs grid grid-cols-4 w-[40rem]">
              {Object.entries(data?.getVehicle)
                .filter(
                  ([key]) =>
                    key !== "StandardFeatures" &&
                    key !== "id" &&
                    key !== "images" &&
                    key !== "__typename"
                )
                .map(([key, value], index) => (
                  <li
                    key={index}
                    className="w-40 flex justify-between border border-solid p-2"
                  >
                    <span>{key}</span>
                    <span>{value}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {/* Vehicle standrad features */}
        <div className="container bg-orange-400 text-gray-900  m-auto mb-3 overflow-x-auto max-w-[40rem]">
          <span className="p-2 bg-[#373a2c] text-white block w-[40rem]">
            <h1 className="">Standard Features</h1>
          </span>
          {data?.getVehicle?.StandardFeatures && (
            <ul className="text-xs grid grid-cols-4 w-[40rem]">
              {Object.entries(data?.getVehicle?.StandardFeatures)
                .filter(([key, value]) => value && value !== "StandardFeatures")
                .map(([key, value], index) => (
                  <li
                    key={index}
                    className="w-40 flex justify-between border border-solid p-2"
                  >
                    <span>{key}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
