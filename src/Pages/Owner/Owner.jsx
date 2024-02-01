import React from "react";
import { Link } from "react-router-dom";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import AboutH from "./AboutH";
import MaintainanceH from "./MaintainanceH";
import "./Owner.css";

function Owner(props) {
  return (
    <div>
      <Navbar />

      {/* <div className="main-banner-wrapper">
        <div className="main-banner">
          <div className="content">
            <h2>Navigating Your Real Estate Journey</h2>
            <h3>Unlocking the Door to Your Investment Success</h3>
            <Link>ADD your Property</Link>
          </div>
        </div>
      </div> */}

      <div className="main-banner-wrappe">
        <div className="main-banner">
          <div className="main-image">
            <img src={require("../../Assests/banner.webp")} alt="" />
          </div>
          <div className="main-content">
            <h2>Global Iconic Ventures</h2>
            <h3>
              Your Trusted Partner In Property And Rental Management Excellence
            </h3>
            <Link to={"/add-your-property"}>ADD your Property</Link>
            <Link to={"/search-property"}>Search for Property</Link>
          </div>
        </div>
      </div>

      <AboutH />

      <MaintainanceH />

      <ContactComp />

      <Footer />
    </div>
  );
}

export default Owner;
