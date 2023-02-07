// Card.js
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h4 className="p1">{props.title}ml</h4>
      <p className="p2">Rs.{props.content}</p>
      <p className="p3">Save Rs.{props.content2}</p>
    </div>
  );
}

export default Card;
