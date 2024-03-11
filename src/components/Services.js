"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
    <div className="sc-a03cc77c-2 epToUr" tabIndex="0">
      <button
        className={`sc-a03cc77c-1 bZbUXS ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span>Services</span>
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
            href="/services/web-development"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            Web // Desktop Development
          </Link>
        </div>
        <div>
          <Link
            href="/services/it-support"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            IT Support Services
          </Link>
        </div>
        <div>
          <Link
            href="/services/database-and-server-solutions"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            Server // Databases
          </Link>
        </div>
        <div>
          <Link
            href="/services/ux-ui-design"
            className="sc-a03cc77c-3 WZsEs"
            onClick={() => setIsOpen(false)}
          >
            UX/UI Design
          </Link>
        </div>
        <div>
          <Link
            href="/services/web-audit"
            className="sc-a03cc77c-3 WZsEs"
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
