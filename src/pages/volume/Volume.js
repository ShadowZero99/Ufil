import React from "react";
import Back from "../../img/back.png";
import bottle1 from "../../img/Product_Images/bottle1.png";
//import bottle2 from "../../img/bottle21.png";
import logo1 from "../../img/Product_Images/logo1.png";
//import logo2 from "../../img/logo21.png";
import "./Volume.css";
import { Link } from "react-router-dom";
import CardView from "./CardView";

const Volume = () => {
  const cards = [
    { id: 1, title: "10", content: "5", content2: "1" },
    { id: 2, title: "20", content: "6", content2: "2" },
    { id: 3, title: "30", content: "7", content2: "3" },
  ];
  return (
    <div className="Volume">
      <div className="lang-background">
        <Link style={{ textDecoration: "none" }} to="/Product">
          <div className="btn-back">
            <img src={Back} alt="" />
          </div>
        </Link>
        <div className="product-top-text">Select the volume required</div>
        <div className="volume-top">
          <div className="volume-top-left">
            <img src={logo1} alt="" />
            <p className="text1">Save up to</p>
            <p className="text2">Rs.4</p>
          </div>
          <div className="volume-top-right">
            <img src={bottle1} alt="" />
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/Confirm">
          <div className="volume-bottom">
            <CardView cards={cards} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Volume;
