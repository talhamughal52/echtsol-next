"use client";
import "@/css/web-audit.css";
import { useState, useEffect } from "react";

const page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [render, setRender] = useState(false);
  const checkWindowSize = () => {
    setIsMobile(window.innerWidth < 993);
    setRender(Math.random());
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => {
        window.removeEventListener("resize", checkWindowSize);
      };
    }
  }, []);

  return (
    <article className="sc-35eecbae-1 idkLAj">
      <article className="sc-35eecbae-0 ePlPpE">
        <div className="sc-aebb7547-0 dblKwK">
          <section className="sc-1f3b927a-0 emiKks">
            <div className="sc-1f3b927a-1 gVKbwX">
              <div className="sc-1f3b927a-2 kNxjAT">
                <h1 className="sc-92bb42f6-1 iAlizM">
                  <div className="sc-c2cfcf9c-0 hkKpYq">
                    <div className="sc-c2cfcf9c-2 IQSPQ">
                      <span className="sc-c2cfcf9c-4 fryvio last-part">
                        <span>WEB AUDIT</span>
                        <div className="sc-c2cfcf9c-1 ddwjOL"></div>
                      </span>
                    </div>
                    <div className="sc-c2cfcf9c-3 kHxiKR">
                      <span className="sc-c2cfcf9c-4 fryvio last-part">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </h1>

                <div className="sc-92bb42f6-2 fVCQPO">
                  <section>
                    <span>
                      Watch selected profs scaling your idea from concepts to
                      revenue. Running an audit to make your website
                      <br />
                    </span>
                    <span>
                      perform fast, looks intuitive, and visually appealing.
                    </span>
                  </section>
                </div>
                <div className="sc-92bb42f6-4 gCEAIj">
                  <a
                    rel="noopener noreferrer"
                    className="sc-3d333781-1 ceyPTl services header"
                    href="/"
                  >
                    GET ESTIMATION
                    <div className="sc-3d333781-14 eyTgtD">
                      <svg
                        viewBox="5 5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="an arrow"
                        style={{ pointerEvents: "none" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
                          fill="black"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
                          fill="black"
                        ></path>
                        <title>an arrow</title>
                      </svg>
                    </div>
                  </a>
                  <div className="sc-3d333781-16 fyjhWJ services">
                    <a
                      href="https://wa.me/message/5PYWAPWLNHUMG1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-3d333781-17 CgEtZ"
                    >
                      <div className="sc-3d333781-18 krVNqH services">
                        <div className="sc-3d333781-21 iWBCGZ">
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
                              alt="Icon"
                              src="/whatsUp.2b815c02.svg"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                bottom: "0",
                                right: "0",
                                boxSizing: "border-box",
                                padding: "0",
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: "0",
                                height: "0",
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
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
                            />
                          </span>
                        </div>
                        WhatsApp
                      </div>
                    </a>
                    <a
                      href="https://t.me/cgs_team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-3d333781-17 CgEtZ"
                    >
                      <div className="sc-3d333781-19 byqtnE services">
                        <div className="sc-3d333781-20 zRNUR services">
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
                              alt="Icon"
                              src="/telegram.3bbd1a2f.svg"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                bottom: "0",
                                right: "0",
                                boxSizing: "border-box",
                                padding: "0",
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: "0",
                                height: "0",
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
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
                            />
                          </span>
                        </div>
                        Telegram
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="https://d2qrnmx3qcgrup.cloudfront.net/574f70b6-6752-44b3-af47-a011c6da1b69.svg"
                alt="web audit hero image"
                className="sc-1f3b927a-3 fVOupE"
              />
            </div>
          </section>
        </div>
        <section className="sc-48e027ef-0 dHoOus">
          <div className="sc-48e027ef-2 bsZvLe">
            <img
              src="https://d2qrnmx3qcgrup.cloudfront.net/70f96d32-5000-4f45-98c4-a62864c74988.png"
              alt="what is web audit image"
              className="sc-48e027ef-3 evLXhS"
            />
            <div className="sc-48e027ef-4 gPjMYA">
              <h3 className="sc-48e027ef-1 cFfvOo">WHAT IS A WEBSITE AUDIT?</h3>
              <section>
                <span>
                  It is a complete review of the elements affecting <br />
                </span>
                <span>
                  a website’s effectiveness. You can find errors, <br />
                </span>
                <span>
                  analyze competitors, find keywords, and develop <br />
                </span>
                <span> an improvement strategy by auditing the website.</span>
              </section>
            </div>
          </div>
        </section>
        <section className="sc-4c83e3ce-0 eEdCkt">
          <div className="sc-4c83e3ce-3 hJaBwG">
            <h3 className="sc-4c83e3ce-1 OQSOV">
              <section>
                <span>Which problems does an audit solve?</span>
              </section>
            </h3>
            <p className="sc-4c83e3ce-2 cKjBWw">
              <section>
                <span>We’ll expand the team depending on your needs</span>
              </section>
            </p>
          </div>
          <div className="sc-4c83e3ce-4 jhdTND">
            <div className="sc-4c83e3ce-5 ftbBZo">
              <svg
                width="6"
                height="23"
                viewBox="0 0 6 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  y="0.5"
                  width="6"
                  height="22"
                  fill="#8F8E93"
                ></rect>
                <rect y="0.5" width="6" height="14.6667" fill="#8F8E93"></rect>
              </svg>
              <span>Bad ranking on Google</span>
            </div>
            <div className="sc-4c83e3ce-5 ftbBZo">
              <svg
                width="6"
                height="23"
                viewBox="0 0 6 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  y="0.5"
                  width="6"
                  height="22"
                  fill="#8F8E93"
                ></rect>
                <rect y="0.5" width="6" height="14.6667" fill="#8F8E93"></rect>
              </svg>
              <span>Low conversion rate</span>
            </div>
            <div className="sc-4c83e3ce-5 ftbBZo">
              <svg
                width="6"
                height="23"
                viewBox="0 0 6 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  y="0.5"
                  width="6"
                  height="22"
                  fill="#8F8E93"
                ></rect>
                <rect y="0.5" width="6" height="14.6667" fill="#8F8E93"></rect>
              </svg>
              <span>Slow page speed</span>
            </div>
            <div className="sc-4c83e3ce-5 ftbBZo">
              <svg
                width="6"
                height="23"
                viewBox="0 0 6 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  y="0.5"
                  width="6"
                  height="22"
                  fill="#8F8E93"
                ></rect>
                <rect y="0.5" width="6" height="14.6667" fill="#8F8E93"></rect>
              </svg>
              <span>High bounce rate</span>
            </div>
            <div className="sc-4c83e3ce-5 ftbBZo">
              <svg
                width="6"
                height="23"
                viewBox="0 0 6 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  y="0.5"
                  width="6"
                  height="22"
                  fill="#8F8E93"
                ></rect>
                <rect y="0.5" width="6" height="14.6667" fill="#8F8E93"></rect>
              </svg>
              <span>Security issues</span>
            </div>
          </div>
        </section>
        <section className="sc-80c04815-0 ddvohp">
          <h3 className="sc-80c04815-1 Oooyd">Types of audit</h3>
          <div className="sc-c8f2fdbc-0 hqeQTU undefined undefined">
            <div
              className="rfm-marquee-container"
              style={{
                "--pause-on-hover": "running",
                "--pause-on-click": "running",
                "--width": "100%",
                "--transform": "none",
              }}
            >
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "reverse",
                  "--duration": "195.88875s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                <div className="rfm-initial-child-container">
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <span>
                      Types of audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <span>
                      Types of audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <span>
                      Types of audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of
                      audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "reverse",
                  "--duration": "195.88875s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    Types of audit&nbsp;&nbsp;&nbsp;Types of
                    audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;Types
                    of audit&nbsp;&nbsp;&nbsp;Types of
                    audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;Types
                    of audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    Types of audit&nbsp;&nbsp;&nbsp;Types of
                    audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;Types
                    of audit&nbsp;&nbsp;&nbsp;Types of
                    audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;Types
                    of audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    Types of audit&nbsp;&nbsp;&nbsp;Types of
                    audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;Types
                    of audit&nbsp;&nbsp;&nbsp;Types of
                    audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;Types
                    of audit&nbsp;&nbsp;&nbsp;Types of audit&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-80c04815-2 bpMHzC">
            {!isMobile ? (
              <>
                <div className={`sc-3b9736cb-0 ilRsbc`}>
                  <div className="sc-3b9736cb-1 bGLcc">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="types of grid image"
                        src="/security.69ca0cf3.svg"
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
                        sizes="100vw"
                        srcSet="
            /security.69ca0cf3.svg  640w,
            /security.69ca0cf3.svg  750w,
            /security.69ca0cf3.svg  828w,
            /security.69ca0cf3.svg 1080w,
            /security.69ca0cf3.svg 1200w,
            /security.69ca0cf3.svg 1920w,
            /security.69ca0cf3.svg 2048w,
            /security.69ca0cf3.svg 3840w
          "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <div className="sc-3b9736cb-2 yRrQb">
                    <section>
                      <span>Security audit</span>
                    </section>
                  </div>
                  <div className="sc-84dd20d9-0 dMGygq upper">
                    <div className="sc-84dd20d9-1 kXxXVX">
                      <div className="sc-84dd20d9-3 exlFAP">
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="min"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="max"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="close"></span>
                        </div>
                      </div>
                    </div>
                    <div className="sc-84dd20d9-4 gRDMjq">
                      <div className="sc-84dd20d9-5 kwsa-di title">
                        <section>
                          <span>Security audit</span>
                        </section>
                      </div>
                      <div className="sc-84dd20d9-5 kwsa-di">
                        The team uses security audit tools to analyze all
                        aspects attentively. While providing the audit, points
                        like website clones detection, robots.txt file
                        optimization, HTTPS certificate, and CAPTCHA check are
                        done.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-3b9736cb-0 ilRsbc">
                  <div className="sc-3b9736cb-1 bGLcc">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="types of grid image"
                        src="/seo.db2293e6.svg"
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
                        sizes="100vw"
                        srcSet="
            /seo.db2293e6.svg  640w,
            /seo.db2293e6.svg  750w,
            /seo.db2293e6.svg  828w,
            /seo.db2293e6.svg 1080w,
            /seo.db2293e6.svg 1200w,
            /seo.db2293e6.svg 1920w,
            /seo.db2293e6.svg 2048w,
            /seo.db2293e6.svg 3840w
          "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <div className="sc-3b9736cb-2 yRrQb">
                    <section>
                      <span>SEO audit</span>
                    </section>
                  </div>
                  <div className="sc-84dd20d9-0 dMGygq upper">
                    <div className="sc-84dd20d9-1 kXxXVX">
                      <div className="sc-84dd20d9-3 exlFAP">
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="min"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="max"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="close"></span>
                        </div>
                      </div>
                    </div>
                    <div className="sc-84dd20d9-4 gRDMjq">
                      <div className="sc-84dd20d9-5 kwsa-di title">
                        <section>
                          <span>SEO audit</span>
                        </section>
                      </div>
                      <div className="sc-84dd20d9-5 kwsa-di">
                        There are many ways to make your site work faster and
                        more effectively. For example, fixing issues related to
                        image optimization, JS/CSS aggregation, the use of
                        caching, and much more.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-3b9736cb-0 ilRsbc">
                  <div className="sc-3b9736cb-1 bGLcc">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="types of grid image"
                        src="/review.30a7be66.svg"
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
                        sizes="100vw"
                        srcSet="
            /review.30a7be66.svg  640w,
            /review.30a7be66.svg  750w,
            /review.30a7be66.svg  828w,
            /review.30a7be66.svg 1080w,
            /review.30a7be66.svg 1200w,
            /review.30a7be66.svg 1920w,
            /review.30a7be66.svg 2048w,
            /review.30a7be66.svg 3840w
          "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <div className="sc-3b9736cb-2 yRrQb">
                    <section>
                      <span>Code review</span>
                    </section>
                  </div>
                  <div className="sc-84dd20d9-0 dMGygq upper">
                    <div className="sc-84dd20d9-1 kXxXVX">
                      <div className="sc-84dd20d9-3 exlFAP">
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="min"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="max"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="close"></span>
                        </div>
                      </div>
                    </div>
                    <div className="sc-84dd20d9-4 gRDMjq">
                      <div className="sc-84dd20d9-5 kwsa-di title">
                        <section>
                          <span>Code review</span>
                        </section>
                      </div>
                      <div className="sc-84dd20d9-5 kwsa-di">
                        It covers internal linking, keyword optimization,
                        user-friendly URLs, unique and relevant meta tags, ALT
                        text for images, and more. Checking sitemap, robots.txt,
                        Google Tag Manager, Google Analytics, and Google Search
                        Console are also included.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-3b9736cb-0 ilRsbc">
                  <div className="sc-3b9736cb-1 bGLcc">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="types of grid image"
                        src="/ux-ui.e308ed14.svg"
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
                        sizes="100vw"
                        srcSet="
            /ux-ui.e308ed14.svg  640w,
            /ux-ui.e308ed14.svg  750w,
            /ux-ui.e308ed14.svg  828w,
            /ux-ui.e308ed14.svg 1080w,
            /ux-ui.e308ed14.svg 1200w,
            /ux-ui.e308ed14.svg 1920w,
            /ux-ui.e308ed14.svg 2048w,
            /ux-ui.e308ed14.svg 3840w
          "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <div className="sc-3b9736cb-2 yRrQb">
                    <section>
                      <span>UX/UI audit</span>
                    </section>
                  </div>
                  <div className="sc-84dd20d9-0 dMGygq">
                    <div className="sc-84dd20d9-1 kXxXVX">
                      <div className="sc-84dd20d9-3 exlFAP">
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="min"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="max"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="close"></span>
                        </div>
                      </div>
                    </div>
                    <div className="sc-84dd20d9-4 gRDMjq">
                      <div className="sc-84dd20d9-5 kwsa-di title">
                        <section>
                          <span>UX/UI audit</span>
                        </section>
                      </div>
                      <div className="sc-84dd20d9-5 kwsa-di">
                        Bring your customers' digital experiences to a new level
                        with perfect UX/UI. Comprehensive UX/UI audit checks if
                        it’s convenient for your customers to use your site.
                        Also, a website accessibility audit can be included in
                        this phase.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-3b9736cb-0 ilRsbc">
                  <div className="sc-3b9736cb-1 bGLcc">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="types of grid image"
                        src="/pagespeed.9171961f.svg"
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
                        sizes="100vw"
                        srcSet="
            /pagespeed.9171961f.svg  640w,
            /pagespeed.9171961f.svg  750w,
            /pagespeed.9171961f.svg  828w,
            /pagespeed.9171961f.svg 1080w,
            /pagespeed.9171961f.svg 1200w,
            /pagespeed.9171961f.svg 1920w,
            /pagespeed.9171961f.svg 2048w,
            /pagespeed.9171961f.svg 3840w
          "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <div className="sc-3b9736cb-2 yRrQb">
                    <section>
                      <span>
                        Page speed <br />
                      </span>
                      <span> optimization</span>
                    </section>
                  </div>
                  <div className="sc-84dd20d9-0 dMGygq">
                    <div className="sc-84dd20d9-1 kXxXVX">
                      <div className="sc-84dd20d9-3 exlFAP">
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="min"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="max"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="close"></span>
                        </div>
                      </div>
                    </div>
                    <div className="sc-84dd20d9-4 gRDMjq">
                      <div className="sc-84dd20d9-5 kwsa-di title">
                        <section>
                          <span>
                            Page speed <br />
                          </span>
                          <span> optimization</span>
                        </section>
                      </div>
                      <div className="sc-84dd20d9-5 kwsa-di">
                        Clean code makes your website more maintainable, easier
                        to edit, and open to future modifications. An essential
                        part of the code review is console error fixing —
                        resolving JavaScript errors reported in the Console.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-3b9736cb-0 ilRsbc">
                  <div className="sc-3b9736cb-1 bGLcc">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt="types of grid image"
                        src="/competitor.3b1a4973.svg"
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
                        sizes="100vw"
                        srcSet="
            /competitor.3b1a4973.svg  640w,
            /competitor.3b1a4973.svg  750w,
            /competitor.3b1a4973.svg  828w,
            /competitor.3b1a4973.svg 1080w,
            /competitor.3b1a4973.svg 1200w,
            /competitor.3b1a4973.svg 1920w,
            /competitor.3b1a4973.svg 2048w,
            /competitor.3b1a4973.svg 3840w
          "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <div className="sc-3b9736cb-2 yRrQb">
                    <section>
                      <span>Competitor audit</span>
                    </section>
                  </div>
                  <div className="sc-84dd20d9-0 dMGygq">
                    <div className="sc-84dd20d9-1 kXxXVX">
                      <div className="sc-84dd20d9-3 exlFAP">
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="min"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="max"></span>
                        </div>
                        <div className="sc-84dd20d9-2 bJWMzB">
                          <span className="close"></span>
                        </div>
                      </div>
                    </div>
                    <div className="sc-84dd20d9-4 gRDMjq">
                      <div className="sc-84dd20d9-5 kwsa-di title">
                        <section>
                          <span>Competitor audit</span>
                        </section>
                      </div>
                      <div className="sc-84dd20d9-5 kwsa-di">
                        An insight-provoking competitors analysis can become
                        valuable for helping you improve your website. Here
                        competitors’ backlink profiles, ranking, and content are
                        analyzed.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="sc-7d4cc652-0 eorgnZ">
                  <div className="sc-7d4cc652-2 ckcBtj">
                    <div className="sc-7d4cc652-3 gfFXIT">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          inset: "0px",
                        }}
                      >
                        <img
                          alt="types of grid image"
                          sizes="100vw"
                          srcSet="
              /security.69ca0cf3.svg  640w,
              /security.69ca0cf3.svg  750w,
              /security.69ca0cf3.svg  828w,
              /security.69ca0cf3.svg 1080w,
              /security.69ca0cf3.svg 1200w,
              /security.69ca0cf3.svg 1920w,
              /security.69ca0cf3.svg 2048w,
              /security.69ca0cf3.svg 3840w
            "
                          src="/security.69ca0cf3.svg"
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
                    <div className="sc-7d4cc652-1 cXbaCd">
                      <span>Security audit</span>
                    </div>
                  </div>
                  <p className="sc-7d4cc652-4 WouEO">
                    The team uses security audit tools to analyze all aspects
                    attentively. While providing the audit, points like website
                    clones detection, robots.txt file optimization, HTTPS
                    certificate, and CAPTCHA check are done.
                  </p>
                </div>
                <div className="sc-7d4cc652-0 eorgnZ">
                  <div className="sc-7d4cc652-2 ckcBtj">
                    <div className="sc-7d4cc652-3 gfFXIT">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          inset: "0px",
                        }}
                      >
                        <img
                          alt="types of grid image"
                          sizes="100vw"
                          srcSet="
              /seo.db2293e6.svg  640w,
              /seo.db2293e6.svg  750w,
              /seo.db2293e6.svg  828w,
              /seo.db2293e6.svg 1080w,
              /seo.db2293e6.svg 1200w,
              /seo.db2293e6.svg 1920w,
              /seo.db2293e6.svg 2048w,
              /seo.db2293e6.svg 3840w
            "
                          src="/seo.db2293e6.svg"
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
                    <div className="sc-7d4cc652-1 cXbaCd">
                      <span>SEO audit</span>
                    </div>
                  </div>
                  <p className="sc-7d4cc652-4 WouEO">
                    There are many ways to make your site work faster and more
                    effectively. For example, fixing issues related to image
                    optimization, JS/CSS aggregation, the use of caching, and
                    much more.
                  </p>
                </div>
                <div className="sc-7d4cc652-0 eorgnZ">
                  <div className="sc-7d4cc652-2 ckcBtj">
                    <div className="sc-7d4cc652-3 gfFXIT">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          inset: "0px",
                        }}
                      >
                        <img
                          alt="types of grid image"
                          sizes="100vw"
                          srcSet="
              /review.30a7be66.svg  640w,
              /review.30a7be66.svg  750w,
              /review.30a7be66.svg  828w,
              /review.30a7be66.svg 1080w,
              /review.30a7be66.svg 1200w,
              /review.30a7be66.svg 1920w,
              /review.30a7be66.svg 2048w,
              /review.30a7be66.svg 3840w
            "
                          src="/review.30a7be66.svg"
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
                    <div className="sc-7d4cc652-1 cXbaCd">
                      <span>Code review</span>
                    </div>
                  </div>
                  <p className="sc-7d4cc652-4 WouEO">
                    It covers internal linking, keyword optimization,
                    user-friendly URLs, unique and relevant meta tags, ALT text
                    for images, and more. Checking sitemap, robots.txt, Google
                    Tag Manager, Google Analytics, and Google Search Console are
                    also included.
                  </p>
                </div>
                <div className="sc-7d4cc652-0 eorgnZ">
                  <div className="sc-7d4cc652-2 ckcBtj">
                    <div className="sc-7d4cc652-3 gfFXIT">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          inset: "0px",
                        }}
                      >
                        <img
                          alt="types of grid image"
                          sizes="100vw"
                          srcSet="
              /ux-ui.e308ed14.svg  640w,
              /ux-ui.e308ed14.svg  750w,
              /ux-ui.e308ed14.svg  828w,
              /ux-ui.e308ed14.svg 1080w,
              /ux-ui.e308ed14.svg 1200w,
              /ux-ui.e308ed14.svg 1920w,
              /ux-ui.e308ed14.svg 2048w,
              /ux-ui.e308ed14.svg 3840w
            "
                          src="/ux-ui.e308ed14.svg"
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
                    <div className="sc-7d4cc652-1 cXbaCd">
                      <span>UX/UI audit</span>
                    </div>
                  </div>
                  <p className="sc-7d4cc652-4 WouEO">
                    Bring your customers' digital experiences to a new level
                    with perfect UX/UI. Comprehensive UX/UI audit checks if it’s
                    convenient for your customers to use your site. Also, a
                    website accessibility audit can be included in this phase.
                  </p>
                </div>
                <div className="sc-7d4cc652-0 eorgnZ">
                  <div className="sc-7d4cc652-2 ckcBtj">
                    <div className="sc-7d4cc652-3 gfFXIT">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          inset: "0px",
                        }}
                      >
                        <img
                          alt="types of grid image"
                          sizes="100vw"
                          srcSet="
              /pagespeed.9171961f.svg  640w,
              /pagespeed.9171961f.svg  750w,
              /pagespeed.9171961f.svg  828w,
              /pagespeed.9171961f.svg 1080w,
              /pagespeed.9171961f.svg 1200w,
              /pagespeed.9171961f.svg 1920w,
              /pagespeed.9171961f.svg 2048w,
              /pagespeed.9171961f.svg 3840w
            "
                          src="/pagespeed.9171961f.svg"
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
                    <div className="sc-7d4cc652-1 cXbaCd">
                      <span>
                        Page speed <br />
                      </span>
                      <span> optimization</span>
                    </div>
                  </div>
                  <p className="sc-7d4cc652-4 WouEO">
                    Clean code makes your website more maintainable, easier to
                    edit, and open to future modifications. An essential part of
                    the code review is console error fixing — resolving
                    JavaScript errors reported in the Console.
                  </p>
                </div>
                <div className="sc-7d4cc652-0 eorgnZ">
                  <div className="sc-7d4cc652-2 ckcBtj">
                    <div className="sc-7d4cc652-3 gfFXIT">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "absolute",
                          inset: "0px",
                        }}
                      >
                        <img
                          alt="types of grid image"
                          sizes="100vw"
                          srcSet="
              /competitor.3b1a4973.svg   640w,
              /competitor.3b1a4973.svg   750w,
              /competitor.3b1a4973.svg   828w,
              /competitor.3b1a4973.svg  1080w,
              /competitor.3b1a4973.svg  1200w,
              /competitor.3b1a4973.svg  1920w,
              /competitor.3b1a4973.svg  2048w,
              /competitor.3b1a4973.svg  3840w
            "
                          src="/competitor.3b1a4973.svg "
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
                    <div className="sc-7d4cc652-1 cXbaCd">
                      <span>Competitor audit</span>
                    </div>
                  </div>
                  <p className="sc-7d4cc652-4 WouEO">
                    An insight-provoking competitors analysis can become
                    valuable for helping you improve your website. Here
                    competitors’ backlink profiles, ranking, and content are
                    analyzed.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
        <div className="sc-414beb2f-3 kuXCgN webAudit">
          <div className="sc-c8f2fdbc-0 hqeQTU undefined undefined">
            <div
              className="rfm-marquee-container"
              style={{
                "--pause-on-hover": "running",
                "--pause-on-click": "running",
                "--width": "100%",
                "--transform": "none",
              }}
            >
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "reverse",
                  "--duration": "195.88875s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                <div className="rfm-initial-child-container">
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <span>
                      Meet your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                      your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                      your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <span>
                      Meet your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                      your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                      your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <span>
                      Meet your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                      your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                      your team&nbsp;&nbsp;&nbsp;Meet your
                      team&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "reverse",
                  "--duration": "195.88875s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    Meet your team&nbsp;&nbsp;&nbsp;Meet your
                    team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                    your team&nbsp;&nbsp;&nbsp;Meet your
                    team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                    your team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    Meet your team&nbsp;&nbsp;&nbsp;Meet your
                    team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                    your team&nbsp;&nbsp;&nbsp;Meet your
                    team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                    your team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    Meet your team&nbsp;&nbsp;&nbsp;Meet your
                    team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                    your team&nbsp;&nbsp;&nbsp;Meet your
                    team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;Meet
                    your team&nbsp;&nbsp;&nbsp;Meet your team&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-414beb2f-0 bKutcs webAudit">
          <div className="sc-414beb2f-1 lfXoCJ">
            <h2 className="sc-414beb2f-2 gEAyAI">Meet your team</h2>
            <div className="sc-414beb2f-4 dRFIHr">
              <section>
                <span>
                  It is all about personalization, matching your needs with our
                  prof skills, and shaping custom teams.
                </span>
              </section>
            </div>
          </div>
          <div className="sc-414beb2f-8 fvKvFO">
            <div className="sc-414beb2f-9 kjzsSB"></div>
          </div>
          <div className="sc-414beb2f-5 iDKaiD">
            <div className="sc-414beb2f-6 eaaUn">
              <div className="sc-414beb2f-7 cAwgwJ">Tech Lead</div>
            </div>
            <div className="sc-414beb2f-6 eaaUn">
              <div className="sc-414beb2f-7 cAwgwJ">SEO</div>
            </div>
            <div className="sc-414beb2f-6 eaaUn">
              <div className="sc-414beb2f-7 cAwgwJ">UI/UX Designer</div>
            </div>
            <div className="sc-414beb2f-6 eaaUn">
              <div className="sc-414beb2f-7 cAwgwJ">Developer</div>
            </div>
            <div className="sc-414beb2f-6 eaaUn">
              <div className="sc-414beb2f-7 iINrWQ">Project Manager</div>
            </div>
          </div>
        </div>
        <section className="sc-35277c1c-0 fqAiJb">
          <h3 className="sc-35277c1c-1 eAetYJ">
            <section>
              <span>
                HOW TO DO A WEBSITE AUDIT? <br />
              </span>
              <span>THAT&#x27;S HOW OUR TEAM DOES IT:</span>
            </section>
          </h3>
          <div className="sc-35277c1c-2 lgcONT">
            {typeof window !== "undefined" && window.innerWidth > 768 ? (
              <>
                <div className="sc-71d3aadb-0 ddTMLI">
                  <div className="sc-71d3aadb-1 inzsTJ">
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Launching the app
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Website architecture analysis
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Technical check
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">Code review</div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Performance audit
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Setting testing tools
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-71d3aadb-2 eqXTjd">
                    <div className="sc-71d3aadb-3 jAgAbQ"></div>
                    <div className="sc-71d3aadb-4 sNJIo"></div>
                  </div>
                </div>
                <div className="sc-71d3aadb-0 ddTMLI">
                  <div className="sc-71d3aadb-1 inzsTJ">
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Analytics audit
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">UI/UX audit</div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          SEO optimization audit
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Analyzing competitors
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Business logic test
                        </div>
                      </div>
                      <div className="sc-1ad76750-4 gnHNxW"></div>
                    </div>
                    <div className="sc-1ad76750-0 kjPFxN">
                      <div className="sc-1ad76750-2 dkklsk">
                        <div className="sc-1ad76750-1 jxJaAQ">
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "absolute",
                              inset: "0px",
                            }}
                          >
                            <img
                              alt="list check icon img"
                              src="/HowToDoAuditImg.f69b04af.svg"
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
                              sizes="100vw"
                              srcSet="
                  /HowToDoAuditImg.f69b04af.svg  640w,
                  /HowToDoAuditImg.f69b04af.svg  750w,
                  /HowToDoAuditImg.f69b04af.svg  828w,
                  /HowToDoAuditImg.f69b04af.svg 1080w,
                  /HowToDoAuditImg.f69b04af.svg 1200w,
                  /HowToDoAuditImg.f69b04af.svg 1920w,
                  /HowToDoAuditImg.f69b04af.svg 2048w,
                  /HowToDoAuditImg.f69b04af.svg 3840w
                "
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <div className="sc-1ad76750-3 jOiVHM">
                          Creating a fixes checklist
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-71d3aadb-2 eqXTjd">
                    <div className="sc-71d3aadb-3 jAgAbQ"></div>
                    <div className="sc-71d3aadb-4 sNJIo"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="sc-33c3e01-4 cgPdSG">
                  <div className="sc-33c3e01-5 bMfHpD">
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Launching the app</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Website architecture analysis</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Technical check</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Code review</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Performance audit</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Setting testing tools</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Analytics audit</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>UI/UX audit</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>SEO optimization audit</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Analyzing competitors </span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Business logic test</span>
                      </div>
                      <div className="sc-33c3e01-9 bQlvrx"></div>
                    </div>
                    <div className="sc-33c3e01-6 VCKAC mobileAudit">
                      <div className="sc-33c3e01-7 iBSbdI">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <img
                            alt="check mark icon image"
                            sizes="100vw"
                            srcSet="
                            /auditCheckMark.5e251c34.svg  640w,
                            /auditCheckMark.5e251c34.svg  750w,
                            /auditCheckMark.5e251c34.svg  828w,
                            /auditCheckMark.5e251c34.svg 1080w,
                            /auditCheckMark.5e251c34.svg 1200w,
                            /auditCheckMark.5e251c34.svg 1920w,
                            /auditCheckMark.5e251c34.svg 2048w,
                            /auditCheckMark.5e251c34.svg 3840w
                        "
                            src="/auditCheckMark.5e251c34.svg"
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
                      <div className="sc-33c3e01-8 eHMsUd mobileAudit">
                        <span>Creating a fixes checklist</span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-33c3e01-10 flxQkF webAudit"></div>
                </div>
              </>
            )}
          </div>
        </section>
        <section className="sc-cdce5055-0 birpZJ">
          <div className="sc-cdce5055-1 kzdOiB">
            <div>
              <h3 className="sc-27bd1c77-2 cXRpQe biggerFontSize fullWidth webAudit">
                <section>
                  <span>Revolutionize your site with audit</span>
                </section>
              </h3>
              <p className="sc-27bd1c77-3 fiJVAZ biggerFontSize fullWidth webAudit">
                <span>
                  Providing complex audits, paying attention to every factor of
                  your site’s efficiency, and leading you to results.
                </span>
              </p>
              <div className="sc-27bd1c77-4 gcwLq">
                <a
                  rel="noopener noreferrer"
                  className="sc-3d333781-1 ceyPTl services"
                  href="/"
                >
                  BOOK A CALL
                  <div className="sc-3d333781-14 eyTgtD">
                    <svg
                      viewBox="5 5 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="an arrow"
                      style={{ pointerEvents: "none" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
                        fill="black"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
                        fill="black"
                      ></path>
                      <title>an arrow</title>
                    </svg>
                  </div>
                </a>
                <div className="sc-3d333781-16 fyjhWJ services">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sc-3d333781-17 CgEtZ"
                  >
                    <div className="sc-3d333781-18 krVNqH services">
                      <div className="sc-3d333781-21 iWBCGZ">
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
                            alt="Icon"
                            src="/whatsUp.2b815c02.svg"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "0",
                              bottom: "0",
                              right: "0",
                              boxSizing: "border-box",
                              padding: "0",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0",
                              height: "0",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
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
                          />
                        </span>
                      </div>
                      WhatsApp
                    </div>
                  </a>
                  <a
                    href="https://t.me/cgs_team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sc-3d333781-17 CgEtZ"
                  >
                    <div className="sc-3d333781-19 byqtnE services">
                      <div className="sc-3d333781-20 zRNUR services">
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
                            alt="Icon"
                            src="/telegram.3bbd1a2f.svg"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "0",
                              bottom: "0",
                              right: "0",
                              boxSizing: "border-box",
                              padding: "0",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0",
                              height: "0",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
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
                          />
                        </span>
                      </div>
                      Telegram
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-cdce5055-2 clqZZJ">
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
                  alt="types of grid image"
                  src="/AuditTimeCommon.4e6ba45d.svg"
                  decoding="async"
                  data-nimg="fill"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0",
                    height: "0",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  sizes="100vw"
                  srcSet="
        /AuditTimeCommon.4e6ba45d.svg  640w,
        /AuditTimeCommon.4e6ba45d.svg  750w,
        /AuditTimeCommon.4e6ba45d.svg  828w,
        /AuditTimeCommon.4e6ba45d.svg 1080w,
        /AuditTimeCommon.4e6ba45d.svg 1200w,
        /AuditTimeCommon.4e6ba45d.svg 1920w,
        /AuditTimeCommon.4e6ba45d.svg 2048w,
        /AuditTimeCommon.4e6ba45d.svg 3840w
    "
                />
              </span>
              <div className="sc-cdce5055-3 kgizIC">
                <div className="sc-cdce5055-4 jqKYah">
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
                      alt="types of grid image"
                      src="/AuditTimeText.7eb3ffa5.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        boxSizing: "border-box",
                        padding: "0",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0",
                        height: "0",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                      sizes="100vw"
                      srcSet="
        /AuditTimeText.7eb3ffa5.svg  640w,
        /AuditTimeText.7eb3ffa5.svg  750w,
        /AuditTimeText.7eb3ffa5.svg  828w,
        /AuditTimeText.7eb3ffa5.svg 1080w,
        /AuditTimeText.7eb3ffa5.svg 1200w,
        /AuditTimeText.7eb3ffa5.svg 1920w,
        /AuditTimeText.7eb3ffa5.svg 2048w,
        /AuditTimeText.7eb3ffa5.svg 3840w
    "
                    />
                  </span>
                </div>
                <div className="sc-cdce5055-4 iSExlA">
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
                      alt="types of grid image"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        boxSizing: "border-box",
                        padding: "0",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0",
                        height: "0",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </article>
  );
};

export default page;
