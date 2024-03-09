import Link from "next/link";
import Image from "next/image";
import "../css/navbar.css";
import Company from "./Company";
import Services from "./Services";

function Navbar() {
  return (
    <nav className="sc-360c9b73-0 fwBgZm navbar">
      <div className="sc-360c9b73-1 bPWKfc">
        <div className="sc-360c9b73-2 dlJMQq">
          <Link href="/" className="sc-360c9b73-3 bUKBFB">
            <div className="sc-bf71e4fb-0 bshMkq header">
              <div className="sc-bf71e4fb-1 hWlzSG">
                <span className="navBarImageSpan">
                  <Image
                    className="navBarImage"
                    srcSet="
                    /logo230623.cdc60988.svg 640w,
                    /logo230623.cdc60988.svg 750w,
                    /logo230623.cdc60988.svg 828w,
                    /logo230623.cdc60988.svg 1080w,
                    /logo230623.cdc60988.svg 1200w,
                    /logo230623.cdc60988.svg 1920w,
                    /logo230623.cdc60988.svg 2048w,
                    /logo230623.cdc60988.svg 3840w"
                    src="/logo230623.cdc60988.svg"
                    alt="my logo image"
                    width={150}
                    height={40}
                  />
                </span>
              </div>
            </div>
          </Link>
          <div className="sc-662d0b29-3 dXgxTO">
            <button aria-label="burger-btn" className="sc-662d0b29-4 jVoUGt">
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
        <menu className="sc-360c9b73-5 dEAVl">
          <Link href="/portfolio" className="sc-360c9b73-4 cENHzE">
            <span className="sc-360c9b73-6 gNSdKm">Portfolio</span>
          </Link>
          <Services />
          <Company />
          <Link href="/blog" className="sc-360c9b73-4 cENHzE">
            <span className="sc-360c9b73-6 gNSdKm">Blog</span>
          </Link>
        </menu>
      </div>
    </nav>
  );
}

export default Navbar;
