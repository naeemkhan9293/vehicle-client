import { createContext, useContext, useState } from "react";

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

  return (
    <VehicleContext.Provider
      value={{
        asideToggle,
        setAsideToggle,
        filterCredentials,
        setFilterCredentials,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

const contextState = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error("contextState must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, contextState };
