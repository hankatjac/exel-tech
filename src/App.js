import React, {useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from './components/serviceData';
import productData from './components/productData';
import ListServices from './components/ListServices';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';



function App() {
  const [ourServices, setourServices] = useState(data);
  const [products, setProducts] = useState(productData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products products={products} />} />
          <Route path="services" element={<ListServices ourServices={ourServices} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
