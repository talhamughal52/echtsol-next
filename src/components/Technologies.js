"use client";
import { useState, useEffect } from "react";
import HoverableElement from "./HoverableElement";
import MobileHoverableElement from "./MobileHoverableElement";

const Technologies = () => {
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
    <div className="sc-c8e937f7-15 kwcGxL">
      <section className="sc-24b8e865-0 ilaPBD">
        <h2 className="sc-24b8e865-1 dtNVgQ">technologies</h2>
        <div className="sc-c8f2fdbc-0 hqeQTU undefined bright-gradient">
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
                "--duration": "109.63125s",
                "--delay": "0s",
                "--iteration-count": "infinite",
                "--min-width": "100%",
              }}
            >
              <div className="rfm-initial-child-container">
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <span>
                    technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <div
              className="rfm-marquee"
              style={{
                "--play": "running",
                "--direction": "reverse",
                "--duration": "109.63125s",
                "--delay": "0s",
                "--iteration-count": "infinite",
                "--min-width": "100%",
              }}
            >
              <div className="rfm-child" style={{ "--transform": "none" }}>
                <span>
                  technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              <div className="rfm-child" style={{ "--transform": "none" }}>
                <span>
                  technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              <div className="rfm-child" style={{ "--transform": "none" }}>
                <span>
                  technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;technologies&nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sc-24b8e865-9 eeeBr"
          style={{
            transform: "translate(-50%, -50%) rotate(4.7rad)",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: "1",
              border: "0",
              margin: "0",
              padding: "0",
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0",
                margin: "0",
                padding: "0",
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                }}
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2787%27%20height=%2787%27/%3e"
              />
            </span>
            <img
              alt="tech arrow"
              src="/techArrow.35e0785c.svg"
              decoding="async"
              data-nimg="intrinsic"
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
              }}
            />
          </span>
        </div>
        <div className="sc-24b8e865-4 hwNuDO">
          {typeof window !== "undefined" && window.innerWidth > 768 ? (
            <>
              <HoverableElement
                heading="blockchain"
                headingClass="dEeRlI"
                imageSrc="/c75376fc-eff7-4576-be3c-5c72f6b36e11.svg"
                content="Making our clients benefit from decentralization, transparency,
                and security."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe rows">
                      <li className="sc-a234fd52-7 gfrWNW">BTC, ETH, DeX</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Web3auth, Cardano
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Polygon, BSC</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Coingeco, Moralis
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Solana, Near</li>
                      <li className="sc-a234fd52-7 gfrWNW">Infura, Alchemy</li>
                      <li className="sc-a234fd52-7 gfrWNW">Algorand, Hedera</li>
                      <li className="sc-a234fd52-7 gfrWNW">NFT, Launchpads</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Web3.js, Ether.js
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Metaverse, ICO</li>
                      <li className="sc-a234fd52-7 gfrWNW">Solana Anchor</li>
                      <li className="sc-a234fd52-7 gfrWNW">DeFI, Opensea </li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Starknet // Cairo
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Portfolio trackers
                      </li>
                    </ul>
                  </div>
                </div>
              </HoverableElement>
              <HoverableElement
                heading="web"
                headingClass="iCITFW"
                imageSrc="/ea4b10c4-18d4-43ae-b2ec-e4eb5b6c31fb.svg"
                content="30+ projects done. 13+ industries discovered."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe rows">
                      <li className="sc-a234fd52-7 gfrWNW">
                        React // React Query
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Vue</li>
                      <li className="sc-a234fd52-7 gfrWNW">Angular</li>
                      <li className="sc-a234fd52-7 gfrWNW">Nuxt</li>
                      <li className="sc-a234fd52-7 gfrWNW">TypeScript</li>
                      <li className="sc-a234fd52-7 gfrWNW">Gatsby</li>
                      <li className="sc-a234fd52-7 gfrWNW">JavaScript</li>
                      <li className="sc-a234fd52-7 gfrWNW">NextJS </li>
                      <li className="sc-a234fd52-7 gfrWNW">Redux</li>
                      <li className="sc-a234fd52-7 gfrWNW">MobX</li>
                    </ul>
                  </div>
                </div>
              </HoverableElement>
              <HoverableElement
                heading="server"
                headingClass="hKYhIY"
                imageSrc="/0ef44a69-f259-4153-9a02-df08086217a4.svg"
                content="Guarding mindful and effective data storage."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe rows">
                      <li className="sc-a234fd52-7 gfrWNW">Node JS</li>
                      <li className="sc-a234fd52-7 gfrWNW">REST </li>
                      <li className="sc-a234fd52-7 gfrWNW">Express JS</li>
                      <li className="sc-a234fd52-7 gfrWNW">Docker </li>
                      <li className="sc-a234fd52-7 gfrWNW">NestJS </li>
                      <li className="sc-a234fd52-7 gfrWNW">Apollo client </li>
                      <li className="sc-a234fd52-7 gfrWNW">GraphQL </li>
                      <li className="sc-a234fd52-7 gfrWNW">Rust</li>
                      <li className="sc-a234fd52-7 gfrWNW">API development </li>
                    </ul>
                  </div>
                </div>
              </HoverableElement>
              <HoverableElement
                heading="mobile"
                headingClass="iWhhda"
                imageSrc="/167d7d13-5e2e-4f5e-8ccb-a00e2233991c.svg"
                content="Rocking stores and markets with your ideas shaped in mobile
            apps."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe column">
                      <li className="sc-a234fd52-7 gfrWNW">React Native</li>
                      <li className="sc-a234fd52-7 gfrWNW">Dart // Flutter</li>
                    </ul>
                  </div>
                </div>
              </HoverableElement>
            </>
          ) : (
            <>
              <MobileHoverableElement
                heading="blockchain"
                headingSvgClass="gNJWVC blockchain"
                headingClass="blockchain"
                contentClass="eOnhFU"
                content="Making our clients benefit from decentralization, transparency, and
                security."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe rows">
                      <li className="sc-a234fd52-7 gfrWNW">BTC, ETH, DeX</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Web3auth, Cardano
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Polygon, BSC</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Coingeco, Moralis
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Solana, Near</li>
                      <li className="sc-a234fd52-7 gfrWNW">Infura, Alchemy</li>
                      <li className="sc-a234fd52-7 gfrWNW">Algorand, Hedera</li>
                      <li className="sc-a234fd52-7 gfrWNW">NFT, Launchpads</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Web3.js, Ether.js
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Metaverse, ICO</li>
                      <li className="sc-a234fd52-7 gfrWNW">Solana Anchor</li>
                      <li className="sc-a234fd52-7 gfrWNW">DeFI, Opensea</li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Starknet // Cairo
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">
                        Portfolio trackers
                      </li>
                    </ul>
                  </div>
                </div>
              </MobileHoverableElement>

              <MobileHoverableElement
                heading="web"
                headingSvgClass="gOhnAs"
                headingClass=""
                contentClass="LXFHB"
                content="30+ projects done. 13+ industries discovered."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe rows">
                      <li className="sc-a234fd52-7 gfrWNW">
                        React // React Query
                      </li>
                      <li className="sc-a234fd52-7 gfrWNW">Vue</li>
                      <li className="sc-a234fd52-7 gfrWNW">Angular</li>
                      <li className="sc-a234fd52-7 gfrWNW">Nuxt</li>
                      <li className="sc-a234fd52-7 gfrWNW">TypeScript</li>
                      <li className="sc-a234fd52-7 gfrWNW">Gatsby</li>
                      <li className="sc-a234fd52-7 gfrWNW">JavaScript</li>
                      <li className="sc-a234fd52-7 gfrWNW">NextJS</li>
                      <li className="sc-a234fd52-7 gfrWNW">Redux</li>
                      <li className="sc-a234fd52-7 gfrWNW">MobX</li>
                    </ul>
                  </div>
                </div>
              </MobileHoverableElement>

              <MobileHoverableElement
                heading="server"
                headingSvgClass="gOIARq"
                headingClass=""
                contentClass="gKtvom"
                content="Guarding mindful and effective data storage."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe rows">
                      <li className="sc-a234fd52-7 gfrWNW">Node JS</li>
                      <li className="sc-a234fd52-7 gfrWNW">REST</li>
                      <li className="sc-a234fd52-7 gfrWNW">Express JS</li>
                      <li className="sc-a234fd52-7 gfrWNW">Docker</li>
                      <li className="sc-a234fd52-7 gfrWNW">NestJS</li>
                      <li className="sc-a234fd52-7 gfrWNW">Apollo client</li>
                      <li className="sc-a234fd52-7 gfrWNW">GraphQL</li>
                      <li className="sc-a234fd52-7 gfrWNW">Rust</li>
                      <li className="sc-a234fd52-7 gfrWNW">API development</li>
                    </ul>
                  </div>
                </div>
              </MobileHoverableElement>

              <MobileHoverableElement
                heading="mobile"
                headingSvgClass="gPfOpE"
                headingClass=""
                contentClass="kTgWyE"
                content="Guarding mindful and effective data storage."
              >
                <div className="sc-a234fd52-1 davcRd">
                  <div className="sc-a234fd52-2 igqoTq">
                    <div className="sc-a234fd52-3 ggQSeC">
                      <div className="sc-a234fd52-5 kHnNCW"></div>
                      <div className="sc-a234fd52-4 gqhejh"></div>
                    </div>
                    <ul className="sc-a234fd52-6 fIJOSe column">
                      <li className="sc-a234fd52-7 gfrWNW">React Native</li>
                      <li className="sc-a234fd52-7 gfrWNW">Dart // Flutter</li>
                    </ul>
                  </div>
                </div>
              </MobileHoverableElement>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
