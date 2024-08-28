import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [navBar, setNavbar] = useState(false);
  const showNavBar = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <div className="navBar">
      <div className="logo">RYOTravel</div>

      <div className={`${navBar ? "open" : ""} menu`}>
        <ul>
          <li className="nav-list">Destinations</li>
          <li className="nav-list">Abous Us</li>
          <li className="nav-list">Testiminial</li>
          <li className="nav-list">Gallery</li>
        </ul>
      </div>

      <button className="button-signup btn">Sign up</button>

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
