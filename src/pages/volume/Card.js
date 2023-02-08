// Card.js
import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const data = {
    id: props.id,
    Volume: props.volume,
    Rupee: props.Rupee,
    ImageUrl1: props.ImageUrl1,
    ImageUrl2: props.ImageUrl2,
  };

  return (
    <Link style={{ textDecoration: "none" }} to="/Confirm" state={data}>
      <div className="card">
        <h4 className="p1">{props.volume} ml</h4>
        <p className="p2">Rs.{props.Rupee}</p>
        <p className="p3">Save Rs.{props.Save}</p>
      </div>
    </Link>
  );
}

export default Card;
