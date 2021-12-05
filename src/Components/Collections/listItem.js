import React from "react";
import luner from "../../images/lunariabloodmoon/1998.jpg";

export default function component() {
  const arr = ["", "", "", "", "", "", "", "", "", "", ""];
  return (
    <div class="row gx-3 mb-30_reset">
      {arr.map(() => {
        return (
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four">
              <div class="card_body space-y-10">
                <div class="card_head">
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={luner} alt="" />{" "}
                  </a>{" "}
                </div>
                <div class="flex-1 space-y-2 flex flex-col">
                  <div class="flex flex-row items-center justify-between">
                    <h3 class="text-lg font-medium text-mr-heading-purple">
                      <a
                        href="'/collection/' + $store.mints.collection.id + '/' + mint"
                        href="#"
                      >
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 h-mr-mint-overlay"
                        ></span>
                      </a>
                      <span x-text="name">Swine Gang #155</span>
                    </h3>
                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                      <span class="text-mr-signature-yellow pr-1">⍜</span>
                      <span x-text="rank">1</span>
                    </div>
                  </div>
                  <div class="mt-2 font-mono w-100 flex-auto">
                    <div class="flex flex-col">
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                        <div class="w-7/12">Trait</div>
                        <div class="w-2/12">Rarity</div>
                        <div class="w-3/12 text-right">%</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                        <div
                          class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Background: Cliff By The Ocean"
                        >
                          Background: Cliff By The Ocean
                        </div>
                        <div class="w-2/12">1/1</div>
                        <div class="w-3/12 text-right">(0.09%)</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                        <div
                          class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Headwear: Gold Crown"
                        >
                          Headwear: Gold Crown
                        </div>
                        <div class="w-2/12">1/1</div>
                        <div class="w-3/12 text-right">(0.09%)</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                        <div
                          class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Clothing: King's Robe"
                        >
                          Clothing: King's Robe
                        </div>
                        <div class="w-2/12">1/1</div>
                        <div class="w-3/12 text-right">(0.09%)</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                        <div
                          class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Type: Pink"
                        >
                          Type: Pink
                        </div>
                        <div class="w-2/12">1/293</div>
                        <div class="w-3/12 text-right">(26.37%)</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                        <div
                          class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Eyewear: Blank"
                        >
                          Eyewear: Blank
                        </div>
                        <div class="w-2/12">1/543</div>
                        <div class="w-3/12 text-right">(48.87%)</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                        <div
                          class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Mouth: No trait"
                        >
                          Mouth: No trait
                        </div>
                        <div class="w-2/12">1/850</div>
                        <div class="w-3/12 text-right">(76.51%)</div>
                      </div>
                      <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                        <div
                          class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="Absolute Rarity"
                        >
                          |Rarity|
                        </div>
                        <div
                          class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis"
                          title="rarity + '%'"
                          title="7.191210838980575e-11%"
                          x-text="rarity.toFixed(20) + '%'"
                        >
                          0.00000000007191210839%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div class="card__item four">
                        <div class="card_body space-y-10">
                          <div class="card_head"> <a href="#"> <img src="images/lunariabloodmoon/1998.jpg" alt=""> </a> </div>
                            <div class="flex-1 space-y-2 flex flex-col">
                                <div class="flex flex-row items-center justify-between">
                                    <h3 class="text-lg font-medium text-mr-heading-purple">
                                    <a x-bind:href="'/collection/' + $store.mints.collection.id + '/' + mint" href="#">
                                        <span aria-hidden="true" class="absolute inset-0 h-mr-mint-overlay"></span>
                                    </a>
                                    <span x-text="name">Swine Gang #155</span>
                                    </h3>
                                    <div class="text-mr-lumen-purple hover:text-mr-signature-yellow bg-mr-heading-purple px-2 py-1 rounded bg-gradient-to-b from-mr-space-purple via-mr-stratos-purple to-mr-atmos-purple">
                                        <span class="text-mr-signature-yellow pr-1">⍜</span><span x-text="rank">1</span>
                                    </div>
                                </div>
                                <div class="mt-2 font-mono w-100 flex-auto">
                                    <div class="flex flex-col">
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pb-2 mb-2 border-b border-mr-rarity">
                                            <div class="w-7/12">Trait</div>
                                            <div class="w-2/12">Rarity</div>
                                            <div class="w-3/12 text-right">%</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Background: Cliff By The Ocean">Background: Cliff By The Ocean</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Headwear: Gold Crown">Headwear: Gold Crown</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Clothing: King's Robe">Clothing: King's Robe</div>
                                            <div class="w-2/12">1/1</div>
                                            <div class="w-3/12 text-right">(0.09%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Type: Pink">Type: Pink</div>
                                            <div class="w-2/12">1/293</div>
                                            <div class="w-3/12 text-right">(26.37%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Eyewear: Blank">Eyewear: Blank</div>
                                            <div class="w-2/12">1/543</div>
                                            <div class="w-3/12 text-right">(48.87%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-normal text-grey-900">
                                            <div class="w-7/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Mouth: No trait">Mouth: No trait</div>
                                            <div class="w-2/12">1/850</div>
                                            <div class="w-3/12 text-right">(76.51%)</div>
                                        </div>
                                        <div class="items-start justify-between w-100 flex flex-nowrap flex-row text-mr-rarity font-semibold text-mr-standout-purple pt-2 mt-2 border-t border-mr-rarity">
                                            <div class="w-3/12 whitespace-nowrap overflow-hidden overflow-ellipsis" title="Absolute Rarity">|Rarity|</div>
                                            <div class="w-9/12 text-right whitespace-nowrap overflow-hidden overflow-ellipsis" x-bind:title="rarity + '%'" title="7.191210838980575e-11%" x-text="rarity.toFixed(20) + '%'">0.00000000007191210839%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                      </div>
                    </div> */}
    </div>
  );
}
