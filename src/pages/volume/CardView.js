// CardView.js
import React from "react";
import Card from "./Card";
import "./CardView.css";

function CardView(props) {
  return (
    <div className="card-view">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          content2={card.content2}
        />
      ))}
    </div>
  );
}

export default CardView;
