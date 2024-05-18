import "./Order.css";
function Order() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="program_control">
            <button>Pause / Start Autoprogram</button>
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
