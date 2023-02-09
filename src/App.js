import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lang from "./pages/Lang/Lang";
import Product from "./pages/Product/Product";
import Volume from "./pages/volume/Volume";
import Collect from "./pages/Collect/Collect";
import Confirm from "./pages/Confirm/Confirm";
import Filling from "./pages/Filling/Filling";
import Thank from "./pages/Thank/Thank";
import Fill from "./pages/Fill/Fill";

function App() {
  const [idle, setIdle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timerId = null;

    const handleEvent = () => {
      clearTimeout(timerId);
      setIdle(false);
      timerId = setTimeout(() => setIdle(true), 10000);
    };

    window.addEventListener("mousemove", handleEvent);
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("touchstart", handleEvent);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("touchstart", handleEvent);
    };
  }, []);

  useEffect(() => {
    if (idle) {
      navigate("/");
    }
  }, [idle, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Lang" element={<Lang />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Volume" element={<Volume />} />
        <Route path="/Collect" element={<Collect />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/Filling" element={<Filling />} />
        <Route path="/Thank" element={<Thank />} />
        <Route path="/Fill" element={<Fill />} />
      </Routes>
    </div>
  );
}

export default App;
