import React from "react";
import Back from "../../img/back.png";
import List from "../List/List";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="Product">
      <div className="lang-background">
        <Link to="/Lang">
          <div className="btn-back">
            <img src={Back} alt="" />
          </div>
        </Link>
        <div className="product-top-text">Select product</div>

        <div className="bottom-list">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Product;
