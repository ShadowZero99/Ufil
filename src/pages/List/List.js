import React from "react";
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
import { Link } from "react-router-dom";
import "./List.css";

import Data from "../../File/data.json";

const List = () => {
  const item = Data;

  const Items = item.map((itemp) => {
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

  function Item(props) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to="/Volume"
        state={props.itemid}
      >
        <div className="item">
          <img src={props.imageUrl1} alt={props.title1} />
          <p>{props.title1}</p>
          <img src={props.imageUrl2} alt={props.title2} />
        </div>
      </Link>
    );
  }

  function ListView() {
    return (
      <div className="list-view">
        {Items.map((item) => (
          <Item
            key={item.id}
            itemid={item.id}
            imageUrl1={item.imageUrl1}
            title1={item.title1}
            imageUrl2={item.imageUrl2}
            title2={item.title2}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="het">
      <ListView />
    </div>
  );
};

export default List;
