import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import CreateProduct from "../src/Pages/CreateProduct"
import Product from "../src/Pages/Product"
import ProductDetails from "../src/Pages/ProductDetails"
import ProductList from "../src/Pages/ProductList"
import NotFound from './NotFound';
import CryptoDetail from "./CryptoDetail"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cryptodetail/:cryptoSymbol" element={<CryptoDetail />}></Route> 
        <Route path="/cryptodetail/:cryptoSymbol/:id" element={<CryptoDetail />}></Route> 
          <Route path="product">
            <Route index element={<Product />}></Route>
            <Route path="create" element={<CreateProduct />}></Route>
            <Route path="details" element={<ProductDetails />}></Route>
            <Route path="details/:productId" element={<ProductDetails />}></Route>
            <Route path="list" element={<ProductList />}></Route>
          
          </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
