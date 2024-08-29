import React from "react";
import "./Portiforlio.scss";

import image1 from "../../assets/Safety.png";
import image2 from "../../assets/Location.png";
import image3 from "../../assets/Support.jpg";

export const Portiforlio = () => {
  return (
    <div className="portiforlio section container">
      <div className="section-container grid">
        <div className="content-left">
          <div className="sectionHeading">
            <h3>Why should you choose us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="single-portiforlio flex">
            <div className="icon">
              <img src={image1} alt="" />
            </div>
            <div className="info">
              <h4>Safety and Support</h4>
              <p>
                Our top priority is the safety and well-being of our clients. We
                maintain high safety standards and have emergency support
                available during the trip.
              </p>
            </div>
          </div>
          <div className="single-portiforlio flex">
            <div className="icon">
              <img src={image2} alt="" />
            </div>
            <div className="info">
              <h4>Diverse Range of Destinations</h4>
              <p>
                Whether it's domestic tour or an international adventure, we
                cover a wide range of destinations to cater to different
                interest and preferences.
              </p>
            </div>
          </div>
          <div className="single-portiforlio flex">
            <div className="icon">
              <img src={image3} alt="" />
            </div>
            <div className="info">
              <h4>24/7 Customer Support</h4>
              <p>
                Our đeicated customer support team is available round the clock
                to addresss any queries or concerns before, during and after the
                trip.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
