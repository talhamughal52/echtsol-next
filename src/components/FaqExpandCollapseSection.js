"use client";
import { useState } from "react";

const FaqExpandCollapseSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { children, heading } = props;
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sc-cf8392dd-2 ${isOpen ? "gAhaoV" : "fQvmTM"}`}>
      <div className="sc-cf8392dd-1 GlwzZ">
        <div
          className={`sc-cf8392dd-4 ${isOpen ? "fQgkBt open" : "ibcYua"}`}
          id="react-collapsed-toggle-"
          aria-controls="react-collapsed-panel-"
          aria-expanded={`${isOpen ? "false" : "true"}`}
          role="button"
          tabIndex="0"
          onClick={toggleSection}
        >
          <p className="sc-cf8392dd-5 JIWWg">{heading}</p>
          <div className="sc-cf8392dd-3 LbOsG">{isOpen ? "-" : "+"}</div>
        </div>
        <div
          id="react-collapsed-panel-"
          aria-hidden={`${isOpen ? "false" : "true"}`}
          role="region"
          style={{
            boxSizing: "border-box",
            display: isOpen ? "block" : "none",
            height: isOpen ? "auto" : "0px",
            overflow: isOpen ? "visible" : "hidden",
            transition: "height 281ms linear 0s",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FaqExpandCollapseSection;
