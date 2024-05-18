import { useNavigate } from "react-router-dom";
import "./Order.css";
function Order() {
  const navigate = useNavigate();
  async function getOrders(e) {
    e.preventDefault();
    const result = await fetch(
      `https://sheetdb.io/api/v1/dvb7xxssna89k`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const response = await result.json();
    // navigate('/about', { state: { from: 'Home Page', userId: 123 } });

  }
  return (
    <>
      <div className="container order_container">
        <div className="row">
          <div className="program_control">

          {/* onClick={(e) => getOrders(e)} */}
            <button type="button" >Pause / Start Autoprogram</button>
          </div>
        </div>

        <div className="row">
          <div className="switch_order">
            <button>Previous Order</button>
            <button>Next Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;
