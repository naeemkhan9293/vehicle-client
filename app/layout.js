"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import AsideNavbar from "./navbar/Aside";
import { ContextProvider } from "../context/page";
import { setContext } from "@apollo/client/link/context";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const inter = Inter({ subsets: ["latin"] });

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_HOST}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("authToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
      "Apollo-Require-Preflight": true,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>next app</title>
      </head>
      <body className={`${inter.className}`}>
        <ApolloProvider client={client}>
          <ContextProvider>
            <div className="flex ">
              <AsideNavbar />
              <div className="flex-1 h-screen overflow-y-scroll customeScroll">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
