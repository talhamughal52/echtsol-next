import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const MobileCompany = ({ setMobileIsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef(null);
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
    <div className="sc-942ab72b-1 gLYONc">
      <div
        tabIndex="0"
        className={`sc-a2c2b163-0 fpxhRf ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="sc-a2c2b163-1 gHveg">
          Company
          <svg
            className="sc-a2c2b163-5 eFmkhy"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.49999 5C4.33869 5 4.17741 4.93998 4.05443 4.82018L0.184628 1.0486C-0.0615425 0.808678 -0.0615425 0.419689 0.184628 0.179867C0.430698 -0.0599556 0.829741 -0.0599556 1.07593 0.179867L4.49999 3.51717L7.92406 0.179983C8.17023 -0.0598391 8.56923 -0.0598391 8.81528 0.179983C9.06157 0.419806 9.06157 0.808794 8.81528 1.04871L4.94554 4.8203C4.8225 4.94011 4.66122 5 4.49999 5Z"></path>
          </svg>
        </div>
        <div
          className={`sc-a2c2b163-2 ctluyH ${isOpen ? "open" : ""}`}
          ref={ref}
        >
          <div className={`sc-a2c2b163-3 byAPvr ${isOpen ? "open" : ""}`}>
            <Link
              href="/about-us"
              className="sc-a2c2b163-4 fzwbGJ"
              onClick={() => setMobileIsOpen(false)}
            >
              About us
            </Link>
          </div>
          <div className={`sc-a2c2b163-3 fhGlCf ${isOpen ? "open" : ""}`}>
            <Link
              href="/contact"
              className="sc-a2c2b163-4 fzwbGJ"
              onClick={() => setMobileIsOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className={`sc-a2c2b163-3 gsELwD ${isOpen ? "open" : ""}`}>
            <Link
              href="/faq"
              className="sc-a2c2b163-4 fzwbGJ"
              onClick={() => setMobileIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCompany;
