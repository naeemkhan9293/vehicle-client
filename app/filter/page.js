"use client";
import { useQuery } from "@apollo/client";
import { GET_MAKEMODEL } from "../query/vehicleQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { contextState } from "../context";

export default function Filter({ comStyle }) {
  const { filterCredentials, setFilterCredentials } = contextState();
  const [models, setModels] = useState({});
  const { loading, error, data } = useQuery(GET_MAKEMODEL);
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeHandler = useCallback((e) => {
    setFilterCredentials((preitem) => {
      let newCredentials = { ...preitem, [e.target.name]: e.target.value };
      if (e.target.name === "make" && e.target.value === "") {
        newCredentials = { ...newCredentials, model: "" };
      }
      return newCredentials;
    });
  }, []);

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    Object.entries(filterCredentials).forEach(([key, value]) => {
      if (value && key) params.set(key, value);
      else params.delete(key);
    });
    return params.toString();
  }, [filterCredentials]);

  const formsubmit = (e) => {
    e.preventDefault();
    const queryString = createQueryString();
    router.replace(`/feeds-panel?${queryString}`);
  };

  useEffect(() => {
    const models = data?.getMakes?.makes?.filter(
      (item) => item.make === filterCredentials.make
    );
    if (models) {
      setModels(...models);
    }
  }, [filterCredentials.make, data]);

  return (
    <div
      className={`w-full m-auto md:mt-24 relative top-9 bg-[#405560] rounded-sm pb-[2px]`}
    >
      <h3 className="inline-block bg-sky-600 p-3 rounded-sm my-3 mx-3 text-white">
        Filter Vehicles
      </h3>
      <form
        className="flex items-center justify-start gap-3 flex-wrap mx-3"
        onSubmit={formsubmit}
      >
        <select
          className="p-2 w-36 rounded-sm"
          name="make"
          id="make"
          onChange={changeHandler}
        >
          <option value="" defaultChecked>
            Make
          </option>
          {data?.getMakes?.makes?.map((item, index) => {
            return (
              <option key={index} value={item?.make}>
                {item?.make}
              </option>
            );
          })}
        </select>
        <select
          className="p-2 rounded-sm w-36"
          name="model"
          id="model"
          onChange={changeHandler}
        >
          <option value="" defaultChecked>
            Model
          </option>
          {models?.model?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          className="p-2 rounded-sm w-36"
          name="fuelType"
          id="fuelType"
          onChange={changeHandler}
        >
          <option value="" defaultChecked>
            Fuel Type
          </option>
          {data?.getMakes?.fuelType?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          className="p-2 rounded-sm w-36"
          name="transmission"
          id="transmission"
          onChange={changeHandler}
        >
          <option value="" defaultChecked>
            Transmission
          </option>
          {data?.getMakes?.transmission?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          className="p-2 rounded-sm w-36"
          name="location"
          id="location"
          onChange={changeHandler}
        >
          <option value="" defaultChecked>
            Location
          </option>
          {data?.getMakes?.location?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          className="p-2 rounded-sm w-36"
          name="Steering"
          id="Steering"
          onChange={changeHandler}
        >
          <option value="" defaultChecked>
            Steering
          </option>
          <option value="Left">Left</option>
          <option value="Right">Right</option>
        </select>

        <div className="flex gap-3 ">
          <select
            className="p-2 rounded-sm w-36"
            name="Steering"
            id="Steering"
            onChange={changeHandler}
          >
            <option value="" defaultChecked>
              Body Type
            </option>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>
      </form>
      <button
        type="submit"
        onClick={formsubmit}
        className="flex gap-3 bg-sky-600 p-2 rounded-sm my-3 mx-3 text-white"
      >
        Search
      </button>
    </div>
  );
}
