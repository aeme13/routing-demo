import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { OrderSummary } from "./OrderSummary";
export const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </>
  );
};
