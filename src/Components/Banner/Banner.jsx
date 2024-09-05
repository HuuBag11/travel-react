import React, {useEffect} from "react";
import "./Banner.scss";

import Video from "../../assets/banner.mp4";

const imagePP1 = "https://images.unsplash.com/photo-1533281808624-e9b07b4294ff?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imagePP2 = "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imagePP3 = "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imagePP4 = "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

import Aos from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div className="banner">
      <div className="video-bg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText" data-aos="fade-up">
        <h1>Unblock travel dream with us!</h1>
        <p>
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <a href="#" className="btn">
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      <div className="popular-places" data-aos="fade-up">
        <div className="content">
          <h3>Popular Places</h3>
          <ul className="images flex">
            <li className="img-wrapper">
              <img src={imagePP1} alt="popular image 1" />
            </li>
            <li className="img-wrapper">
              <img src={imagePP2} alt="popular image 2" />
            </li>
            <li className="img-wrapper">
              <img src={imagePP3} alt="popular image 3" />
            </li>
            <li className="img-wrapper">
              <img src={imagePP4} alt="popular image 4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
