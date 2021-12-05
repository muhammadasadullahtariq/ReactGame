import React, { useState } from "react";
import badge from "../../images/Badge.svg";
import spacex from "../../images/collectionIcons/spacerexsquad.jpg";
import budverse from "../../images/collectionIcons/budversecans.gif";
import angry from "../../images/collectionIcons/angryworms.gif";
import wojak from "../../images/collectionIcons/rareojaks.jpg";
import hiva from "../../images/collectionIcons/hivekeepers.jpg";
import mystic from "../../images/collectionIcons/mysticgirlsclub.jpg";
import Folk from "../../images/collectionIcons/lunariabloodmoon.png";
import zombie from "../../images/collectionIcons/zombieapesclub.jpg";

export default function Screen() {
  // const [arr,setArr]=useState()
  // var array=[{index:"0",badgeImg:badge,avatareName:"Budverse Cans - Heritage Edition",release: "2021-11-29",image:budverse,herf="budverse"},{index:"1",herf="spacerexsquad",badgeImg:badge,avatareName:"Space Rex Squad",release:"2021-11-29",image:spacex},{index:"2",herf="angryworms",badgeImg:badge,avatareName:"AngryWorms",release:"2021-11-24",image:angry},{index:"3",herf="rarewojaks",badgeImg:badge,avatareName:"Rare Wojaks",release:"2021-11-24",image:wojak},{index:"4",herf="hivekeepers",badgeImg:badge,avatareName:"HiveKeepers",release:"2021-12-02",image:hiva},{index:"5",herf="mysticgirlsclub",badgeImg:badge,avatareName:"Mystic Girls Club",release:"2021-12-01",image:mystic},{index:"6",herf="lunariabloodmoon",badgeImg:badge,avatareName:"Folktales of Lunaria: Blood Moon",release:"2021-11-30",image:Folk},{index:"7",herf="zombieapesclub",badgeImg:badge,avatareName:"Zombie Apes Club",release:"2021-11-29",image:zombie}]
  const styles = {
    width: "336.5px",
    marginRight: "10px",
    display: "inline-block",
  };
  return (
    <div class="section__artists mt-100">
      <div class="container">
        <div class="space-y-30">
          <div class="section_head">
            <h2 class="section__title">Newest Collections</h2>
          </div>
          <div class="section_body swiper_artists swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
            <div
              class="swiper-wrapper position-relative"
              id="swiper-wrapper-1c1759724f18127f"
              aria-live="polite"
              style={{
                transform: "translate(-1386px, 0px, 0px)",
                transitionDuration: "0ms",
              }} //"transform: translate3d(-1386px, 0px, 0px); transition-duration: 0ms;"
            >
              {/* {
                arr.map((i)=>{return(   <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={i.index} style={styles} role="group" aria-label={i.index+" / 8"}>
            <div class="creator_item creator_card rounded_border
                            space-x-10">
              <div class="avatars space-x-10">
                <div class="media">
                  <div class="badge"> <img src={badge} alt=""/> </div>
                  <a href={"/Collections?collection="+i.herf}> <img src={i.image} alt="Avatar" class="avatar avatar-md"/> </a> </div>
                <div> <a href={"/Collections?collection="+i.herf}>
                  <p class="avatars_name color_black">{i.avatareName}</p>
                  </a> <span class="price color_green">Released:+{i.release} </span> </div>
              </div>
            </div>
          </div>)})
            } */}
              <div
                class="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="4"
                style={styles}
                role="group"
                aria-label="1 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=budverse">
                        {" "}
                        <img
                          src={budverse}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=budverse">
                        <p class="avatars_name color_black">
                          Budverse Cans - Heritage Edition
                        </p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-29
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="5"
                style={styles}
                role="group"
                aria-label="2 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=spacerexsquad">
                        {" "}
                        <img
                          src={spacex}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=spacerexsquad">
                        <p class="avatars_name color_black">Space Rex Squad</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-29
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="6"
                style={styles}
                role="group"
                aria-label="3 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=angryworms">
                        {" "}
                        <img
                          src={angry}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=angryworms">
                        <p class="avatars_name color_black">AngryWorms</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-24
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                data-swiper-slide-index="7"
                style={styles}
                role="group"
                aria-label="4 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=rarewojaks">
                        {" "}
                        <img
                          src={wojak}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=rarewojaks">
                        <p class="avatars_name color_black">Rare Wojaks</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-24
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-active"
                data-swiper-slide-index="0"
                style={styles}
                role="group"
                aria-label="5 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=hivekeepers">
                        {" "}
                        <img
                          src={hiva}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=hivekeepers">
                        <p class="avatars_name color_black">HiveKeepers</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-12-02
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-next"
                data-swiper-slide-index="1"
                style={styles}
                role="group"
                aria-label="6 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=mysticgirlsclub">
                        {" "}
                        <img
                          src={mystic}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=mysticgirlsclub">
                        <p class="avatars_name color_black">
                          Mystic Girls Club
                        </p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-12-01
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="2"
                style={styles}
                role="group"
                aria-label="7 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=lunariabloodmoon">
                        {" "}
                        <img
                          src={Folk}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=lunariabloodmoon">
                        <p class="avatars_name color_black">
                          Folktales of Lunaria: Blood Moon
                        </p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-30
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="3"
                style={styles}
                role="group"
                aria-label="8 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=zombieapesclub">
                        {" "}
                        <img
                          src={zombie}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=zombieapesclub">
                        <p class="avatars_name color_black">Zombie Apes Club</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-29
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="4"
                style={styles}
                role="group"
                aria-label="9 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=budverse">
                        {" "}
                        <img
                          src={budverse}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=budverse">
                        <p class="avatars_name color_black">
                          Budverse Cans - Heritage Edition
                        </p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-29
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="5"
                style={styles}
                role="group"
                aria-label="10 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=spacerexsquad">
                        {" "}
                        <img
                          src={spacex}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=spacerexsquad">
                        <p class="avatars_name color_black">Space Rex Squad</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-29
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="6"
                style={styles}
                role="group"
                aria-label="11 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=angryworms">
                        {" "}
                        <img
                          src={angry}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=angryworms">
                        <p class="avatars_name color_black">AngryWorms</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-24
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate-prev"
                data-swiper-slide-index="7"
                style={styles}
                role="group"
                aria-label="12 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=rarewojaks">
                        {" "}
                        <img
                          src={wojak}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=rarewojaks">
                        <p class="avatars_name color_black">Rare Wojaks</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-24
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="0"
                style={styles}
                role="group"
                aria-label="13 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=hivekeepers">
                        {" "}
                        <img
                          src={hiva}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=hivekeepers">
                        <p class="avatars_name color_black">HiveKeepers</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-12-02
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="1"
                style={styles}
                role="group"
                aria-label="14 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=mysticgirlsclub">
                        {" "}
                        <img
                          src={mystic}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=mysticgirlsclub">
                        <p class="avatars_name color_black">
                          Mystic Girls Club
                        </p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-12-01
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="2"
                style={styles}
                role="group"
                aria-label="15 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=lunariabloodmoon">
                        {" "}
                        <img
                          src={Folk}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=lunariabloodmoon">
                        <p class="avatars_name color_black">
                          Folktales of Lunaria: Blood Moon
                        </p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-30
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="3"
                style={styles}
                role="group"
                aria-label="16 / 16"
              >
                <div
                  class="creator_item creator_card rounded_border
                            space-x-10"
                >
                  <div class="avatars space-x-10">
                    <div class="media">
                      <div class="badge">
                        {" "}
                        <img src={badge} alt="" />{" "}
                      </div>
                      <a href="/Collections?collection=zombieapesclub">
                        {" "}
                        <img
                          src={zombie}
                          alt="Avatar"
                          class="avatar avatar-md"
                        />{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="/Collections?collection=zombieapesclub">
                        <p class="avatars_name color_black">Zombie Apes Club</p>
                      </a>{" "}
                      <span class="price color_green">
                        Released: 2021-11-29
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div
              class="swiper-button-prev"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-1c1759724f18127f"
            ></div>
            <div
              class="swiper-button-next"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-1c1759724f18127f"
            ></div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
