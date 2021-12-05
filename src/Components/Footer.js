import React from "react";
import { Container, Row, Col } from "reactstrap";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import logo from "../images/logo.webp";

export default function Footer() {
  return (
    <footer class="footer__1" style={{ marginTop: "70px" }}>
      <Container>
        <Row>
          <div class="col-lg-6 space-y-20">
            <div class="footer__logo">
              {" "}
              <a href="#">
                {" "}
                <img src={logo} alt="logo" />{" "}
              </a>{" "}
            </div>
            <p class="footer__text">
              {" "}
              RarityMon is the most accurate NFT rarity tracker available,
              supporting thousands of NFT consumers everyday.{" "}
            </p>
            <div>
              <ul class="footer__social space-x-10 mb-40">
                <li>
                  {" "}
                  <a href="#" target="_blank">
                    {" "}
                    <img src={discord} />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#" target="_blank">
                    {" "}
                    <img src={twitter} />{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/*2,4 */}
          <Col lg={2} xs={4}>
            <h6 class="footer__title">Collections</h6>
            <ul class="footer__list">
              <li>
                {" "}
                <a href="#"> Ethereum </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Solana</a>{" "}
              </li>
            </ul>
          </Col>
          <Col lg={2} xs={4}>
            <h6 class="footer__title">Need Help?</h6>
            <ul class="footer__list">
              <li>
                {" "}
                <a href="#">Upcoming</a>
              </li>
              <li>
                {" "}
                <a href="#">Get Listed</a>
              </li>
              <li>
                {" "}
                <a href="#">About Us</a>
              </li>
              <li>
                {" "}
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} xs={4}>
            <h6 class="footer__title">Policies &amp; Legal</h6>
            <ul class="footer__list">
              <li>
                {" "}
                <a href="#">Terms of Use</a>
              </li>
              <li>
                {" "}
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
        <p class="copyright text-center">
          {" "}
          Copyright © 2021. Created with love by the RarityMon team.{" "}
        </p>
      </Container>
    </footer>
  );
}
