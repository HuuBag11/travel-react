import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import "./MenuAnimate.scss";

export const MenuAnimate = () => {
  return (
    <div className="grid menu-animate">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul
      className="list-item"
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
    >
      <Tab setPosition={setPosition} to="/">Home</Tab>
      <Tab setPosition={setPosition} to="/destinations">Destinations</Tab>
      <Tab setPosition={setPosition} to="/about-us">Abous Us</Tab>
      <Tab setPosition={setPosition} to="/testimonials">Testiminial</Tab>
      <Tab setPosition={setPosition} to="/gallery">Gallery</Tab>
      <CurSor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
    >
      <Link to={to} className="tab-link">{children}</Link>
      
    </li>
  );
};

const CurSor = ({ position }) => {
  return <motion.li animate={position} className="cursor" />;
};
