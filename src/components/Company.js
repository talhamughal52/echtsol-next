"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Company() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false); // Close the menu when clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="sc-a03cc77c-2 epToUr" tabIndex="0">
      <button
        className={`sc-a03cc77c-1 bZbUXS ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span>Company</span>
        <Image
          src="/upArrowSidebar.c4cd097b.svg"
          alt="Arrow"
          width={9}
          height={5}
        />
      </button>
      <div className={`sc-a03cc77c-0 fMRLZf ${isOpen ? "open" : ""}`} ref={ref}>
        <div>
          <Link
            href="/about-us"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="/faq"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Company;
