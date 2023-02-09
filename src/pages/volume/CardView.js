import React from "react";
import Card from "./Card";
import "./CardView.css";
import { useLocation } from "react-router-dom";

function CardView(props) {
  const location = useLocation();
  const msgg = location.state;
  const items = props.cards.find((item) => item.id === msgg);

  const data = [];
  for (let i = 0; i < items.count; i++) {
    data.push({
      id: i + 1,
      volume: items.volume[i],
      Rupee: items.Rupee[i],
      Save: items.Save[i],
      imageUrl1: items.imageUrl1,
      imageUrl2: items.imageUrl2,
      productid: msgg,
    });
  }

  return (
    <div className="card-view">
      {data.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          volume={card.volume}
          Rupee={card.Rupee}
          Save={card.Save}
          ImageUrl1={card.imageUrl1}
          ImageUrl2={card.imageUrl2}
          Productid={card.productid}
        />
      ))}
    </div>
  );
}

export default CardView;
