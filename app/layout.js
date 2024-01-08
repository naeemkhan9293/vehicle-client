"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Aside from "./navbar/Aside";
import AsideNavbar from "./navbar/Aside";
import { ContextProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "http://localhost:4000/",
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
            <div className="flex flex-grow ">
              <AsideNavbar />
              <div className="flex-1">
                <Navbar />
                {children}
                {/* <Footer /> */}
              </div>
            </div>
          </ContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
