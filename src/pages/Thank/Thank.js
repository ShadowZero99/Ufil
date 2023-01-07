import "./Thank.css";
import Logo from "../../img/bg-logr.png";

const Thank = () => {
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
