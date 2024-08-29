import React from "react";
import "./Footer.scss";

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="section-container container grid">
        <div className="logo-wrapper">
          <div className="footer-logo">RYO Travel</div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footer-links">
          <div className="link-title">Information</div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <div className="link-title">Helpful Links</div>
          <ul>
            <li>
              <a href="#">Desination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <div className="link-title">Contact Detail</div>
          <div className="phone">+070 123 123</div>
          <div className="email">huubang123@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
