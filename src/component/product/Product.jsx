import "./Product.css";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { OrderContext } from "../../OrderContext";
import { IoSettingsOutline } from "react-icons/io5";

const Product = () => {
  const navigate = new useNavigate();
  const { setCurrentOrderNumber,setCurrentSequenceNumber,currentSequenceNumber } = useContext(OrderContext);
  const [sequenceNumber, setSequenceNumber] = useState(0);
  const location = useLocation();
  const orders = location.state?.orders || [];

  function handleSettingsClick()
  {
    navigate("/")
  }

  // Group orders by sequence
  const groupedOrders = orders.reduce((acc, order) => {
    if (!acc[order.sequence]) {
      acc[order.sequence] = [];
    }
    acc[order.sequence].push(order);
    return acc;
  }, {});

  // Get current sequence orders and total packing time
  const currentSequenceOrders = groupedOrders[sequenceNumber + 1] || [];
  const totalPackingTimeSec = currentSequenceOrders.reduce((total, order) => {
    return total + parseInt(order.packing_time_sec, 10);
  }, 0);

  const [timerValue, setTimerValue] = useState(totalPackingTimeSec);

  // Effect to reset timer when sequenceNumber changes
  useEffect(() => {
    if (currentSequenceOrders.length > 0) {
      setTimerValue(totalPackingTimeSec);
      setCurrentOrderNumber(currentSequenceOrders[0].order_number);
    }
  }, [
    sequenceNumber,
    totalPackingTimeSec,
    currentSequenceOrders.length,
    setCurrentOrderNumber,
    currentSequenceOrders,
  ]);

  // Countdown renderer
  const renderer = ({ hours, minutes, seconds, completed }) => {
    const halfTimeReached =
      hours * 3600 + minutes * 60 + seconds <= timerValue / 2;
    const className = halfTimeReached ? "counter half-time" : "counter";

    if (completed) {
      if (sequenceNumber < Object.keys(groupedOrders).length - 1) {
        setSequenceNumber(sequenceNumber + 1);
      }
      return <span className={className}>Packing complete!</span>;
    } else {
      return (
        <span className={className}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      );
    }
  };

  return (
    <div className="product_parent">
      <div
        className="container product_container"
        style={{
          width: currentSequenceOrders.length > 4 ? "639.33px" : "940.05px",
        }}
      >
        <div className="items">
          {currentSequenceOrders.map((order, index) => (
            <div key={index} className="card card-custom item">
              <img
                className="card-img-top"
                src={order.image_url}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">1x 40x60 cm</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container ins_container">
        <div className="row ins_row">
          <div className="col-lg-6 ins">
            <div className="ins_section">
              <div className="ins_header">
                <h1 className="instruction_heading">Specific instructions:</h1>
              </div>
              <div className="instruction_content">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 timer_counter">
            <div className="next_order_section">
              <div className="next_order_heading">
                <h1 className="next_order_heading">TIME TILL NEXT ORDER</h1>
              </div>
              <div className={renderer.className}>
                <Countdown
                  date={Date.now() + timerValue * 1000}
                  renderer={renderer}
                  key={sequenceNumber}
                />
              </div>
            </div>
            <div className="navigator">
              <span className="setting-icon" onClick={()=>handleSettingsClick()}><IoSettingsOutline /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
