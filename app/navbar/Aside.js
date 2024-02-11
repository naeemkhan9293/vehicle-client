"use client";
import { useQuery } from "@apollo/client";
import { GET_MAKEMODEL } from "../query/vehicleQuery";
import CollapsableItem from "../utils/CollapsableItem";
import { useContextState } from "../../context/page";
import { useEffect } from "react";
import CollapsibleContainer from "../utils/CollapsibleContainer";
import Link from "next/link";
import User from "./User";
import GearIcon from "../icons/GearIcon";
import LocationIcon from "../icons/LocationIcon";

export default function AsideNavbar() {
  const { loading, error, data } = useQuery(GET_MAKEMODEL);
  const { asideToggle, setAsideToggle } = useContextState();

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    setAsideToggle(false);
  }, [isBrowser]);

  return (
    <aside
      className={`absolute h-screen z-[1] sm:relative pt-12 hover:opacity-100 customeScroll overflow-x-hidden overflow-y-scroll bg-custome-color-primary transition-all duration-1000  ${
        asideToggle ? "w-80 md:w-72" : "w-0 collapse "
      } `}
    >
      <div className="border-b-2 mb-3 pb-3">
        <User />
      </div>

      <CollapsibleContainer
        title={"Made By"}
        reactNode={
          <span className="w-5 block">
            <GearIcon />
          </span>
        }
      >
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

      <CollapsibleContainer
        title={"Location"}
        reactNode={
          <span className="w-5 block">
            <LocationIcon />
          </span>
        }
      >
        <div className="flex flex-col gap-1  pl-10 text-white">
          {data?.getMakes?.location?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/?location=${item}`}
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
