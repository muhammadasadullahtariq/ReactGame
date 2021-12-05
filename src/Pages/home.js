import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Container, Row, Col } from "reactstrap";
import gitImage from "../images/metalordz.gif";
import Slider from "../Components/HomePageComponent/scrollImage";
import BottomImage from "../Components/HomePageComponent/scrollViewBottom";

export default function page() {
  return (
    <div>
      <Header />
      <div class="hero__1 py-20 bg-pixelprimates">
        <Container>
          <Row className="align-items-center">
            {/* 6 2 2 */}
            <Col className="col-lg-6 col-sm-12 order-2 order-sm-2">
              <div class="hero__left space-y-20">
                {/* !important;"*/}
                <h1 class="hero__title" style={{ color: "#FFFFFF !important" }}>
                  {" "}
                  <span class="text-halloween" style={{ color: "#ff0000" }}>
                    Featured Collection:
                  </span>
                  <br />
                  Meta Lordz{" "}
                </h1>
                <p class="hero__text txt" style={{ color: "#FFFFFF" }}>
                  Meta Lordz is a one of its kind NFT project consisting of 9999
                  unique digitally hand drawn warriors in REALISM art form on
                  the Ethereum blockchain, with an upcoming RPG Play-To-Earn
                  Game and Tokenomics.
                </p>
                <p class="hero__text txt" style={{ color: "#FFFFFF" }}>
                  There are 4 warrior types with their own sets of 250+
                  intricately designed attributes.
                </p>
                <p class="hero__text txt" style={{ color: "#FFFFFF" }}>
                  Price : 0.09 ETH
                </p>
                <div
                  class="space-x-20 d-flex flex-column flex-md-row
                        sm:space-y-20"
                >
                  {" "}
                  <a class="btn btn-featured col-8" href="#" target="_blank">
                    <span class="iconify"></span> Website{" "}
                  </a>{" "}
                </div>
                <div class="space-x-20 d-flex btn-group col-lg-8">
                  {" "}
                  <a class="btn btn-featured" href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--akar-icons"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      data-icon="akar-icons:discord-fill"
                    >
                      <g fill="none">
                        <path
                          d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963c.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    Discord
                  </a>{" "}
                  <a class="btn btn-featured" href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--akar-icons"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      data-icon="akar-icons:twitter-fill"
                    >
                      <g fill="none">
                        <path
                          d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    Twitter
                  </a>{" "}
                </div>
              </div>
            </Col>
            <Col class="col-lg-6 col-sm-12 order-1">
              {" "}
              <img
                class="img-fluid w-half feature-border"
                src={gitImage}
                alt="Meta Lordz"
              />{" "}
            </Col>
          </Row>
        </Container>
      </div>
      <Slider />
      <BottomImage />
      <Footer />
    </div>
  );
}
