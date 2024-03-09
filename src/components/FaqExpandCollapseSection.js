"use client";
import { useState } from "react";

const FaqExpandCollapseSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { children, heading } = props;
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const sectionStyle = isOpen
    ? {
        boxSizing: "border-box",
      }
    : {
        boxSizing: "border-box",
        display: "none",
        transition: "height 281ms linear 0s",
        height: "0px",
        overflow: "hidden",
      };

  return (
    <div className={`sc-cf8392dd-2 ${isOpen ? "gAhaoV" : "fQvmTM"}`}>
      <div className="sc-cf8392dd-1 GlwzZ">
        <div
          className={`sc-cf8392dd-4 ibcYua ${
            isOpen ? "fQgkBt open" : "ibcYua"
          }`}
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
          style={sectionStyle}
          //   dangerouslySetInnerHTML={{ __html: content }}
        >
          {/* <div className="sc-cf8392dd-6 eSINBZ">
            <div className="sc-cf8392dd-7 jTZiDN">
              <p>
                <span style={{ fontSize: "16px" }}>
                  <span style={{ fontFamily: "NAMU" }}>
                    <span
                      style={{
                        color: "rgb(0, 0, 0)",
                        backgroundColor: "transparent",
                      }}
                    >
                      You definitely need one of our free services — 8h
                      estimation of a project. It will answer all your basic
                      questions, give you insights and boost your desire to
                      cooperate with us. To navigate you, MVP development takes
                      from <strong>1.5 to 2 months.</strong>
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default FaqExpandCollapseSection;
