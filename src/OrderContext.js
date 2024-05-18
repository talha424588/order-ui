import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [currentOrderNumber, setCurrentOrderNumber] = useState("");

  return (
    <OrderContext.Provider value={{ currentOrderNumber, setCurrentOrderNumber }}>
      {children}
    </OrderContext.Provider>
  );
};