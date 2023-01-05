import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Navbar } from "./components/Navbar";
// import { OrderSummary } from "./components/OrderSummary";
import { LandingPage } from "./components/LandingPage";
import { OtherContent } from "./components/OtherContent";
import { About } from "./components/About";
import { OrderSummary } from "./components/OrderSummary";
import { Link1 } from "./components/Link1";
import { Link2 } from "./components/Link2";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} /> */}
        <Route path="/" element={<LandingPage />}>
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
        </Route>
        <Route path="other" element={<OtherContent />}>
          <Route path="link1" element={<Link1 />} />
          <Route path="link2" element={<Link2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
