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
    <div className="sc-16b52c14-2 hHvuce" tabIndex="0">
      <button
        className={`sc-16b52c14-1 irvpsA ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span>Company</span>
        <img
          width="9"
          height="5"
          src="/upArrowSidebar.c4cd097b.svg"
          alt="Arrow"
        />
      </button>
      <div className={`sc-16b52c14-0 kgiRzq ${isOpen ? "open" : ""}`} ref={ref}>
        <div>
          <Link
            href="/about-us"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="/faq"
            className="sc-16b52c14-3 iejRVt"
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
