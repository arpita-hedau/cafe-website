import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./component/navbar/Navbar";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import Footer from "./component/footer/Footer";


const App = () => {



  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="/reservation" element={<Reservation />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/admin" element={<Admin />} />
         
        
      </Routes>
       {!isAdmin && <Footer />}
    </BrowserRouter>
  );
};

export default App;