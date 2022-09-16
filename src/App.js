import React, { useState, useEffect } from 'react';
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
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";



function App() {
  const [ourServices, setourServices] = useState(data);
  const [products, setProducts] = useState(productData);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };

  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={currentUser} logOut={logOut} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products products={products} />} />
          <Route path="services" element={<ListServices ourServices={ourServices} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard/>} />
          {!currentUser && <Route path="login" element={<Login />} />}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
