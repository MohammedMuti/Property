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

      <div className="main-banner-wrapper">
        <div className="main-banner">
          <div className="content">
            <h2>Navigating Your Real Estate Journey</h2>
            <h3>Unlocking the Door to Your Investment Success</h3>
            <Link>ADD your Property</Link>
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
