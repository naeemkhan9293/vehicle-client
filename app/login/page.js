"use client";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {  LOGIN_USER } from "../query/vehicleQuery";
import { useRouter } from "next/navigation";
import { useContextState } from "@/context/page";
import UserIcon from "../icons/UserIcon";
import CrossIcon from "../icons/CrossIcon";

export default function Login() {
  const [formCredentials, setFormCredentials] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [token, setToken] = useState("");

  const [checkPass, setCheckPass] = useState(false);

  const onChangeHandler = (e) => {
    setFormCredentials((preItems) => {
      return {
        ...preItems,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onshowPassword = (e) => {
    setCheckPass(e.target.checked);
  };

  const { setauthLogin } = useContextState();

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: ({ loginUser: { token } }) => {
      setToken(token);
      setauthLogin(true);
    },
  });

  const formSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await loginUser({ variables: { loginuser: formCredentials } });
      } catch ({ message }) {
        console.error(message);
      }
    },
    [loginUser, formCredentials]
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      router.push("/");
    }
  }, [token]);

  const msgRef = useRef();

  const messHandler = () => {
    msgRef.current.classList.add("hidden");
  };

  return (
    <div className="flex h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="w-24 m-auto block btn-primary-text-color ">
          <UserIcon />
        </span>
        <h2 className="text-center btn-primary-text-color  text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type={checkPass ? "text" : "password"}
                autoComplete="current-password"
                value={formCredentials.password}
                onChange={onChangeHandler}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
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
              disabled={loading}
              type="submit"
              className="flex w-full justify-center rounded-md btn-primary-color  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not have an account?
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
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
