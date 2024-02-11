"use client";
import Card from "../card/page";
import { useQuery } from "@apollo/client";
import { GET_FILTERVEHICLES } from "@/app/query/vehicleQuery";
import Spiner from "@/app/spiner/page";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function FeedsPanel() {
  const [skip, setSkip] = useState(0);
  const [itemarr, setItemarr] = useState([]);
  const [models, setModels] = useState({});
  const searchParams = useSearchParams();
  const [filterUrl, setFilterUrl] = useState({});

  useEffect(() => {
    setSkip(0);
    setItemarr([]);
    setFilterUrl(Object.fromEntries(searchParams));
  }, [searchParams]);

  const {
    loading: loadingFilterVehicles,
    error: errorFilterVehicles,
    data: dataFilterVehicles,
    refetch: refetchFilterVehicles,
  } = useQuery(GET_FILTERVEHICLES, {
    variables: { filter: filterUrl, skip: skip },
  });

  const fetchData = () => {
    setSkip(skip + 5);
    refetchFilterVehicles({ filter: filterUrl, skip: skip });
  };

  useEffect(() => {
    if (dataFilterVehicles?.filterQuery) {
      setItemarr((prevItems) => [
        ...prevItems,
        ...dataFilterVehicles.filterQuery,
      ]);
    }
  }, [dataFilterVehicles?.filterQuery]);

  return (
    <section className="">
      <main className="flex flex-col gap-4 items-center w-full  justify-center">
        <div className="w-full flex flex-wrap justify-center gap-4">
          {itemarr?.map((item, index) => {
            return <Card key={index} items={item} />;
          })}
        </div>
        {loadingFilterVehicles && <Spiner />}
        <div className="w-full flex flex-col items-center mt-3">
          <span className="w-full h-[1px] bg-gray-400"></span>
          <button
            className="border bg-slate-100  border-gray-400 w-fit p-2 px-4 rounded-full relative bottom-5"
            onClick={fetchData}
          >
            Load more
          </button>
        </div>
      </main>
    </section>
  );
}

export default FeedsPanel;

// sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4
