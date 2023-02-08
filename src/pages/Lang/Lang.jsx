import React from "react";
import Back from "../../img/back.png";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Lang.css";

const Lang = () => {
  return (
    <div className="lang">
      <div className="lang-background">
        <Link to="/Home">
          <div className="btn-back">
            <img src={Back} alt="" />
          </div>
        </Link>
        <div className="btn">
          <Link to="/Product">
            <div className="btn-english">
              <Button>
                <span className="p">English</span>
              </Button>
            </div>
          </Link>
          <Link to="/Product">
            <div className="btn-bengali">
              <Button>
                <span className="p">Bengali</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lang;
