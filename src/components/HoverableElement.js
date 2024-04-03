"use client";
import { useState } from "react";

const HoverableElement = ({
  children,
  heading,
  headingClass,
  imageSrc,
  content,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <article className="sc-24b8e865-5 jSmuVf">
      <h2
        className={`sc-24b8e865-6 ${headingClass} blockchain-title ${
          isHovered ? "open-title" : ""
        }`}
      >
        <div className="sc-24b8e865-2 koJlmS">
          <a
            rel="noreferrer noopener"
            href="/"
            target="blank"
            className="sc-24b8e865-3 dLdNEi"
          >
            {heading}
          </a>
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-24b8e865-10 cajrAm"
          >
            <path
              d="M7.5 7.99994L0.138784 0.499939L14.8612 0.499939L7.5 7.99994Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </h2>
      <p className="sc-24b8e865-7 gOMqfI blockchain">
        <span>{content}</span>
      </p>
      <div
        className={`sc-a234fd52-0 izpCte ${isHovered ? "block" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      <div className="sc-24b8e865-8 beUAXz">
        <span
          style={{
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <img
            alt="tech category img"
            src={imageSrc}
            decoding="async"
            data-nimg="fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </span>
      </div>
    </article>
  );
};

export default HoverableElement;
