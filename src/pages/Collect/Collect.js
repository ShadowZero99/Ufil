import React from "react";
import "./Collect.css";
import print1 from "../../img/print1.png";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Collect = () => {
  const location = useLocation();
  const data3 = location.state;
  console.log(data3);

  const volume = data3.Volume;
  const Rupee = data3.Rupee;

  return (
    <div className="Collect">
      <div className="collect-lang-background">
        <div className="collect-print">
          <img src={print1} alt="" />
        </div>
        <div className="collect-text1">Please collect your receipt.</div>
        <div className="collect-text2">
          Issue it at the counter <br></br>to get your SAVINGS
        </div>
        <div className="collect-bottom">Total &emsp; &emsp; Quantity</div>
        <div className="collect-bottom-label">
          Rs. {volume} &emsp; &emsp;&emsp;{Rupee} ml
        </div>
        <Link style={{ textDecoration: "none" }} to="/Fill" state={data3}>
          <div className="btn-next">
            <Button>
              <span className="pp">Next</span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collect;
