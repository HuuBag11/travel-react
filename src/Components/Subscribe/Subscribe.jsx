import React, { useEffect } from "react";

import image from "../../assets/person-call.png";
import "./Subscribe.scss";

import Aos from "aos";
import "aos/dist/aos.css";

export const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="subscribe section container">
      <div className="section-container grid">
        <div className="img-wrapper" data-aos="fade-up">
          <img src={image} alt="" />
        </div>
        <div className="text-wrapper" data-aos="fade-up">
          <h4>Best way to start your journey!</h4>
          <p>
            We offer personalized itineraries tailored to individual preferences
            and interests.
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};
