// Card.js
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h4 className="p1">{props.title}</h4>
      <p className="p2">{props.content}</p>
      <p className="p3">{props.content2}</p>
    </div>
  );
}

export default Card;
