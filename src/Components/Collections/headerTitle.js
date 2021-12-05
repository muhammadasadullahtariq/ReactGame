import React from "react";
import luner from "../../images/collectionIcons/lunariabloodmoon.png";

export default function component() {
  return (
    <div class="hero_marketplace">
      <div
        class="box hero__cover sm:ml-0 ml-20 d-flex flex-column flex-md-row
						justify-content-between
						space-x-50"
      >
        <div class="avatars space-x-10 mb-20">
          {" "}
          <a href="/Collections?collection=lunariabloodmoon">
            {" "}
            <img
              src={luner}
              alt="Avatar"
              class="avatar avatar-md border-0"
            />{" "}
          </a>
          <div class="space-y-5">
            {" "}
            <a href="/Collections?collection=lunariabloodmoon">
              <p class="avatars_name color_white">
                Folktales of Lunaria: Blood Moon
              </p>
            </a>{" "}
            <span class="links d-flex space-x-20">
              {" "}
              <a
                href="https://lunaria.gg/"
                target="_blank"
                class="d-flex align-items-center txt_xs"
              >
                <i class="ri-link mr-1"></i>{" "}
                <span
                  class="d-none
											d-md-block"
                >
                  {" "}
                  Website{" "}
                </span>{" "}
              </a>{" "}
              <a
                href="#"
                target="_blank"
                class="d-flex align-items-center txt_xs"
              >
                <i class="ri-discord-fill mr-1"></i>{" "}
                <span
                  class="d-none
											d-md-block"
                >
                  {" "}
                  Discord{" "}
                </span>{" "}
              </a>{" "}
              <a
                href="#"
                target="_blank"
                class="d-flex align-items-center txt_xs"
              >
                <i class="ri-twitter-fill mr-1"></i>{" "}
                <span
                  class="d-none
											d-md-block"
                >
                  {" "}
                  Twitter{" "}
                </span>{" "}
              </a>{" "}
            </span>{" "}
          </div>
        </div>
        <div class="avatars m-0">
          <div
            class="details sm:space-x-0 sm:space-y-10 space-x-20 d-flex
								flex-column
								flex-md-row"
          >
            <div>
              <p class="color_brand txt_xs"> Total Items </p>
              <p class="color_black">2000</p>
            </div>
            <div>
              <p class="color_brand txt_xs"> Mint Status </p>
              <p class="color_black">Completed</p>
            </div>
            <div>
              <p class="color_brand txt_xs"> Network </p>
              <p class="color_black">Solana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
