import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Container, Row, Col } from "reactstrap";
import TitleImage from "../Components/Collections/headerTitle";
import List from "../Components/Collections/listItem";
import Filters from "../Components/Collections/Filters";
import "../collectionStyles.css";

export default function page() {
  return (
    <dic>
      <Header />
      <div class="marketplace">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="main sm:pr-0 pr-40 sm:pl-15 pl-20">
              <TitleImage />
              <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-5"></div>
                <div
                  class="col-lg-8 col-md-8 col-sm-7"
                  style={{ marginLeft: "-80px" }}
                >
                  <ul
                    class="nav nav-tabs d-flex flex-column flex-md-row
							sm:space-x-0 space-x-10
							mb-20
							sm:space-y-20"
                    role="tablist"
                  ></ul>
                </div>
              </div>
              <div class="tab-content">
                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                  <div class="row">
                    <Filters />
                    <div class="col">
                      <div class="section pt-20 pb-20 pr-15">
                        <div class="section__head">
                          <div
                            class="row justify-content-between
											align-items-center"
                          >
                            <div class="col-lg-3">
                              <div class="search">
                                <input
                                  id="filtersId"
                                  type="text"
                                  placeholder="Search by ID"
                                />
                                <button class="result">
                                  {" "}
                                  <i class="ri-search-line"></i>{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <List />
                        <div
                          class="row mt-30
										justify-content-between
										align-items-center"
                        >
                          <div class="col-lg-auto">
                            {" "}
                            <a
                              hidden=""
                              href="#"
                              class="btn btn-dark 
												btn-sm"
                            >
                              Previous
                            </a>{" "}
                          </div>
                          <div class="col-lg-auto">
                            <div
                              class="space-x-10 d-flex
												align-items-center"
                            >
                              <button
                                onClick="if (!window.__cfRLUnblockHandlers) return false; location.href='#'"
                                class="page_number 
													active"
                              >
                                {" "}
                                1{" "}
                              </button>
                              <button
                                onClick="if (!window.__cfRLUnblockHandlers) return false; location.href='#'"
                                class="page_number"
                              >
                                {" "}
                                2{" "}
                              </button>
                              <button
                                onClick="if (!window.__cfRLUnblockHandlers) return false; location.href='#'"
                                class="page_number"
                              >
                                {" "}
                                3{" "}
                              </button>
                            </div>
                          </div>
                          <div class="col-lg-auto">
                            {" "}
                            <a
                              href="#"
                              class="btn btn-dark
												btn-sm"
                            >
                              Next
                            </a>{" "}
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
      </div>

      <Footer />
    </dic>
  );
}
