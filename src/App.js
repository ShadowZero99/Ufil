import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lang from "./pages/Lang/Lang";
import Product from "./pages/Product/Product";
//import List from "./pages/List/List";
import Volume from "./pages/volume/Volume";
import Collect from "./pages/Collect/Collect";
import Confirm from "./pages/Confirm/Confirm";
import Filling from "./pages/Filling/Filling";
import Thank from "./pages/Thank/Thank";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
