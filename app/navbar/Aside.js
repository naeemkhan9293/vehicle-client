"use client";
import { useQuery } from "@apollo/client";
import { GET_MAKEMODEL } from "../query/vehicleQuery";
import CollapsableItem from "../utils/CollapsableItem";
import { contextState } from "../context";
import { useEffect, useState } from "react";
import CollapsibleContainer from "../utils/CollapsibleContainer";
import Link from "next/link";

export default function AsideNavbar() {
  const { loading, error, data } = useQuery(GET_MAKEMODEL);
  const { asideToggle, setAsideToggle } = contextState();

  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    setAsideToggle(false);
  }, [isBrowser]);

  return (
    <aside
      className={`mt-12 hover:opacity-100 absolute left-0 md:relative bg-[#405560] transition-all duration-1000 ${
        asideToggle ? "w-72" : "w-0 collapse"
      } `}
    >
      <CollapsibleContainer title={"Made By"}>
        {data?.getMakes?.makes?.map((items, index) => {
          return (
            <CollapsableItem
              key={index}
              title={items?.make}
              items={items?.model}
            />
          );
        })}
      </CollapsibleContainer>

      <CollapsibleContainer title={"Location"}>
        <div className="flex flex-col gap-1  p-4 text-white">
          {data?.getMakes?.location?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/feeds-panel?location=${item}`}
                className="hover:bg-white hover:text-black rounded px-2"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </CollapsibleContainer>
    </aside>
  );
}
