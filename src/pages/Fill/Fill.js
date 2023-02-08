import "./Fill.css";
import React from "react";
import Tap from "../../img/ic-taps.png";
import nobe1 from "../../img/nobe1.gif";
import print1 from "../../img/print1.png";
import { Link } from "react-router-dom";

const Fill = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/Filling">
      <div className="Fill">
        <div className="Fill-lang-background">
          <div className="Fill-top-text">
            Please place bottle under the blinking button & press it to start
            refilling
            <div className="Fill-tap">
              <img src={Tap} alt="" />
            </div>
          </div>
          <div className="Fill-gif">
            <img src={nobe1} alt="he" />
          </div>
          <div className="Fill-bottom-text">
            <div className="Fill-print">
              <img src={print1} alt="" />
            </div>
            <div className="Fill-bottom-text2">
              Please collect your receipt. Issue it at the counter to get your
              SAVING
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Fill;
