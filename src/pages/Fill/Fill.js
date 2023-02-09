import "./Fill.css";
import React, { useState } from "react";
import Tap from "../../img/ic-taps.png";
import nobe1 from "../../img/nobe1.gif";
import nobe2 from "../../img/nobe2.gif";
import nobe3 from "../../img/nobe3.gif";
import nobe4 from "../../img/nobe4.gif";
import nobe5 from "../../img/nobe5.gif";
import nobe6 from "../../img/nobe6.gif";
import print1 from "../../img/print1.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Fill = () => {
  const location = useLocation();
  const data3 = location.state;
  const product_id = data3.Productid;

  const [nobe, setNobe] = useState(null);

  React.useEffect(() => {
    if (product_id === 1) {
      setNobe(nobe1);
    }
    if (product_id === 2) {
      setNobe(nobe2);
    }
    if (product_id === 3) {
      setNobe(nobe3);
    }
    if (product_id === 4) {
      setNobe(nobe4);
    }
    if (product_id === 5) {
      setNobe(nobe5);
    }
    if (product_id === 6) {
      setNobe(nobe6);
    }
  }, [product_id]);

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
            <img src={nobe} alt="he" />
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
