"use client";
import { useState, useRef, useEffect } from "react";

const DatabaseServerListExpandCollapseSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { heading, description } = props;
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <li className="sc-4ce44efc-0 ZgUaG">
      <div
        className="sc-4ce44efc-1 hQfXWC card-content"
        onClick={toggleSection}
      >
        <div
          id="react-collapsed-toggle-"
          aria-controls="react-collapsed-panel-"
          aria-expanded={isOpen}
          type="button"
          role="button"
          tabIndex="0"
          className={`sc-4ce44efc-2 ${isOpen ? "kamYmm" : "jezTAc"}`}
        >
          <p className="sc-4ce44efc-3 eAYeUm">{heading}</p>
          <div className="sc-4ce44efc-4 jbyEwf arrowContainer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4151 11.53L24.6177 26.1001L24.5995 26.1003L24.5997 26.1185L9.35174 26.2827L9.32314 24.1957L21.0288 24.0697L9.79799 13.1179L11.2537 11.626L22.4806 22.574L22.3275 11.5529L24.4151 11.53Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4151 11.53L24.6177 26.1001L24.5995 26.1003L24.5997 26.1185L9.35174 26.2827L9.32314 24.1957L21.0288 24.0697L9.79799 13.1179L11.2537 11.626L22.4806 22.574L22.3275 11.5529L24.4151 11.53Z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          id="react-collapsed-panel-"
          aria-hidden={!isOpen}
          role="region"
          style={{
            boxSizing: "border-box",
            display: isOpen ? "block" : "none",
            height: isOpen ? "auto" : "0px",
            overflow: isOpen ? "visible" : "hidden",
            transition: "height 281ms linear 0s",
          }}
          ref={ref}
        >
          <p className="sc-4ce44efc-5 iQHYYZ">
            <section>
              <span>{description}</span>
            </section>
          </p>
        </div>
      </div>
    </li>
  );
};

export default DatabaseServerListExpandCollapseSection;
