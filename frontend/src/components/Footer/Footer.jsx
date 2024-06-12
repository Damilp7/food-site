import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-logo">
            <img src={assets.gourmet_logo} alt="" className="logo" />
            <p>The Gourmet</p>
          </div>
          <p>
            At Gourmet, our dishes are always a culinary delight, and the
            convenience of ordering online makes it so easy to enjoy a delicious
            meal from the comfort of your home. Our attention to detail, quality
            ingredients, and prompt delivery have won hundreds of customers
            over. We look forward to many more mouth-watering experiences with
            our esteemed customers.
          </p>
          <div className="footer-social-icons">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2348020000000</li>
            <li>contact@thegourmetfoods.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Gourmet.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
