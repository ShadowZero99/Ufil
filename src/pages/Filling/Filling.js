import "./Filling.css";
import { Link } from "react-router-dom";
//import print1 from "../../img/print1.png";
import { Button } from "@mantine/core";
import React from "react";

const Filling = () => {
  return (
    <div className="Filling">
      <div className="Filling-lang-background">
        <div className="Filling-top-text">Filling in progress</div>
        <div className="Filling-middle-text1">
          Amount <div className="Filling-middle-text1-2"> 0</div>
          <div className="Filling-middle-text2">ml</div>
        </div>
        <div className="Filling-bottom-text">
          <Link style={{ textDecoration: "none" }} to="/Thank">
            <div className="confirm-btn-confirm">
              <Button>
                <span className="p5">STOP</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filling;
