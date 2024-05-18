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
    navigate('/product', { state: { orders: response } });

  }
  return (
    <>
      <div className="container order_container">
        <div className="row">
          <div className="program_control">

          
            <button type="button" onClick={(e) => getOrders(e)}>Pause / Start Autoprogram</button>
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
