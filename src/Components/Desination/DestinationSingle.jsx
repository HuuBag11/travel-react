import React from "react"

// interface DestinationProps{
//     id: String,
//     img: String,
//     name: String,
//     location: String,
//     rating: number,
// } Sử dụng typescript mới dùng interface

export const DestinationSingle = ({id, img, name, location, rating}) => {
  return (
    <div className="single-destination">
      <div className="img-container">
        <img src={img} alt="destination image" />
      </div>
      <div className="desc-info flex">
        <div className="text flex">
          <div>
            <span className="name">{name}</span>
            <p className="flex">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {location}
            </p>
          </div>
          <div className="rating">{rating}</div>
        </div>
      </div>
    </div>
  );
};
