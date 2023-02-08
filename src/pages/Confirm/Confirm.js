import React from "react";
import "./Confirm.css";
//import Card from "../volume/Card";
import { Link } from "react-router-dom";
//import print1 from "../../img/print1.png";
import { Button } from "@mantine/core";
import { useLocation } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
  const data2 = location.state;
  console.log(data2);
  //console.log(data2.volume);
  const volume = data2.Volume;
  const Rupee = data2.Rupee;
  const ImageUrl1 = data2.ImageUrl1;
  const ImageUrl2 = data2.ImageUrl2;

  return (
    <div className="Confirm">
      <div className="confirm-lang-background">
        <div className="confirm-top-text">You have selected</div>
        <div className="confirm-het">
          <div className="confirm-card-view">
            <img src={ImageUrl1} alt="" />
            <img src={ImageUrl2} alt="" />
          </div>
        </div>
        <div className="confirm-top-text1">{volume} ml</div>
        <div className="confirm-top-text2">
          Rs.
          <div className="confirm-top-text2-2">{Rupee}</div>
        </div>
        <div className="confirm-top-text3">
          Best before 4 months from purchase date
        </div>
        <div className="confirm-btn-bottom">
          <Link style={{ textDecoration: "none" }} to="/Volume">
            <div className="confirm-btn-decline-o">
              <Button>
                <span className="ppp">DECLINE</span>
              </Button>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Collect" state={data2}>
            <div className="confirm-btn-confirm-o">
              <Button>
                <span className="ppp">CONFIRM</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
