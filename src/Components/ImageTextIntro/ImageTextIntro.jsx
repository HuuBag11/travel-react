import React from "react"
import { Link } from "react-router-dom"

import "./ImageTextIntro.scss"

export const ImageTextIntro = ({image, title, desc, buttonText, buttonLink, imagePosition}) => {
    return(
        <div className={`image_text_intro ${imagePosition === "right" ? "right" : ""}`}>
            <div className="wrapper-image">
                <img src={image} alt="" />
            </div>
            <div className="wrapper-text">
                <h4>{title}</h4>
                <div className="desc">{desc}</div>
                <Link to={buttonLink}>{buttonText}</Link>
            </div>
        </div>
    )
}