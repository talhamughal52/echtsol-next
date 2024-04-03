"use client";
import { useState } from "react";

const MobileHoverableElement = ({
  children,
  heading,
  headingSvgClass,
  headingClass,
  contentClass,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ margin: "0px auto" }}>
      <article
        className={`ssc-a527d0ca-2 bBjVIT ${isOpen ? "open-catrgory" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 347 143"
          fill="none"
          className="sc-a527d0ca-7 ilCqYo"
        >
          <path
            d="M1 49.4453C1 45.027 4.58172 41.4453 9 41.4453H14.2538C17.9247 41.4453 21.1246 38.9469 22.0149 35.3856L28.9851 7.50503C29.8754 3.94369 33.0753 1.44531 36.7462 1.44531H214.048C217.581 1.44531 220.695 3.76266 221.71 7.14653L230.29 35.7441C231.305 39.128 234.419 41.4453 237.952 41.4453H338C342.418 41.4453 346 45.027 346 49.4453V133.445C346 137.864 342.418 141.445 338 141.445H9C4.58172 141.445 1 137.864 1 133.445V49.4453Z"
            fill="#F1EFED"
            stroke="black"
            stroke-width="2"
          ></path>
        </svg>
        <svg className={`sc-a527d0ca-3 ${headingSvgClass}`}>
          <div className={`sc-24b8e865-6 iTmmYD ${headingClass}`}>
            <h2>{heading}</h2>
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`sc-a527d0ca-6 cnvFYY ${isOpen ? "open" : ""}`}
            >
              <path
                d="M7.5 7.99994L0.138784 0.499939L14.8612 0.499939L7.5 7.99994Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </svg>
        <div
          className={`ssc-a527d0ca-2 ${contentClass} ${headingClass} ${
            isOpen ? "open-title" : ""
          }`}
          onClick={toogleSection}
        >
          <h2 className={`sc-a527d0ca-4 EqVQj ${heading}`}>{heading}</h2>
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`sc-a527d0ca-6 cnvFYY ${isOpen ? "open" : ""}`}
          >
            <path
              d="M7.5 7.99994L0.138784 0.499939L14.8612 0.499939L7.5 7.99994Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <p className={`sc-a527d0ca-5 gAPDUd ${headingClass}`}>
          <span>{content}</span>
        </p>
        <div style={{ marginTop: "-1em" }}>
          <div className={`sc-a234fd52-0 izpCte ${isOpen ? "block" : ""}`}>
            {children}
          </div>
        </div>
      </article>
    </div>
  );
};

export default MobileHoverableElement;
