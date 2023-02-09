import "./Filling.css";
import { Button } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filling = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      performAction();
      navigate("/Thank");
    }, 2000);
  };

  const performAction = () => {
    console.log("Action performed!");
  };

  return (
    <div className="Filling">
      <div className="Filling-lang-background">
        <div className="Filling-top-text">Filling in progress</div>
        <div className="Filling-middle-text1">
          Amount <div className="Filling-middle-text1-2"> 0</div>
          <div className="Filling-middle-text2">ml</div>
        </div>
        <div className="Filling-bottom-text">
          {/* <Link style={{ textDecoration: "none" }} to="/Thank"> */}
          <div className="confirm-btn-confirm">
            <Button
              className={isClicked ? "red-button" : "blue-button"}
              onClick={handleClick}
            >
              <span className="p5">STOP</span>
            </Button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Filling;
