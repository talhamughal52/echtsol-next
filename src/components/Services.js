"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function Services() {
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
        <span>Services</span>
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
            href="/services/web-development"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            Web // Desktop Development
          </Link>
        </div>
        <div>
          <Link
            href="/services/it-support"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            IT Support Services
          </Link>
        </div>
        <div>
          <Link
            href="/services/database-and-server-solutions"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            Server // Databases
          </Link>
        </div>
        <div>
          <Link
            href="/services/ux-ui-design"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            UX/UI Design
          </Link>
        </div>
        <div>
          <Link
            href="/services/web-audit"
            className="sc-16b52c14-3 iejRVt"
            onClick={() => setIsOpen(false)}
          >
            Web Audit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
