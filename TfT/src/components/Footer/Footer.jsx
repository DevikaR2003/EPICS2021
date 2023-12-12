/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SecondaryButton } from "../SecondaryButton";
import "./style.css";

export const Footer = ({ className, overlapClassName, groupClassName, text = "largerthan", hasDiv = true }) => {
  return (
    <div className={`footer ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className="BG" />
        <div className={`group ${groupClassName}`}>
          <div className="largerthan">{text}</div>
          {hasDiv && <div className="div">i</div>}
        </div>
        <div className="form">
          <div className="form-field">
            <div className="overlap-group">
              <SecondaryButton
                className="secondary-button-instance"
                secondaryButtonClassName="design-component-instance-node"
                text="Subscribe"
              />
              <div className="input" />
              <div className="text-wrapper-2">Your email</div>
            </div>
          </div>
          <p className="p">Subscribe to get latest updates</p>
        </div>
        <div className="links">
          <div className="our-team">
            <div className="text-wrapper-3">Contact</div>
            <div className="text-wrapper-4">What we do</div>
            <div className="text-wrapper-5">Team</div>
            <div className="text-wrapper-6">About us</div>
            <div className="text-wrapper-7">Home</div>
          </div>
          <div className="more">
            <div className="text-wrapper-3">Blog</div>
            <div className="text-wrapper-4">Donate</div>
            <div className="text-wrapper-5">Events</div>
            <div className="text-wrapper-6">Projects</div>
            <div className="text-wrapper-7">More</div>
          </div>
          <div className="connect">
            <div className="text-wrapper-3">Linkdin</div>
            <div className="text-wrapper-4">Twitter</div>
            <div className="text-wrapper-5">Instagram</div>
            <div className="text-wrapper-6">Facebook</div>
            <div className="text-wrapper-7">Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  text: PropTypes.string,
  hasDiv: PropTypes.bool,
};
