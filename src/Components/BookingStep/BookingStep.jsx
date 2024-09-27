import React from "react";
import "./BookingStep.scss"

export const BookingStep = () => {
  return (
    <div className="booking__step">
      <div className="booking-content">
        <h2>Booking with Green Travel</h2>
        <div className="desc">Just 3 steps to have amazing trip.</div>
      </div>
      <div className="booking-step">
        <ul className="list-step flex items-center">
          <li className="step">
            <div className="step-image">
              <div className="number">1</div>
              <div className="thumb">
                <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_step_1.png?1720165739244" alt="" />
              </div>
            </div>
            <div className="step-info">
              <h4>finding destination</h4>
              <div className="desc">
                Wherever you want to go, we have everything you need
              </div>
            </div>
          </li>
          <li className="step">
            <div className="step-image">
              <div className="number">2</div>
              <div className="thumb">
                <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_step_2.png?1720165739244" alt="" />
              </div>
            </div>
            <div className="step-info">
              <h4>Booking</h4>
              <div className="desc">
                Green Travel will help you book tickets directly quickly and conveniently
              </div>
            </div>
          </li>
          <li className="step">
            <div className="step-image">
              <div className="number">3</div>
              <div className="thumb">
                <img src="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/icon_step_3.png?1720165739244" alt="" />
              </div>
            </div>
            <div className="step-info">
              <h4>Payment</h4>
              <div className="desc">
              Complete the payment and get ready for your trip now
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
