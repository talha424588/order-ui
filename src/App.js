import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Product from './component/product/Product';
import Order from './component/order/Order';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Order></Order>
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
