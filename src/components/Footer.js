"use client";
import Link from "next/link";
import "../css/footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const showFooter = useSelector((state) => state.footer.value);
  if (!showFooter) {
    return;
  }
  return (
    <footer className="sc-95f1520e-0 iayhJO">
      <div className="sc-95f1520e-1 bcCAJX">
        <Link href="/" className="sc-95f1520e-5 ktIKeG">
          <div className="sc-feb788d7-0 gmCnzC footer">
            <div className="sc-feb788d7-1 erzWvU">
              <span className="footerImageSpan">
                <img
                  className="footerImage"
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
                />
              </span>
            </div>
          </div>
        </Link>
        <div className="sc-95f1520e-12 jOdYIB">
          <div className="sc-95f1520e-13 kgfqSm">
            <a href="#" className="sc-95f1520e-3 bGBWTz">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-95f1520e-9 geoUmk"
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z"></path>
              </svg>
              <span className="sc-95f1520e-4 kUEBmY">contact@cgsteam.io</span>
              <div className="sc-95f1520e-2 fayzNH">
                If you want to become our client
              </div>
            </a>
            <a href="#" className="sc-95f1520e-3 bGBWTz">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-95f1520e-9 geoUmk"
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z"></path>
              </svg>
              <span className="sc-95f1520e-4 kUEBmY">hr@cgsteam.io</span>
              <div className="sc-95f1520e-2 fayzNH">
                If you want to become our colleague
              </div>
            </a>
          </div>
          <Link href="/privacy-policy" className="sc-95f1520e-11 dWIyMF">
            Privacy Policy
          </Link>
        </div>
      </div>
      <nav className="sc-95f1520e-7 jEyfRN">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-95f1520e-6 kaRynf"
        >
          <div className="sc-95f1520e-10 ezwlEd">
            <span className="footerNavIconsSpan">
              <img
                alt="footer icons img"
                srcSet="
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg  640w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg  750w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg  828w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 1080w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 1200w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 1920w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 2048w,
                  /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 3840w"
                src="/d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg"
                decoding="async"
                data-nimg="fill"
                className="footerNavIcons"
              />
            </span>
          </div>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-95f1520e-6 kaRynf"
        >
          <div className="sc-95f1520e-10 ezwlEd">
            <span className="footerNavIconsSpan">
              <img
                alt="footer icons img"
                srcSet="
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg  640w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg  750w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg  828w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg 1080w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg 1200w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg 1920w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg 2048w,
                  /03decc94-154c-40f0-b808-0d7075c774ff.svg 3840w"
                src="/03decc94-154c-40f0-b808-0d7075c774ff.svg"
                decoding="async"
                data-nimg="fill"
                className="footerNavIcons"
              />
            </span>
          </div>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-95f1520e-6 kaRynf"
        >
          <div className="sc-95f1520e-10 ezwlEd">
            <span className="footerNavIconsSpan">
              <img
                alt="footer icons img"
                srcSet="
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg  640w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg  750w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg  828w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg 1080w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg 1200w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg 1920w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg 2048w,
                  /02f35bb2-979f-4828-89e1-34fa073f8287.svg 3840w"
                src="/02f35bb2-979f-4828-89e1-34fa073f8287.svg"
                decoding="async"
                data-nimg="fill"
                className="footerNavIcons"
              />
            </span>
          </div>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-95f1520e-6 kaRynf"
        >
          <div className="sc-95f1520e-10 ezwlEd">
            <span className="footerNavIconsSpan">
              <img
                alt="footer icons img"
                srcSet="
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg  640w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg  750w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg  828w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 1080w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 1200w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 1920w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 2048w,
                  /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 3840w"
                src="/4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg"
                decoding="async"
                data-nimg="fill"
                className="footerNavIcons"
              />
            </span>
          </div>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-95f1520e-6 kaRynf"
        >
          <div className="sc-95f1520e-10 ezwlEd">
            <span className="footerNavIconsSpan">
              <img
                alt="footer icons img"
                srcSet="
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg  640w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg  750w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg  828w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 1080w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 1200w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 1920w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 2048w,
                  /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 3840w"
                src="/dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg"
                decoding="async"
                data-nimg="fill"
                className="footerNavIcons"
              />
            </span>
          </div>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
