import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import SearchItems from './Components/SearchItems';
import Cart from './Components/Cart';
import { items } from './Components/Data';

const App = () => {
  const [data, setData] = useState([...items]);
  const[cart,setCart]=useState([])

  return (
    <BrowserRouter>
      <Navbar cart={cart} setData={setData} />
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} items={data} />} />
        <Route path="/search/:term" element={<SearchItems cart={cart} setCart={setCart} items={data} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
