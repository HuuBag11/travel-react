import { useState, useEffect } from "react";
import "./Navbar.scss";
import { MenuAnimate } from "./MenuAnimate";

import imageLogoGreen from "../../assets/logo-no-background.svg";
import imageLogoWhite from "../../assets/logo-white-no-background.svg";

const Navbar = () => {
  const [navBar, setNavbar] = useState(false);
  const [scrollClass, setScrollClass] = useState("");
  const [imageLogo, setImageLogo] = useState(imageLogoWhite); 
  const showNavBar = () => {
    setNavbar((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollClass("on-scroll");
        setImageLogo(imageLogoGreen);
      } else {
        setScrollClass("");
        setImageLogo(imageLogoWhite);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navBar ${scrollClass}`}>
      <div className="logo">
        <img src={imageLogo} alt="logo" />
      </div>

      <MenuAnimate />

      <div className={`${navBar ? "open" : ""} menu`}>
        <ul>
          <li className="nav-list">Destinations</li>
          <li className="nav-list">Abous Us</li>
          <li className="nav-list">Testiminial</li>
          <li className="nav-list">Gallery</li>
        </ul>
      </div>

      <button className="button-signup btn">Book Now</button>

      <div className="btn-menu" onClick={showNavBar}>
        {navBar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 btn-close"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Navbar;
