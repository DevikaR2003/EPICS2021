/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavButton } from "../NavButton";
import "./style.css";

export const Navbar = ({ className, groupClassName, text = "largerthan", hasDiv = true, divClassName }) => {
  return (
    <div className={`navbar ${className}`}>
      <div className={`group-2 ${groupClassName}`}>
        <div className="largerthan-2">{text}</div>
        {hasDiv && <div className="text-wrapper-8">i</div>}
      </div>
      <div className="nav-link">
        <div className={`text-wrapper-9 ${divClassName}`}>Home</div>
        <div className="text-wrapper-10">About us</div>
        <div className="text-wrapper-10">What We Do</div>
        <div className="text-wrapper-10">Media</div>
        <div className="text-wrapper-10">Contact</div>
      </div>
      <NavButton className="nav-button-instance" text="Donate" />
    </div>
  );
};

Navbar.propTypes = {
  text: PropTypes.string,
  hasDiv: PropTypes.bool,
};
