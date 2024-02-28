import Link from "next/link";
import Image from "next/image";
import "../css/navbar.css";
import Company from "./Company";

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
          <div className="sc-a03cc77c-2 epToUr" tabIndex="0">
            <button className="sc-a03cc77c-1 bZbUXS">
              <span>Services</span>
              <Image
                src="https://cgsteam.io/_next/static/media/upArrowSidebar.c4cd097b.svg"
                alt="Arrow"
                width={9}
                height={5}
              />
            </button>
            <div className="sc-a03cc77c-0 fMRLZf">
              <div>
                <a href="/services/blockchain" className="sc-a03cc77c-3 WZsEs">
                  Crypto // Blockchain Development
                </a>
              </div>
              <div>
                <a
                  href="/services/web-development"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  Web // Desktop Development
                </a>
              </div>
              <div>
                <a
                  href="/services/mobile-app-development"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  Mobile Development
                </a>
              </div>
              <div>
                <a
                  href="/services/cloud-solutions"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  Cloud Solutions
                </a>
              </div>
              <div>
                <a href="/services/ai" className="sc-a03cc77c-3 WZsEs">
                  AI Solutions
                </a>
              </div>
              <div>
                <a href="/services/it-support" className="sc-a03cc77c-3 WZsEs">
                  IT Support Services
                </a>
              </div>
              <div>
                <a
                  href="/services/database-and-server-solutions"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  Server // Databases
                </a>
              </div>
              <div>
                <a
                  href="/services/ux-ui-design"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  UX/UI Design
                </a>
              </div>
              <div>
                <a href="/services/web-audit" className="sc-a03cc77c-3 WZsEs">
                  Web Audit
                </a>
              </div>
              <div>
                <a
                  href="/services/mobile-audit"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  Mobile App Audit
                </a>
              </div>
              <div>
                <a
                  href="/services/smart-contract-audit"
                  className="sc-a03cc77c-3 WZsEs"
                >
                  Dapp Audit // Tokenomic Planning
                </a>
              </div>
            </div>
          </div>
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
