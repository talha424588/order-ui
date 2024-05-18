import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Product from './component/product/Product';
import Order from './component/order/Order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Product></Product> */}
      {/* <Order></Order> */}
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path="/product" element={<Product/>} />
          <Route path="/" element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
