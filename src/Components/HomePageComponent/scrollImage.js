import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
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
  SwiperCore.use([Autoplay]);
  const [arr, setArr] = useState([
    {
      index: "0",
      badgeImg: badge,
      avatareName: "Budverse Cans - Heritage Edition",
      release: "2021-11-29",
      image: budverse,
      herf: "budverse",
    },
    {
      index: "1",
      herf: "spacerexsquad",
      badgeImg: badge,
      avatareName: "Space Rex Squad",
      release: "2021-11-29",
      image: spacex,
    },
    {
      index: "2",
      herf: "angryworms",
      badgeImg: badge,
      avatareName: "AngryWorms",
      release: "2021-11-24",
      image: angry,
    },
    {
      index: "3",
      herf: "rarewojaks",
      badgeImg: badge,
      avatareName: "Rare Wojaks",
      release: "2021-11-24",
      image: wojak,
    },
    {
      index: "4",
      herf: "hivekeepers",
      badgeImg: badge,
      avatareName: "HiveKeepers",
      release: "2021-12-02",
      image: hiva,
    },
    {
      index: "5",
      herf: "mysticgirlsclub",
      badgeImg: badge,
      avatareName: "Mystic Girls Club",
      release: "2021-12-01",
      image: mystic,
    },
    {
      index: "6",
      herf: "lunariabloodmoon",
      badgeImg: badge,
      avatareName: "Folktales of Lunaria: Blood Moon",
      release: "2021-11-30",
      image: Folk,
    },
    {
      index: "7",
      herf: "zombieapesclub",
      badgeImg: badge,
      avatareName: "Zombie Apes Club",
      release: "2021-11-29",
      image: zombie,
    },
  ]);
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
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 1000 }}
                loop={true}
              >
                {arr.map((i) => (
                  <SwiperSlide>
                    <div
                      class="swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index={i.index}
                      style={styles}
                      role="group"
                      aria-label={i.index + "/ 16"}
                    >
                      <div
                        class="creator_item creator_card rounded_border
                            space-x-10"
                      >
                        <div class="avatars space-x-10">
                          <div class="media">
                            <div class="badge">
                              {" "}
                              <img src={i.badgeImg} alt="" />{" "}
                            </div>
                            <a href={"/Collections?collection=" + i.herf}>
                              {" "}
                              <img
                                src={i.image}
                                alt="Avatar"
                                class="avatar avatar-md"
                              />{" "}
                            </a>{" "}
                          </div>
                          <div>
                            {" "}
                            <a href={"/Collections?collection=" + i.herf}>
                              <p class="avatars_name color_black">
                                {i.avatareName}
                              </p>
                            </a>{" "}
                            <span class="price color_green">
                              Released: {i.release}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
