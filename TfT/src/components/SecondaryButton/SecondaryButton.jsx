/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SecondaryButton = ({ className, secondaryButtonClassName, text = "Secondary button" }) => {
  return (
    <div className={`secondary-button ${className}`}>
      <div className={`text-wrapper ${secondaryButtonClassName}`}>{text}</div>
    </div>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string,
};
