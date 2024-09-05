import React, { useState, useEffect } from "react";
import "./Questions.scss";
import faqData from "./FAQData";
import { Accordion } from "./Accordion";

import Aos from "aos";
import "aos/dist/aos.css";

export const Questions = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  useEffect(()=>{
    Aos.init({duration: 2000})
  })

  return (
    <div className="questions section container">
      <div className="sectionHeading" data-aos="fade-up">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className="section-container grid">
        <div className="accordion grid">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              desc={item.answer}
              activeAccorion={index === activeAccordion}
              setActiveAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>

        <div className="form">
          <div className="sectionHeading" data-aos="fade-up">
            <h4>Do you have specific question?</h4>
            <p>
              Please fill the form below and our dedicated team will get in
              touch with you as soon as possible.
            </p>
          </div>

          <div className="form-content flex flex-col" data-aos="fade-up">
            <input type="email" placeholder="Enter email address" />
            <textarea name="" placeholder="Enter your question here"></textarea>
            <button type="submit" className="btn">
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
