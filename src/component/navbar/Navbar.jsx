// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar shadow-lg p-3 mb-5 bg-white rounded">
//       <div className="navbar-left ">
//         <span className="time">18:46</span>
//       </div>
//       <div className="navbar-center">
//         <span className="order-number">ORDER #WF32022</span>
//       </div>
//       <div className="navbar-right">
//         <div className="time_heading">
//         <span className="time-paused">TIME PAUSED</span>
//         </div>
//         <div className="timer-box">
//         <span className="paused-time">00:00</span>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext } from "react";
import "./Navbar.css";
import { OrderContext } from "../../OrderContext";

const Navbar = () => {
  const { currentOrderNumber } = useContext(OrderContext);

  return (
    <div className="navbar shadow-lg p-3 mb-5 bg-white rounded">
      <div className="navbar-left">
        <span className="time">18:46</span>
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