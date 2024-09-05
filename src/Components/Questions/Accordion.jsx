import React from "react";

export const Accordion = ({
  title,
  desc,
  activeAccorion,
  setActiveAccordion,
}) => {
  return (
    <div className="accordion-container">
      <div className="title flex" onClick={()=>setActiveAccordion()}>
        {title}
        <span>
          {activeAccorion ? (
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          )}
        </span>
      </div>
      <p className={`desc ${activeAccorion ? "show" : ""}`}>{desc}</p>
    </div>
  );
};
