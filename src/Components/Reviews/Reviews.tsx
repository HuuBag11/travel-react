import React, {useEffect} from "react";
import "./Reviews.scss";

import user1 from "../../assets/users/user1.jpg";
import user2 from "../../assets/users/user2.jpg";
import user3 from "../../assets/users/user3.jpg";
import user4 from "../../assets/users/user4.jpg";
import user5 from "../../assets/users/user5.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const imageUsers = [user1,user2,user3,user4];

export const Reviews = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div className="review section container">
      <div className="section-container grid">
        <div className="text-wrapper" data-aos="fade-up">
          <span>From our clients</span>
          <h3>Real travel history from our belowed clients</h3>
          <p>
            By choosing us as their tour agency, customers an experts an
            enriching and enjoyable trvel experince, filled with unforgettable
            memorries that will last a lifetime.
          </p>

          <div className="stars flex">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                  key={item}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              );
            })}
          </div>

          <div className="client-images flex" data-aos="fade-up">
            {
            imageUsers.map((user, index) => {
              return (
                <div className="item" key={index}>
                  <img src={user} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="img-wrapper" data-aos="fade-up">
          <img src={user5} alt="" />
        </div>
      </div>
    </div>
  );
};
