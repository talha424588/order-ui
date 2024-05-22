// import { useNavigate } from "react-router-dom";
// import "./Order.css";
// import { useContext, useEffect } from "react";
// import { OrderContext } from "../../OrderContext";

// function Order() {
//   const navigate = useNavigate();
//   const { setOrders, currentSequenceNumber, setCurrentSequenceNumber } = useContext(OrderContext);

//   async function fetchOrders() {
//     try {
//       const result = await fetch("https://sheetdb.io/api/v1/dvb7xxssna89k", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           accept: "application/json",
//         },
//       });
//       const response = await result.json();
//       setOrders(response);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   }

//   useEffect(() => {
//     fetchOrders();

//     const interval = setInterval(() => {
//       fetchOrders();
//     }, 3600000);

//     return () => clearInterval(interval);
//   }, []);

//   function handleStartProgram(e) {
//     e.preventDefault();
//     setCurrentSequenceNumber(0);
//     localStorage.setItem("sequenceNumber", 0);
//     window.open(`/product?sequenceNumber=0`, "_blank");
//   }

//   function handlePreviousOrder() {
//     if (currentSequenceNumber > 0) {
//       const newSequenceNumber = currentSequenceNumber - 1;
//       setCurrentSequenceNumber(newSequenceNumber);
//       localStorage.setItem("sequenceNumber", newSequenceNumber);
//       window.open(`/product?sequenceNumber=${newSequenceNumber}`, "_blank");
//     }
//   }

//   function handleNextOrder() {
//     const newSequenceNumber = currentSequenceNumber + 1;
//     setCurrentSequenceNumber(newSequenceNumber);
//     localStorage.setItem("sequenceNumber", newSequenceNumber);
//     window.open(`/product?sequenceNumber=${newSequenceNumber}`, "_blank");
//   }

//   return (
//     <div className="container order_container">
//       <div className="row">
//         <div className="program_control">
//           <button type="button" onClick={handleStartProgram}>Pause / Start Autoprogram</button>
//         </div>
//       </div>

//       <div className="row">
//         <div className="switch_order">
//           <button onClick={handlePreviousOrder}>Previous Order</button>
//           <button onClick={handleNextOrder}>Next Order</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Order;
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../OrderContext";
import "./Order.css";

function Order() {
  const navigate = useNavigate();
  const { setOrders, currentSequenceNumber, setCurrentSequenceNumber } = useContext(OrderContext);

  async function fetchOrders() {
    try {
      const result = await fetch("https://sheetdb.io/api/v1/tyb2c31tf86n8", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      const response = await result.json();
      setOrders(response);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    fetchOrders();

    const interval = setInterval(() => {
      fetchOrders();
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  function handleStartProgram(e) {
    e.preventDefault();
    setCurrentSequenceNumber(0);
    localStorage.setItem("sequenceNumber", 0);
    window.open(`/product?sequenceNumber=0`, "_blank");
  }

  function handlePreviousOrder() {
    if (currentSequenceNumber > 0) {
      const newSequenceNumber = currentSequenceNumber - 1;
      setCurrentSequenceNumber(newSequenceNumber);
      localStorage.setItem("sequenceNumber", newSequenceNumber);
      window.open(`/product?sequenceNumber=${newSequenceNumber}`, "_blank");
    }
  }

  function handleNextOrder() {
    const newSequenceNumber = currentSequenceNumber + 1;
    setCurrentSequenceNumber(newSequenceNumber);
    localStorage.setItem("sequenceNumber", newSequenceNumber);
    window.open(`/product?sequenceNumber=${newSequenceNumber}`, "_blank");
  }

  return (
    <div className="container order_container">
      <div className="row">
        <div className="program_control">
          <button type="button" onClick={handleStartProgram}>Pause / Start Autoprogram</button>
        </div>
      </div>

      <div className="row">
        <div className="switch_order">
          <button onClick={handlePreviousOrder}>Previous Order</button>
          <button onClick={handleNextOrder}>Next Order</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
