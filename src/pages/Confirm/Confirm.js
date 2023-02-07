import React from "react";
import "./Confirm.css";
//import Card from "../volume/Card";
import { Link } from "react-router-dom";
//import print1 from "../../img/print1.png";
import { Button } from "@mantine/core";
import bottle4 from "../../img/Product_Images/bottle4.png";
import logo1 from "../../img/Product_Images/logo1.png";

const Confirm = () => {
  return (
    <div className="Confirm">
      <div className="confirm-lang-background">
        <div className="confirm-top-text">You have selected</div>
        <div className="confirm-het">
          <div className="confirm-card-view">
            <img src={logo1} alt="" />
            <img src={bottle4} alt="" />
          </div>
        </div>
        <div className="confirm-top-text1">10 ml</div>
        <div className="confirm-top-text2">
          Rs.
          <div className="confirm-top-text2-2">5</div>
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
          <Link style={{ textDecoration: "none" }} to="/Collect">
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
