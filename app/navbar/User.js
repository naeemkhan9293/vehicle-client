"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GETUSER_DETAIL } from "../query/vehicleQuery";
import { useQuery } from "@apollo/client";
import { useContextState } from "@/context/page";
import Image from "next/image";
import UserIcon from "../icons/UserIcon";
import CameraIcon from "../icons/CameraIcon";
import UsernameIcon from "../icons/UsernameIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";

const { gql } = require("@apollo/client");

export default function User() {
  const [logedIn, setLogedin] = useState();
  const [file, setFile] = useState(false);

  const { uploadUserImage, authLogin } = useContextState();

  const { loading, error, data, refetch } = useQuery(GETUSER_DETAIL, {
    onCompleted: () => {
      setLogedin(localStorage.getItem("authToken") ? true : false);
    },
  });

  const fileChangeHandler = async ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    if (validity.valid && file) {
      const token = localStorage.getItem("authToken");
      const res = await uploadUserImage(file, token);
      if (res?.upload) {
        refetch();
      }
    }
  };

  useEffect(() => {
    refetch();
  }, [authLogin]);

  return (
    <div className="flex flex-col items-center gap-3 justify-center ">
      {logedIn && (
        <div className="w-40 h-40 btn-primary-text-color  flex flex-col items-center">
          {!data?.getUser?.profileImage ? (
            <UserIcon />
          ) : (
            <div className="w-24 h-24 relative">
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_HOST}/images/user-profile-images/${data?.getUser?.profileImage}`}
                className="rounded-[50%] object-cover"
                alt="user-image"
              />
            </div>
          )}

          <label
            htmlFor="file"
            className="w-6 block text-white relative bottom-[2.8rem]"
          >
            <CameraIcon />
          </label>
          <input
            type="file"
            id="file"
            onChange={fileChangeHandler}
            className="hidden"
          />
        </div>
      )}
      {!logedIn && (
        <>
          <div className="w-32 btn-primary-text-color">
            <UserIcon />
          </div>
          <nav className="flex flex-wrap gap-2">
            <Link
              href="/login"
              className="btn-primary-color text-white py-1 rounded-sm w-20 text-center  px-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="btn-primary-color text-white py-1 rounded-sm w-20 text-center  px-2"
            >
              Sign Up
            </Link>
          </nav>
        </>
      )}
      {data && (
        <div className="w-full px-2 flex flex-col text-white">
          <ul>
            <li className="flex gap-2">
              <span className="w-5 block">
                <UsernameIcon />
              </span>
              <span>{data?.getUser?.username}</span>
            </li>
            <li className="flex gap-2">
              <span className="w-5 block ">
                <EmailIcon />
              </span>
              <span>{data?.getUser?.email}</span>
            </li>
            <li className="flex gap-2">
              <span className="w-5 block ">
                <PhoneIcon />
              </span>
              <span>{data?.getUser?.phone}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
