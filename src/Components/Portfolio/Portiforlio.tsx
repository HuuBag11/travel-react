import React, {useEffect} from "react";
import "./Portiforlio.scss";

import image1 from "../../assets/ticket.svg";
import image2 from "../../assets/medal.svg";
import image3 from "../../assets/hot-air-balloon.svg";

import Aos from "aos";
import "aos/dist/aos.css";

export const Portiforlio = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div className="portiforlio section container">
      <div className="section-container grid">
        <div className="content-left">
          <div className="sectionHeading" data-aos="fade-up">
            <h3>Why should you choose us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="single-portiforlio flex" data-aos="fade-up">
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
          <div className="single-portiforlio flex" data-aos="fade-up">
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
          <div className="single-portiforlio flex" data-aos="fade-up">
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
