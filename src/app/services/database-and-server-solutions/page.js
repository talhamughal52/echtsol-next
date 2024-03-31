"use client";
import DatabaseServerListExpandCollapseSection from "@/components/DatabaseServerListExpandCollapseSection";
import "@/css/database.css";
import { useState, useEffect } from "react";

const page = () => {
  const [render, setRender] = useState(false);
  const checkWindowSize = () => {
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
    <>
      <article className="sc-35eecbae-1 idkLAj">
        <article className="sc-35eecbae-0 ePlPpE">
          <div className="sc-dfbf74eb-0 dGtfZy">
            <section className="sc-a660864-0 jRjHHA">
              <div className="sc-a660864-1 gDinEd">
                <h1 className="sc-92bb42f6-1 iAlizM server">
                  <div className="sc-c2cfcf9c-0 hkKpYq">
                    <div className="sc-c2cfcf9c-2 IQSPQ">
                      <span>Database</span>
                      <br />
                      <span className="sc-c2cfcf9c-4 fryvio last-part">
                        <span> &amp; Server solutions</span>
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
                <div className="sc-92bb42f6-2 fVCQPO server">
                  <section>
                    <span>
                      CGS-team becomes your trustful partner and matches your
                      idea with high-quality solutions, including databases and
                      servers. Schedule an insight-provoking consultation with
                      our experts.
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
                      href="h/"
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
                src="/0bcde196-0609-4722-9595-7257363da647.svg"
                alt="hero image"
                className="sc-a660864-2 eWurON"
              />
            </section>
            <h2 className="sc-667792f1-1 ueVeT">
              <div className="sc-c2cfcf9c-0 hkKpYq">
                <div className="sc-c2cfcf9c-2 IQSPQ">
                  <span className="sc-c2cfcf9c-4 fryvio last-part">
                    <span>Choosing the best-fitting solution among</span>
                    <div className="sc-c2cfcf9c-1 ddwjOL"></div>
                  </span>
                </div>
                <div className="sc-c2cfcf9c-3 kHxiKR">
                  <span className="sc-c2cfcf9c-4 fryvio last-part">
                    <span></span>
                  </span>
                </div>
              </div>
            </h2>

            <section className="sc-667792f1-0 leiJZJ">
              <img
                src="/featuresBg.710a493e.svg"
                alt="second block image"
                className="sc-667792f1-5 ktYrCN"
              />
              <img
                src="/feature-mobile-bg.2777cccf.svg"
                alt="second block image mobile"
                className="sc-667792f1-6 dDSlzg"
              />
              <div className="sc-667792f1-4 gpkpDN">
                <div style={{ position: "relative" }}>
                  <h2 className="sc-667792f1-2 cbVTMr">Databases</h2>
                  <div className="sc-667792f1-3 eGOetY scrolled">
                    <section>
                      <span>
                        Access control
                        <br />
                      </span>
                      <span>
                        Database administrators can manage the security
                        <br />
                      </span>
                      <span> depending on the employees’ tasks.</span>
                    </section>
                  </div>
                  <div className="sc-667792f1-3 jEmaSF scrolled">
                    <section>
                      <span>
                        Effective data-keeping
                        <br />
                      </span>
                      <span>
                        A database gives you a great way to store, manage,
                        <br />
                      </span>
                      <span>and retrieve data compared to physical files.</span>
                    </section>
                  </div>
                  <div className="sc-667792f1-3 fVFLdG scrolled">
                    <section>
                      <span>
                        Security
                        <br />
                      </span>
                      <span>
                        Control access and having backups ensure your
                        <br />
                      </span>
                      <span> files will be safe.</span>
                    </section>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <h2 className="sc-667792f1-2 cbVTMr">Servers</h2>
                  <div className="sc-667792f1-3 gniKMv scrolled">
                    <section>
                      <span>
                        Fast performance
                        <br />
                      </span>
                      <span>
                        A server is a hardware. It’s a computer with many
                        <br />
                      </span>
                      <span>
                        features providing effective and fast performance.
                      </span>
                    </section>
                  </div>
                  <div className="sc-667792f1-3 wgrOA scrolled">
                    <section>
                      <span>
                        Custom configuration
                        <br />
                      </span>
                      <span>
                        They can be made to serve any exact purpose or be
                        <br />
                      </span>
                      <span> built to handle many functions.</span>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section className="sc-a67ab9c7-0 elKnlE">
              <h2 className="sc-a67ab9c7-1 jqQdrV">
                <div className="sc-c2cfcf9c-0 hkKpYq">
                  <div className="sc-c2cfcf9c-2 IQSPQ">
                    <span className="sc-c2cfcf9c-4 fryvio last-part">
                      <span>Which one to select?</span>
                      <div className="sc-c2cfcf9c-1 ddwjOL"></div>
                    </span>
                  </div>
                  <div className="sc-c2cfcf9c-3 kHxiKR">
                    <span className="sc-c2cfcf9c-4 fryvio last-part">
                      <span></span>
                    </span>
                  </div>
                </div>
              </h2>
              <div className="sc-a67ab9c7-2 gTBEpG">
                <section>
                  <span>
                    It depends on your purpose. If your goal
                    <br />
                  </span>
                  <span>
                    is to save and store the data — the database
                    <br />
                  </span>
                  <span>
                    is your choice. If you want to provide services
                    <br />
                  </span>
                  <span> to hosts and clients — choose the server.</span>
                </section>
              </div>
              <img
                src="/7dea0a9f-4d45-4334-84b5-f5c2e447f33d.svg"
                alt="hero image"
                className="sc-a67ab9c7-3 kweWdA"
              />
            </section>
          </div>
        </article>
        <article className="sc-35eecbae-0 ePlPpE">
          <div className="sc-dfbf74eb-2 hfMseJ">
            <div className="sc-5a7692cf-5 cCxVsS">
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
                      <div
                        className="rfm-child"
                        style={{ "--transform": "none" }}
                      >
                        <span>
                          Ongoing support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                          &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                          support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                          &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                          support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                      <div
                        className="rfm-child"
                        style={{ "--transform": "none" }}
                      >
                        <span>
                          Ongoing support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                          &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                          support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                          &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                          support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                      <div
                        className="rfm-child"
                        style={{ "--transform": "none" }}
                      >
                        <span>
                          Ongoing support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                          &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                          support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                          &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                          support &amp; maintenance
                          bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                          maintenance bonuses:&nbsp;&nbsp;&nbsp;
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
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <span>
                        Ongoing support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                        &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                        support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                        &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                        support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;
                      </span>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <span>
                        Ongoing support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                        &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                        support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                        &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                        support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;
                      </span>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <span>
                        Ongoing support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                        &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                        support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing support
                        &amp; maintenance bonuses:&nbsp;&nbsp;&nbsp;Ongoing
                        support &amp; maintenance
                        bonuses:&nbsp;&nbsp;&nbsp;Ongoing support &amp;
                        maintenance bonuses:&nbsp;&nbsp;&nbsp;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-5a7692cf-0 vhnOC">
              <h2 className="sc-5a7692cf-1 gIbzGb">
                Ongoing support &amp; maintenance bonuses:
              </h2>
              <div className="sc-5a7692cf-2 kuREUo">
                <div className="sc-5a7692cf-3 lcvwtP">
                  {typeof window !== "undefined" && window.innerWidth > 768 ? (
                    <>
                      <ul className="sc-5a7692cf-4 gvLImH">
                        <DatabaseServerListExpandCollapseSection
                          heading="Data management"
                          description="For easy access, servers and databases store
                                    all your business data about sales,
                                    customers, etc. No more paperwork or
                                    spreadsheets."
                        />
                        <DatabaseServerListExpandCollapseSection
                          heading="Security"
                          description="Dealing with all your data can be a real
                          pain, but databases and servers make it
                          easier. Only the right people can get into
                          it, and it&#x27;s all encrypted for extra
                          protection."
                        />
                      </ul>
                      <ul className="sc-5a7692cf-4 gvLImH">
                        <DatabaseServerListExpandCollapseSection
                          heading="No redundancy"
                          description="A database and server help to avoid
                          repeating information and duplicate data,
                          saving storage space and improving access
                          speed."
                        />
                        <DatabaseServerListExpandCollapseSection
                          heading="Recovery"
                          description="Companies can lose valuable data, so
                          it&#x27;s crucial to have excellent secure
                          databases and servers."
                        />
                      </ul>
                    </>
                  ) : (
                    <>
                      <ul className="sc-5a7692cf-4 gvLImH">
                        <DatabaseServerListExpandCollapseSection
                          heading="Data management"
                          description="For easy access, servers and databases store
                                    all your business data about sales,
                                    customers, etc. No more paperwork or
                                    spreadsheets."
                        />

                        <DatabaseServerListExpandCollapseSection
                          heading="No redundancy"
                          description="A database and server help to avoid
                          repeating information and duplicate data,
                          saving storage space and improving access
                          speed."
                        />

                        <DatabaseServerListExpandCollapseSection
                          heading="Security"
                          description="Dealing with all your data can be a real
                          pain, but databases and servers make it
                          easier. Only the right people can get into
                          it, and it&#x27;s all encrypted for extra
                          protection."
                        />

                        <DatabaseServerListExpandCollapseSection
                          heading="Recovery"
                          description="Companies can lose valuable data, so
                          it&#x27;s crucial to have excellent secure
                          databases and servers."
                        />
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="sc-dfbf74eb-0 dGtfZy">
            <section className="sc-9fcad06c-0 dyBofU">
              <div className="sc-9fcad06c-1 gkKeSB">
                <h3 className="sc-27bd1c77-2 cXRpQe fullWidth server">
                  <section>
                    <span>Make your startup grow faster</span>
                  </section>
                </h3>
                <p className="sc-27bd1c77-3 fiJVAZ fullWidth server">
                  <span>
                    As your partner, we&#x27;ll do deep research, advise on the
                    service and tech choice and deliver a perfect development
                    solution.
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
                      href="/"
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
                src="/3be786bf-10e5-49b5-bbfa-d2fda55856a4.svg"
                alt="Footer image"
                className="sc-9fcad06c-2 ctYMfR"
              />
            </section>
          </div>
        </article>
      </article>
    </>
  );
};

export default page;
