import Link from "next/link";
import MobileServices from "./MobileServices";
import MobileCompany from "./MobileCompany";

const MobileNavbar = ({ open, setIsOpen }) => {
  return (
    <div className={`sc-942ab72b-0 WvLWV ${open ? "open" : "hide"}`}>
      <nav className="sc-942ab72b-2 dYutob">
        <div className="sc-942ab72b-1 gLYONc">
          <Link
            href="/portfolio"
            className="sc-1c6e7200-7 bqDyJy"
            style={{ display: "block" }}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
        </div>
        <MobileServices setMobileIsOpen={setIsOpen} />
        <MobileCompany setMobileIsOpen={setIsOpen} />
        <div className="sc-942ab72b-1 gLYONc">
          <Link
            href="/blog"
            className="sc-1c6e7200-7 bqDyJy"
            style={{ display: "block" }}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
      </nav>
      <div className="sc-942ab72b-6 cfcCjD">
        <div className="sc-942ab72b-7 kPWwvP">
          <a href="mailto:contact@cgsteam.io" className="sc-942ab72b-8 gmmlDL">
            <section>
              <span>contact@cgsteam.io</span>
            </section>
          </a>
          <a href="mailto:hr@cgsteam.io" className="sc-942ab72b-8 gmmlDL">
            <section>
              <span>hr@cgsteam.io</span>
            </section>
          </a>
        </div>
        <div className="sc-942ab72b-9 dveASt">
          <a
            target="_blank"
            rel="noopener"
            href="/"
            className="sc-942ab72b-11 eqUMwq"
          >
            <div className="sc-942ab72b-10 hmkZUQ">
              <span className="navbarImageSpan">
                <img
                  alt="burger footer icon image"
                  sizes="100vw"
                  srcSet="
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg  640w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg  750w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg  828w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 1080w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 1200w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 1920w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 2048w,
              /d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg 3840w
            "
                  src="/d4dc5240-ac91-461b-9ddd-ef9ffeb93c1a.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="navbarImage"
                />
              </span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="/"
            className="sc-942ab72b-11 eqUMwq"
          >
            <div className="sc-942ab72b-10 hmkZUQ">
              <span className="navbarImageSpan">
                <img
                  alt="burger footer icon image"
                  sizes="100vw"
                  srcSet="
              /03decc94-154c-40f0-b808-0d7075c774ff.svg  640w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg  750w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg  828w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg 1080w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg 1200w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg 1920w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg 2048w,
              /03decc94-154c-40f0-b808-0d7075c774ff.svg 3840w
            "
                  src="/03decc94-154c-40f0-b808-0d7075c774ff.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="navbarImage"
                />
              </span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="/"
            className="sc-942ab72b-11 eqUMwq"
          >
            <div className="sc-942ab72b-10 hmkZUQ">
              <span className="navbarImageSpan">
                <img
                  alt="burger footer icon image"
                  sizes="100vw"
                  srcSet="
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg  640w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg  750w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg  828w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg 1080w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg 1200w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg 1920w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg 2048w,
              /02f35bb2-979f-4828-89e1-34fa073f8287.svg 3840w
            "
                  src="/02f35bb2-979f-4828-89e1-34fa073f8287.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="navbarImage"
                />
              </span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="/"
            className="sc-942ab72b-11 eqUMwq"
          >
            <div className="sc-942ab72b-10 hmkZUQ">
              <span className="navbarImageSpan">
                <img
                  alt="burger footer icon image"
                  sizes="100vw"
                  srcSet="
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg  640w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg  750w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg  828w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 1080w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 1200w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 1920w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 2048w,
              /4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg 3840w
            "
                  src="/4c2afae2-f926-4abb-8c5f-4813e58d0d36.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="navbarImage"
                />
              </span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="/"
            className="sc-942ab72b-11 eqUMwq"
          >
            <div className="sc-942ab72b-10 hmkZUQ">
              <span className="navbarImageSpan">
                <img
                  alt="burger footer icon image"
                  sizes="100vw"
                  srcSet="
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg  640w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg  750w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg  828w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 1080w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 1200w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 1920w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 2048w,
            /dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg 3840w
            "
                  src="/dfe8a98f-5bce-45a6-9c01-4634e5cf1275.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="navbarImage"
                />
              </span>
            </div>
          </a>
        </div>
        <div className="sc-942ab72b-13 gDftKW">
          <div className="sc-c8e937f7-16 bHtvoe no-margin-top">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-c8e937f7-17 epAzYV"
            >
              <div className="sc-c8e937f7-18 bbplka no-margin-top">
                <div className="sc-c8e937f7-21 fnaqeE">
                  <span className="navbarImageSpan">
                    <img
                      alt="Icon"
                      sizes="100vw"
                      srcSet="
                  /whatsUp.2b815c02.svg  640w,
                  /whatsUp.2b815c02.svg  750w,
                  /whatsUp.2b815c02.svg  828w,
                  /whatsUp.2b815c02.svg 1080w,
                  /whatsUp.2b815c02.svg 1200w,
                  /whatsUp.2b815c02.svg 1920w,
                  /whatsUp.2b815c02.svg 2048w,
                  /whatsUp.2b815c02.svg 3840w
                "
                      src="/whatsUp.2b815c02.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </div>
                WhatsApp
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-c8e937f7-17 epAzYV"
            >
              <div className="sc-c8e937f7-19 eQaJuB no-margin-top">
                <div className="sc-c8e937f7-20 gaMrCo no-margin-top">
                  <span className="navbarImageSpan">
                    <img
                      alt="Icon"
                      sizes="100vw"
                      srcSet="
                  /telegram.3bbd1a2f.svg  640w,
                  /telegram.3bbd1a2f.svg  750w,
                  /telegram.3bbd1a2f.svg  828w,
                  /telegram.3bbd1a2f.svg 1080w,
                  /telegram.3bbd1a2f.svg 1200w,
                  /telegram.3bbd1a2f.svg 1920w,
                  /telegram.3bbd1a2f.svg 2048w,
                  /telegram.3bbd1a2f.svg 3840w
                "
                      src="/telegram.3bbd1a2f.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </div>
                Telegram
              </div>
            </a>
          </div>
          <div className="sc-942ab72b-14 cQMWFn">
            <Link
              href="/privacy-policy"
              className="sc-942ab72b-15 ggYDPI"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
