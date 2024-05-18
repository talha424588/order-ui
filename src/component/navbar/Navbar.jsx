
import React, { useContext } from "react";
import "./Navbar.css";
import { OrderContext } from "../../OrderContext";

const Navbar = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const currentTime = hours + ":" + formattedMinutes;

  const { currentOrderNumber } = useContext(OrderContext);

  return (
    <div className="navbar shadow-lg p-3 mb-5 bg-white rounded">
      <div className="navbar-left">
        <span className="time">{currentTime}</span>
      </div>
      <div className="navbar-center">
        <span className="order-number">{`ORDER #${currentOrderNumber}`}</span>
      </div>
      <div className="navbar-right">
        <div className="time_heading">
          <span className="time-paused">TIME PAUSED</span>
        </div>
        <div className="timer-box">
          <span className="paused-time">00:00</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;