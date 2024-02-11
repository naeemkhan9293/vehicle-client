"use client";
import { createContext, useContext, useState } from "react";
import { uploadUserImage } from "./ImageQueryUser";

const VehicleContext = createContext();

const ContextProvider = ({ children }) => {
  const [asideToggle, setAsideToggle] = useState(true);

  const [filterCredentials, setFilterCredentials] = useState({
    make: "",
    model: "",
    fuelType: "",
    transmission: "",
    location: "",
    Steering: "",
  });

  const [authLogin, setauthLogin] = useState(false);


  return (
    <VehicleContext.Provider
      value={{
        asideToggle,
        setAsideToggle,
        filterCredentials,
        setFilterCredentials,
        uploadUserImage,
        authLogin,
        setauthLogin
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

const useContextState = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error("useContextState must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, useContextState };
