import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CircleType from "circletype";
import { NavBar2 } from "../../Components/NavBar2/NavBar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./AboutPage.scss";
import { ImageTextIntro } from "../../Components/ImageTextIntro/ImageTextIntro";

import { CgPlayButtonO } from "react-icons/cg";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Portiforlio } from "../../Components/Portfolio/Portiforlio";
import { BookingStep } from "../../Components/BookingStep/BookingStep";
import { Footer } from "../../Components/Footer/Footer"
import { TextImageGSAP } from "../../Components/AnimateGSAP/TextAndImage";

const imageBanner =
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const dataIntro = [
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/64be877d8b7e4125e2ff3987/eda2a575-57a6-435f-a291-0b209d09b1f9/Travel+services+picture+homepage.jpg",
    title: "Travel Services",
    desc: "Offering access to the world's finest destinations and hotels, as our expert team crafts personalized itineraries, ensuring every journey shines with the allure of GOLD.",
    buttonText: "Learn more",
    buttonLink: "/",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/64be877d8b7e4125e2ff3987/c5cbd381-8071-4948-82dc-13409053d6a2/Concierge.jpg",
    title: "Concierge Services",
    desc: "Embark on an incredible journey with our expert concierge team, offering access to the world's most exclusive events, restaurants, experiences and more.",
    buttonText: "Learn more",
    buttonLink: "/",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/64be877d8b7e4125e2ff3987/22202166-20b7-4cdb-9b56-c271032cd00f/Perks.jpg",
    title: "Perks",
    desc: "Experience unparalleled luxury at our partner hotels, where working with SS Gold Travel grants you access to amenities such as upgraded rooms, resort credits, complimentary breakfast services, spa credits and more.",
    buttonText: "Learn more",
    buttonLink: "/",
  },
];

export const AboutPage = () => {
  const textRef = useRef(null);
  const circleTextRef = useRef(null);
  const videoRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const percentage = isHovered ? 100 : 0;

  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(!openPopup);

    if (!openPopup) {
      videoRef.current.play();
    }else{
      videoRef.current.pause();
    }
  };

  useLayoutEffect(() => {
    const circleType = new CircleType(textRef.current).radius(100);

    const handleScroll = () => {
      if (circleTextRef.current) {
        const rotation = window.scrollY * 0.15;
        circleTextRef.current.style.transform = `translateY(50%) rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      circleType.destroy();
    };
  }, []);

  return (
    <div className="about-page">
      <NavBar2 />
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${imageBanner})` }}
      >
        <h1>Unveil the World of Luxury</h1>
        <Link to="/booking" className="btn-white">
          Booking
        </Link>

        <div className="scroll-down">
          Scroll down
          <RiArrowDownWideFill />
        </div>

        <div className="circle-text" ref={circleTextRef}>
          <div className="text" ref={textRef}>
            Travel Services • Concierge Services • Perks • Meals • Luxury
            Accommodation •
          </div>
        </div>

        <div className="container-popup">
          <div
            className="btn-play-video"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleOpenPopup}
          >
            <CircularProgressbar
              value={percentage}
              styles={{
                path: {
                  stroke: `#EB662B`,
                  strokeWidth: 2,
                  transition: "stroke-dashoffset 1.5s ease 0s",
                },
                trail: {
                  stroke: "#fff",
                  strokeWidth: 2,
                },
              }}
            />

            <CgPlayButtonO className="icon-play" />
          </div>

          <div className={`container-video ${openPopup ? "show" : ""}`}>
            <div className="backdrop" onClick={handleOpenPopup}></div>
            <video
              ref={videoRef}
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
            ></video>
          </div>
        </div>
      </div>

      <BookingStep />

      {dataIntro.map((item, index) => {
        const imagePosition = index % 2 === 0 ? "left" : "right";

        return (
          <ImageTextIntro
            key={index}
            title={item.title}
            image={item.image}
            desc={item.desc}
            imagePosition={imagePosition}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
          />
        );
      })}

      <TextImageGSAP />

      <Footer />
    </div>
  );
};
