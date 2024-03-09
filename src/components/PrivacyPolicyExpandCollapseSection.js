"use client";
import { useState } from "react";

const PrivacyPolicyExpandCollapseSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { content, heading } = props;
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="sc-89d0896a-3 fsVfvx">
      <div
        className={`sc-89d0896a-4 hztczG ${isOpen ? "open" : ""}`}
        onClick={toggleSection}
      >
        <li className="sc-89d0896a-6 gkpALl">{heading}</li>
        <span className="sc-89d0896a-5 bsjKYJ">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`sc-89d0896a-7 jnYVZQ ${isOpen ? "open" : ""}`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
};

export default PrivacyPolicyExpandCollapseSection;
