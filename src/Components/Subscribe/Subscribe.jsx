import image from "../../assets/person-call.png";
import "./Subscribe.scss";

export const Subscribe = () => {
    return(
        <div className="subscribe section container">
            <div className="section-container grid">
                <div className="img-wrapper">
                    <img src={image} alt="" />
                </div>
                <div className="text-wrapper">
                    <h4>Best way to start your journey!</h4>
                    <p>We offer personalized itineraries tailored to individual preferences and interests.</p>
                    <button className="btn">Start Here</button>
                </div>
            </div>
        </div>
    )
}