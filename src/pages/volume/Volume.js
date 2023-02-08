import React from "react";
import Back from "../../img/back.png";
import "./Volume.css";
import { Link } from "react-router-dom";
import CardView from "./CardView";
import bottle1 from "../../img/Product_Images/bottle1.png";
import bottle2 from "../../img/Product_Images/bottle2.png";
import bottle3 from "../../img/Product_Images/bottle3.png";
import bottle4 from "../../img/Product_Images/bottle4.png";
import bottle5 from "../../img/Product_Images/bottle5.png";
import bottle6 from "../../img/Product_Images/bottle6.png";
import logo1 from "../../img/Product_Images/logo1.png";
import logo2 from "../../img/Product_Images/logo2.png";
import logo3 from "../../img/Product_Images/logo3.png";
import logo4 from "../../img/Product_Images/logo4.png";
import logo5 from "../../img/Product_Images/logo5.png";
import logo6 from "../../img/Product_Images/logo6.png";
import Data from "../List/data.json";
import { useLocation } from "react-router-dom";

const Volume = () => {
  const location = useLocation();
  const msgg = location.state;

  const item = Data;

  const cards = item.map((itemp) => {
    if (itemp.id === 1) {
      return { ...itemp, imageUrl1: logo1, imageUrl2: bottle1 };
    }
    if (itemp.id === 2) {
      return { ...itemp, imageUrl1: logo2, imageUrl2: bottle2 };
    }
    if (itemp.id === 3) {
      return { ...itemp, imageUrl1: logo3, imageUrl2: bottle3 };
    }
    if (itemp.id === 4) {
      return { ...itemp, imageUrl1: logo4, imageUrl2: bottle4 };
    }
    if (itemp.id === 5) {
      return { ...itemp, imageUrl1: logo5, imageUrl2: bottle5 };
    }
    if (itemp.id === 6) {
      return { ...itemp, imageUrl1: logo6, imageUrl2: bottle6 };
    }
    return itemp;
  });

  const newcard = cards.find((item) => item.id === msgg);

  const data = [];
  for (let i = 0; i < newcard.count; i++) {
    data.push({
      id: i + 1,
      volume: newcard.volume[i],
      Rupee: newcard.Rupee[i],
      Save: newcard.Save[i],
    });
  }

  const maxsave = newcard.Rupee[newcard.Rupee.length - 1];
  const imageUrl1 = newcard.imageUrl1;
  const imageUrl2 = newcard.imageUrl2;

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
            <img src={imageUrl1} alt="" />
            <p className="text1">Save up to</p>
            <p className="text2">Rs. {maxsave}</p>
          </div>
          <div className="volume-top-right">
            <img src={imageUrl2} alt="" />
          </div>
        </div>

        <div className="volume-bottom">
          <CardView cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Volume;
