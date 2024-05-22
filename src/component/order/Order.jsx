import { useNavigate } from "react-router-dom";
import "./Order.css";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../OrderContext";

function Order() {
  const navigate = useNavigate();
  const { setOrders, currentSequenceNumber, setCurrentSequenceNumber } = useContext(OrderContext);

  async function fetchOrders() {
    const result = await fetch(
      "https://sheetdb.io/api/v1/tyb2c31tf86n8",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const response = await result.json();
    setOrders(response);
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
    navigate('/product', { state: { sequenceNumber: 0 } });
  }

  function handlePreviousOrder() {
    if (currentSequenceNumber > 0) {
      setCurrentSequenceNumber(currentSequenceNumber - 1);
      navigate('/product', { state: { sequenceNumber: currentSequenceNumber - 1 } });
    }
  }

  function handleNextOrder() {
    setCurrentSequenceNumber(currentSequenceNumber + 1);
    navigate('/product', { state: { sequenceNumber: currentSequenceNumber + 1 } });
  }

  return (
    <>
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
    </>
  );
}

export default Order;