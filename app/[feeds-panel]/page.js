"use client";
import Card from "../cards/page";
import { useQuery } from "@apollo/client";
import { GET_FILTERVEHICLES, GET_MAKEMODEL } from "@/app/query/vehicleQuery";
import Spiner from "@/app/spiner/page";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function FeedsPanel() {
  const [skip, setSkip] = useState(0);
  const [itemarr, setItemarr] = useState([]);
  const [models, setModels] = useState({});
  const [filterObj, setFilterObj] = useState({});

  const [filterCredentials, setFilterCredentials] = useState({
    make: "",
    model: "",
    fuelType: "",
    transmission: "",
    location: "",
    Steering: "",
  });

  const {
    loading: loadingFilterVehicles,
    error: errorFilterVehicles,
    data: dataFilterVehicles,
    refetch: refetchFilterVehicles,
  } = useQuery(GET_FILTERVEHICLES, {
    variables: { filter: filterObj, skip: skip },
  });

  const {
    loading: loadingMakeModel,
    error: errorMakeModel,
    data: dataMakeModel,
  } = useQuery(GET_MAKEMODEL);

  const fetchData = () => {
    setSkip(skip + 5);
    refetchFilterVehicles({ filter: filterObj, skip: skip });
  };

  useEffect(() => {
    if (dataFilterVehicles?.filterQuery) {
      setItemarr((prevItems) => [
        ...prevItems,
        ...dataFilterVehicles.filterQuery,
      ]);
    } 
    console.log(dataFilterVehicles?.filterQuery);
  }, [dataFilterVehicles?.filterQuery]);

  const changeHandler = useCallback((e) => {
    setFilterCredentials((preitem) => {
      let newCredentials = { ...preitem, [e.target.name]: e.target.value };
      if (e.target.name === "make" && e.target.value === "") {
        newCredentials = { ...newCredentials, model: "" };
      }
      return newCredentials;
    });
  }, []);

  useEffect(() => {
    const filteredValues = {};
    for (const key in filterCredentials) {
      if (
        filterCredentials.hasOwnProperty(key) &&
        filterCredentials[key] !== ""
      ) {
        filteredValues[key] = filterCredentials[key];
      }
    }
    setFilterObj(filteredValues);
  }, [filterCredentials]);
  
  const formsubmit = (e) => {
    e.preventDefault();
    setItemarr([]);
    setSkip(0);
    refetchFilterVehicles({ filter: filterObj, skip: skip });
  };

  useEffect(() => {
    const models = dataMakeModel?.getMakes?.makes?.filter(
      (item) => item.make === filterCredentials.make
    );
    if (models) {
      setModels(...models);
    }
  }, [filterCredentials.make, dataMakeModel]);

  return (
    <section className="p-3">
      {/* ----------------filter------------------ */}
      <div className="w-fit m-auto md:mt-24  bg-[#405560] rounded-sm">
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
            {dataMakeModel?.getMakes?.makes?.map((item, index) => {
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
            {dataMakeModel?.getMakes?.fuelType?.map((item, index) => {
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
            {dataMakeModel?.getMakes?.transmission?.map((item, index) => {
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
            {dataMakeModel?.getMakes?.location?.map((item, index) => {
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
      {/* ----------------filter------------------ */}
      <main className="flex items-center justify-center">
        <InfiniteScroll
          dataLength={itemarr?.length}
          next={fetchData}
          hasMore={true}
          loader={<Spiner />}
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-wrap w-[70vw] items-center pt-20">
            {itemarr?.map((item, index) => {
              return <Card key={index} items={item} />;
            })}
          </div>
        </InfiniteScroll>
      </main>
    </section>
  );
}

export default FeedsPanel;
