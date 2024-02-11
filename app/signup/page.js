"use client";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { REGISTER_USER } from "../query/vehicleQuery";
import UserIcon from "../icons/UserIcon";
import CrossIcon from "../icons/CrossIcon";

export default function Login() {
  const [formCredentials, setFormCredentials] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [checkPass, setCheckPass] = useState(false);

  const onChangeHandler = (e) => {
    setFormCredentials((preItems) => {
      return {
        ...preItems,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [registerUser, { error }] = useMutation(REGISTER_USER);

  const formSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await registerUser({ variables: { registeruser: formCredentials } });
      } catch ({ message }) {
        console.error(message);
      }
    },
    [registerUser, formCredentials]
  );

  const onshowPassword = (e) => {
    setCheckPass(e.target.checked);
  };

  const msgRef = useRef();

  const messHandler = () => {
    msgRef.current.classList.add("hidden");
  };

  return (
    <div className="flex min-h-screen  flex-1 flex-col justify-center mt-4 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="w-24 m-auto block btn-primary-text-color ">
          <UserIcon />
        </span>
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight btn-primary-text-color">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={formSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                value={formCredentials.username}
                onChange={onChangeHandler}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formCredentials.email}
                onChange={onChangeHandler}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="text"
                value={formCredentials.phone}
                onChange={onChangeHandler}
                autoComplete="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type={checkPass ? "text" : "password"}
                value={formCredentials.password}
                onChange={onChangeHandler}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-1 flex items-center gap-2">
            <input
              id="showPassword"
              name="showPassword"
              type="checkbox"
              value={checkPass}
              onChange={onshowPassword}
              className="mt-1"
            />
            <span>show password</span>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md btn-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already Have an accound?
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
        {error &&
          error.graphQLErrors.map(({ message }, index) => {
            return (
              <div
                key={index}
                class="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative"
                role="alert"
                ref={msgRef}
              >
                <strong class="font-bold">Warning</strong>
                <span class="block sm:inline px-3">{message}</span>
                <span
                  class="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={messHandler}
                >
                  <CrossIcon />
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
