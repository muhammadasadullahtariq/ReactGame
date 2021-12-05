import React from "react";
import monster from "../../images/joint-monsters.webp";
export default function screen() {
  return (
    <div class="call2action">
      <div class="container">
        <div
          class="row justify-content-between align-items-center
            sm:space-y-20"
        >
          <div class="col-md-6">
            <div class="space-y-20">
              <h1 class="text-white">
                Get Your Project Listed on RarityMon Today!
              </h1>
              <p class="color_text section__text">
                RarityMon is the most accurate NFT rarity tracker available and
                supports thousands of NFT consumers everyday. From getting seen
                by thousands, to having custom bots developed for your community
                and more - the choice is easy. List with RarityMon!
              </p>
              <a
                href="#"
                class="btn
                        btn-primary"
              >
                Click Here to Get Started
              </a>
            </div>
          </div>
          <div class="col-md-auto">
            <img class="img-fluid img__logo" src={monster} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
