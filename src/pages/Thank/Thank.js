import "./Thank.css";
import Logo from "../../img/bg-logr.png";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thank = () => {
  const Time = "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (Time === "true") {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [Time, navigate]);

  return (
    <div className="Filling">
      <div className="Thank-responsive-background">
        <div className="Thank-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Thank-top-text">Thank you for using U fill</div>
      </div>
    </div>
  );
};

export default Thank;
