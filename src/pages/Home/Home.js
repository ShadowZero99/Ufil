import React from "react";
import "./Home.css";
import Tap from "../../img/ic-tap.png";
import Logo from "../../img/bg-logr.png";
import Settings from "../../img/setting.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="responsive-background">
        <div className="setting-icon">
          <img src={Settings} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="top-text">Let's Reduce and Reuse plastics</div>
        <Link to="/Lang">
          <div className="tap">
            <img src={Tap} alt="" />
          </div>
        </Link>
        <div className="bottom-text">Touch to start your refill process</div>
      </div>
    </div>
  );
};

export default Home;
