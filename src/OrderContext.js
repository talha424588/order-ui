// import React, { createContext, useState } from "react";

// export const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [currentOrderNumber, setCurrentOrderNumber] = useState("");

//   return (
//     <OrderContext.Provider value={{ currentOrderNumber, setCurrentOrderNumber }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [currentOrderNumber, setCurrentOrderNumber] = useState(null);
  const [currentSequenceNumber, setCurrentSequenceNumber] = useState(0);
  const [orders, setOrders] = useState([]);

  return (
    <OrderContext.Provider
      value={{
        currentOrderNumber,
        setCurrentOrderNumber,
        currentSequenceNumber,
        setCurrentSequenceNumber,
        orders,
        setOrders
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};