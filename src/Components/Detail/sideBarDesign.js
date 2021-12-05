import React from "react";
import ryat from "../../images/raritymon-icon.svg";

export default function component() {
  return (
    <div class="col-lg-6">
      <div class="space-y-20">
        <div class="d-flex justify-content-between">
          <h2>Folktales of Lunaria: Blood Moon #1998</h2>
        </div>
        <div class="box">
          <div class="space-y-20">
            <div class="row">
              <div class="col-md-6">
                <ul class="nav nav-tabs d-flex space-x-10 mb-30" role="tablist">
                  <li class="nav-item">
                    <button
                      class="btn btn-lg active item-trait-data"
                      data-toggle="tab"
                      role="tab"
                    >
                      {" "}
                      Rarity Score: 46.17{" "}
                    </button>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul
                  class="nav nav-tabs d-flex space-x-10 mb-30 float-lg-right"
                  role="tablist"
                >
                  <li class="nav-item">
                    {" "}
                    <img class="item_img rarity-icon" src={ryat} alt="" />
                    <button
                      class="btn btn-lg active item-rarity-rank"
                      data-toggle="tab"
                      role="tab"
                    >
                      {" "}
                      Rank 1 / 2000
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="hr"></div>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Background: Bloodmoon</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border legendary-border legendary">
                            <div class="item-rarity-percentage">1.25%</div>
                            <div class="item-rarity-tier">Legendary</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter legendary-shake">
                        {" "}
                        <span
                          class="legendary"
                          style={{ width: "97.41121631860463%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Skin: White</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border rare-border rare">
                            <div class="item-rarity-percentage">10.00%</div>
                            <div class="item-rarity-tier">Rare</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter rare-shake">
                        {" "}
                        <span
                          class="rare"
                          style={{ width: "62.01167347884646%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Hair: Wrath (White)</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border legendary-border legendary">
                            <div class="item-rarity-percentage">0.40%</div>
                            <div class="item-rarity-tier">Legendary</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter legendary-shake">
                        {" "}
                        <span
                          class="legendary"
                          style={{ width: "98.85880751265816%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Clothes: Jailed (Black)</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border epic-border epic">
                            <div class="item-rarity-percentage">4.25%</div>
                            <div class="item-rarity-tier">Epic</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter epic-shake">
                        {" "}
                        <span
                          class="epic"
                          style={{ width: "75.0704342255782%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Eyes: Ghost (Red)</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border epic-border epic">
                            <div class="item-rarity-percentage">2.55%</div>
                            <div class="item-rarity-tier">Epic</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter epic-shake">
                        {" "}
                        <span
                          class="epic"
                          style={{ width: "94.45036315559247%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Mouth: Bite</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border rare-border rare">
                            <div class="item-rarity-percentage">10.30%</div>
                            <div class="item-rarity-tier">Rare</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter rare-shake">
                        {" "}
                        <span
                          class="rare"
                          style={{ width: "61.683937745073834%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Bloodmoon: Bloodmoon</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border epic-border epic">
                            <div class="item-rarity-percentage">1.60%</div>
                            <div class="item-rarity-tier">Epic</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter epic-shake">
                        {" "}
                        <span
                          class="epic"
                          style={{ width: "96.72752490180774%" }}
                        ></span>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="tier-title">Traits Count: 7</h3>
                        </div>
                        <div class="col-md-6 float-lg-right">
                          <div class="float-right tier-border epic-border epic">
                            <div class="item-rarity-percentage">1.60%</div>
                            <div class="item-rarity-tier">Epic</div>
                          </div>
                        </div>
                      </div>
                      <div class="meter epic-shake">
                        {" "}
                        <span
                          class="epic"
                          style={{ width: "96.72752490180774%" }}
                        ></span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
