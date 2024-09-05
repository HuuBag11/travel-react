import React, {useEffect} from "react"
import "./Promotion.scss"

import imgBg from "../../assets/promotion-bg.png"
import imgMain from "../../assets/promotion-1.png"
import imgShape1 from "../../assets/promotion-2.svg"
import imgShape2 from "../../assets/promotion-3.svg"

import Aos from "aos";
import "aos/dist/aos.css";


export const Promotion = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      })

    return(
        <div className="cta promotion container section">
            <div className="cta__bg">
                <img src={imgBg} alt="image background" />
                <div className="cta__image">
                    <img src={imgMain} alt="" />
                    <img src={imgShape1} alt="" />
                    <img src={imgShape2} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="cta__content">
                    <h2 data-aos="fade-up">
                        Grab up to <span>35% off</span> <br /> on your favorite <br /> Destination
                    </h2>
                    <p data-aos="fade-up">Limit offer, don't miss the opportunity</p>
                    <button className="btn" data-aos="fade-right">Book Now</button>
                </div>
            </div>
        </div>
    )
}