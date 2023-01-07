import React from "react";
import bottle1 from "../../img/bottle1.png";
import bottle2 from "../../img/bottle2.png";
import bottle3 from "../../img/bottle3.png";
import bottle4 from "../../img/bottle4.png";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import { Link } from "react-router-dom";
import "./List.css";

//const fs = require("fs");
//const text = fs.readFileSync("../../file/1.txt", "utf-8");
//const data = JSON.parse(text);

const items = [
  {
    id: 1,
    imageUrl1: logo1,
    title1: "Product01",
    imageUrl2: bottle1,
    title2: "Item 2",
  },
  {
    id: 2,
    imageUrl1: logo2,
    title1: "Product02",
    imageUrl2: bottle2,
    title2: "Item 2",
  },
  {
    id: 3,
    imageUrl1: logo2,
    title1: "Product03",
    imageUrl2: bottle3,
    title2: "Item 2",
  },
  {
    id: 4,
    imageUrl1: logo2,
    title1: "Product04",
    imageUrl2: bottle4,
    title2: "Item 2",
  },
];

function Item(props) {
  return (
    <Link style={{ textDecoration: "none" }} to="/Volume">
      <div className="item">
        <img src={props.imageUrl1} alt={props.title1} />
        <p>{props.title1}</p>
        <img src={props.imageUrl2} alt={props.title2} />
      </div>
    </Link>
  );
}

function ListView(props) {
  return (
    <div
      className="list-view"

      //style={{ overflowY: "scroll", maxHeight: "70vh" }}
    >
      {items.map((item) => (
        <Item
          key={item.id}
          imageUrl1={item.imageUrl1}
          title1={item.title1}
          imageUrl2={item.imageUrl2}
          title2={item.title2}
        />
      ))}
    </div>
  );
}

const List = () => {
  return (
    <div className="het">
      <ListView />
    </div>
  );
};

export default List;
