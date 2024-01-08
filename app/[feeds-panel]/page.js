"use client";
import Card from "../cards/page";
import { useQuery } from "@apollo/client";
import { GET_FILTERVEHICLES, GET_MAKEMODEL } from "@/app/query/vehicleQuery";
import Spiner from "@/app/spiner/page";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "next/navigation";
import Filter from "../filter/page";

function FeedsPanel() {
  const [skip, setSkip] = useState(0);
  const [itemarr, setItemarr] = useState([]);
  const [models, setModels] = useState({});
  const searchParams = useSearchParams();
  const [filterUrl, setFilterUrl] = useState({});

  useEffect(() => {
    setSkip(0);
    setItemarr([]);
    // let obj = {};
    // searchParams.forEach((value, key) => {
    //   obj[key] = value;
    // });
    // setFilterUrl(obj);
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
    <section className="p-3">
      {/* ----------------filter------------------ */}
      <Filter />
      {/* ----------------filter------------------ */}
      <main className="flex items-center justify-center">
        <InfiniteScroll
          dataLength={itemarr?.length}
          next={fetchData}
          hasMore={!loadingFilterVehicles}
          loader={<Spiner />}
          style={{
            overflow: "hidden",
          }}
          className="flex flex-col overflow-hidden items-center gap-10"
        >
          <div className="pt-10 w-full flex flex-wrap justify-center gap-4">
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

// sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4
