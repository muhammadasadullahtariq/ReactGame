import React from "react";
import logo from "../images/logo.webp";
import solman from "../images/solana-sol-logo.svg";
import etherem from "../images/ethereum-eth-logo.svg";
import discord from "../images/discord.svg";

export default function Header() {
  return (
    <header class="header__1 js-header">
      <div class="container">
        <div class="wrapper js-header-wrapper">
          <div class="header__logo">
            {" "}
            <a href="#">
              {" "}
              <img class="header__logo" src={logo} alt="logo" />{" "}
            </a>{" "}
          </div>
          <div class="header__menu">
            <ul class="d-flex space-x-20">
              <li class="has_popup">
                {" "}
                <a class="color_black" href="#">
                  All Collections <i class="ri-more-2-fill"></i>
                </a>
                <ul class="menu__popup space-y-20">
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <img
                        src={solman}
                        alt="logo"
                        class="nav-token-logo"
                      />{" "}
                      Solana{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <img
                        src={etherem}
                        alt="logo"
                        class="nav-token-logo"
                      />{" "}
                      Ethereum
                    </a>{" "}
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a class="color_black" href="#">
                  Upcoming
                </a>{" "}
              </li>
              <li>
                {" "}
                <a class="color_black" href="#">
                  Get Listed
                </a>{" "}
              </li>
              <li>
                {" "}
                <a class="color_black" href="#">
                  About Us
                </a>{" "}
              </li>
              <li>
                {" "}
                <a class="color_black" href="#">
                  Contact
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" target="_blank">
                  {" "}
                  <img
                    src={discord}
                    alt="Join us on Discord"
                    class="nav-token-logo"
                  />{" "}
                  Discord{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
          <div class="header__search">
            <input
              type="text"
              id="collectionSearch"
              autocomplete="on"
              placeholder="Search Collection"
            />
            <button class="header__result">
              {" "}
              <i class="ri-search-line"></i>{" "}
            </button>
          </div>
          <div class="header__burger js-header-burger" onClick="alert();" ></div>
          <div class="header__mobile js-header-mobile">
            <div class="header__mobile__menu space-y-40">
              <div class="space-y-20">
                <div class="header__search in_mobile w-full">
                  <input
                    type="text"
                    id="collectionSearchMobile"
                    autocomplete="off"
                    placeholder="Search Collection"
                  />
                  <button class="header__result">
                    {" "}
                    <i class="ri-search-line"></i>{" "}
                  </button>
                </div>
              </div>
              <ul class="d-flex space-y-20">
                <li>
                  {" "}
                  <a class="color_black" href="#">
                    {" "}
                    All Collections
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="color_black" href="#">
                    {" "}
                    Upcoming
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="color_black" href="#">
                    {" "}
                    Get Listed
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="color_black" href="#">
                    {" "}
                    About Us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="color_black" href="#">
                    {" "}
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
