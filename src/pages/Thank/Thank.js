import "./Thank.css";
import Logo from "../../img/bg-logr.png";
import { Link } from "react-router-dom";

const Thank = () => {
  return (
    <Link to="/home">
      <div className="Filling">
        <div className="Thank-responsive-background">
          <div className="Thank-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Thank-top-text">Thank you for using U fill</div>
        </div>
      </div>
    </Link>
  );
};

export default Thank;
