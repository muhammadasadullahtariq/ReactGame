import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Container, Row, Col } from "reactstrap";
import detailImage from "../images/lunariabloodmoon/1998.jpg";
import SideBar from "../Components/Detail/sideBarDesign";

export default function page() {
  return (
    <div>
      <Header />
      <div class="container item-container">
        {" "}
        <a href="#" class="btn btn-white btn-sm my-20">
          {" "}
          Back to Collection{" "}
        </a>
        <div class="item_details">
          <div class="row sm:space-y-20">
            <div class="col-lg-6">
              {" "}
              <img class="item_listing_img" src={detailImage} alt="" />{" "}
            </div>
            <SideBar />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
