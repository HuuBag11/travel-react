import React from "react";
import { useParams } from "react-router-dom";
import { listDestinations } from "../Destinations/dataDestinations";
import { NavBar2 } from "../../Components/NavBar2/NavBar";
import { Link } from "react-router-dom";

import { MdOutlineLocationOn } from "react-icons/md";
import "./DestinationDetail.scss";

import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const DestinationDetail = () => {
  const { destinationID } = useParams();

  const idNumber = parseInt(destinationID);
  const destination = listDestinations.find((dest) => dest.id === idNumber);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  function getRandomDestinations(list, firstCount, randomCount) {
    const firstItems = list.slice(0, firstCount);
    // Trộn và chọn ngẫu nhiên
    const shuffled = firstItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  }
  const randomDestinations = getRandomDestinations(listDestinations, 15, 8);

  return (
    <div className="destination-detail">
      <div
        className="banner"
        style={{ backgroundImage: `url(${destination.thumbnail})` }}
      >
        <NavBar2 />
        <div className="banner-content">
          <span>
            <MdOutlineLocationOn />
            {destination.location}
          </span>
          <h1>{destination.name}</h1>
          <div className="desc">{destination.description}</div>
        </div>
      </div>
      <div className="top-destination">
        <h3>Recommended Destinations</h3>
        <Carousel
          afterChange={onChange}
          draggable={true}
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={false}
          arrows={false}
          arrowSize={25}
        >
          {randomDestinations.slice(0, 8).map((item) => (
            <div
              className="destination-item"
              style={contentStyle}
              key={item.id}
            >
              <div className="img-wrapper">
                <img src={item.thumbnail} alt={item.name} />
              </div>

              <div className="content">
                <div className="title">
                  <Link to={`/destinations/${item.id}`}>
                    <div className="name">{item.name}</div>
                  </Link>
                  <div className="rating">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    {item.rating}
                  </div>
                </div>
                <div className="desc">{item.description}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
