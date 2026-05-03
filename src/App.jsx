import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import OrdersList from "./pages/OrdersList";

import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<ProtectedRoute><OrdersList /></ProtectedRoute>}/>
        <Route path="/admin-login" element={<AdminLogin />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;