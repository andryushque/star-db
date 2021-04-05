import React from "react";
import "./errorIndicator.css";
import icon from "./errorImage.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-image" src={icon} alt="Error icon"/>
      <p>{"Opps, something has gone terrible wrong."}</p>
      <p className="mb-0">{"But we already sent droids to fix it..."}</p>
    </div>
  );
};

export default ErrorIndicator;
