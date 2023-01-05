import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import { Link1 } from "./Link1";
import { Link2 } from "./Link2";

export const OtherContent = () => {
  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="link1" element={<Link1 />} />
        <Route path="link2" element={<Link2 />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} /> */}
      </Routes>
    </>
  );
};
