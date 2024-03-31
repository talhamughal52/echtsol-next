"use client";
import Link from "next/link";
import "../css/navbar.css";
import Company from "./Company";
import Services from "./Services";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sc-1c6e7200-0 hYEXCu navbar">
      <div className="sc-1c6e7200-1 ccyimB">
        <div className="sc-1c6e7200-2 koXNTb">
          <Link
            href="/"
            className="sc-1c6e7200-3 gJUEHi"
            onClick={() => setIsOpen(false)}
          >
            <div className="sc-feb788d7-0 gmCnzC header">
              <div className="sc-feb788d7-1 erzWvU">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                  }}
                >
                  <img
                    alt="logo"
                    sizes="100vw"
                    srcSet="
                        /logo230623.cdc60988.svg  640w,
                        /logo230623.cdc60988.svg  750w,
                        /logo230623.cdc60988.svg  828w,
                        /logo230623.cdc60988.svg 1080w,
                        /logo230623.cdc60988.svg 1200w,
                        /logo230623.cdc60988.svg 1920w,
                        /logo230623.cdc60988.svg 2048w,
                        /logo230623.cdc60988.svg 3840w
                    "
                    src="/logo230623.cdc60988.svg"
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
                      objectPosition: "center",
                    }}
                  />
                </span>
              </div>
            </div>
          </Link>
          <div className="sc-942ab72b-3 dnuOfe">
            <button
              aria-label="burger-btn"
              className={`sc-942ab72b-4 ${isOpen ? "cAXqOE" : "cXoWrt"}`}
              onClick={toggleMobileMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
        <MobileNavbar open={isOpen} setIsOpen={setIsOpen} />
        <menu className="sc-1c6e7200-5 fXeVZC">
          <Link href="/portfolio" className="sc-1c6e7200-4 IziRp">
            <span className="sc-1c6e7200-6 eGMqUE">Portfolio</span>
          </Link>
          {/* <div className="sc-16b52c14-2 hHvuce" tabindex="0">
              <button className="sc-16b52c14-1 irvpsA">
                <span>Services</span>
                <img
                  width="9"
                  height="5"
                  src="/upArrowSidebar.c4cd097b.svg"
                  alt="Arrow"
                />
              </button>
              <div className="sc-16b52c14-0 kgiRzq">
                <div>
                  <a
                    href="/services/blockchain"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Crypto // Blockchain Development
                  </a>
                </div>
                <div>
                  <a
                    href="/services/web-development"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Web // Desktop Development
                  </a>
                </div>
                <div>
                  <a
                    href="/services/mobile-app-development"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Mobile Development
                  </a>
                </div>
                <div>
                  <a
                    href="/services/cloud-solutions"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Cloud Solutions
                  </a>
                </div>
                <div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    href="/services/ai"
                  >
                    <a
                      style={{ width: "initial", paddingRight: 0 }}
                      className="sc-16b52c14-3 iejRVt"
                    >
                      AI Solutions
                    </a>
                    <div className="sc-16b52c14-4 elgnRm">
                      <span>new</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.45402 4.8276H2.46061C4.1545 4.82771 5.57232 6.2563 5.62109 8.01215H6.46304C6.51193 6.25619 7.92975 4.8276 9.62375 4.8276L9.63506 4.82771L9.64747 4.82705L9.62847 4.10639L9.63012 3.98533H9.62364C7.92975 3.98522 6.51193 2.55663 6.46315 0.800781H5.62109C5.57232 2.55652 4.15472 3.98489 2.46105 3.98533L2.45522 3.98522L2.44775 3.98544L2.45643 4.64513L2.45402 4.8276Z"
                          fill="#F1EFED"
                        ></path>
                        <path
                          d="M13.9459 9.02413L13.9205 8.31116L13.9227 8.18296L13.9159 8.18285H13.9146C12.6905 8.18274 11.666 7.14887 11.6306 5.87793H10.7886C10.7533 7.14865 9.72901 8.18241 8.5052 8.18285L8.49828 8.18274L8.48828 8.18307L8.49982 8.83035L8.49641 9.02512L8.50333 9.02523H8.50465C9.72868 9.02523 10.7533 10.0592 10.7886 11.33H11.6306C11.666 10.0592 12.6904 9.02534 13.9145 9.02523L13.9291 9.02534L13.9459 9.02413Z"
                          fill="#F1EFED"
                        ></path>
                        <path
                          d="M7.48807 12.051H7.47994C6.25591 12.0509 5.23127 11.017 5.19601 9.74609H4.35395C4.31869 11.0168 3.29427 12.0507 2.07046 12.0509H2.06398L2.0542 12.0512L2.06529 12.6966L2.06178 12.8932L2.0687 12.8933H2.06991C3.29405 12.8934 4.31858 13.9273 4.35395 15.1982H5.1959C5.23127 13.9274 6.25569 12.8935 7.47972 12.8933L7.4939 12.8934L7.51015 12.8923L7.48566 12.1819L7.48807 12.051Z"
                          fill="#F1EFED"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    href="/services/it-support"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    IT Support Services
                  </a>
                </div>
                <div>
                  <a
                    href="/services/database-and-server-solutions"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Server // Databases
                  </a>
                </div>
                <div>
                  <a
                    href="/services/ux-ui-design"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    UX/UI Design
                  </a>
                </div>
                <div>
                  <a
                    href="/services/web-audit"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Web Audit
                  </a>
                </div>
                <div>
                  <a
                    href="/services/mobile-audit"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Mobile App Audit
                  </a>
                </div>
                <div>
                  <a
                    href="/services/smart-contract-audit"
                    className="sc-16b52c14-3 iejRVt"
                  >
                    Dapp Audit // Tokenomic Planning
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-16b52c14-2 hHvuce" tabindex="0">
              <button className="sc-16b52c14-1 irvpsA">
                <span>Company</span>
                <img
                  width="9"
                  height="5"
                  src="/upArrowSidebar.c4cd097b.svg"
                  alt="Arrow"
                />
              </button>
              <div className="sc-16b52c14-0 kgiRzq">
                <div>
                  <a href="/about-us" className="sc-16b52c14-3 iejRVt">
                    About us
                  </a>
                </div>
                <div>
                  <a href="/careers" className="sc-16b52c14-3 iejRVt">
                    Careers
                  </a>
                </div>
                <div>
                  <a href="/contact" className="sc-16b52c14-3 iejRVt">
                    Contact
                  </a>
                </div>
                <div>
                  <a href="/faq" className="sc-16b52c14-3 iejRVt">
                    FAQ
                  </a>
                </div>
              </div>
            </div> */}
          <Services />
          <Company />
          <Link href="/blog" className="sc-1c6e7200-4 IziRp">
            <span className="sc-1c6e7200-6 eGMqUE">Blog</span>
          </Link>
        </menu>
      </div>
    </nav>
  );
}

export default Navbar;
