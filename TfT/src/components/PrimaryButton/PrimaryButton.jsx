/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryButton = ({ className, text = "Primary button" }) => {
  return (
    <div className={`primary-button ${className}`}>
      <div className="primary-button-text">{text}</div>
    </div>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
};
