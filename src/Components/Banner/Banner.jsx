import "./Banner.scss";

import Video from "../../assets/banner.mp4";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="video-bg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
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
    </div>
  );
};
