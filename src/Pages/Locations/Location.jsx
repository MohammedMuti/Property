import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../Common/Banner/Banner";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import "./Location.css";

function Location(props) {
  return (
    <div>
      <Navbar />
      <Banner title={"Locations"} />

      <div className="locations">
        <div className="content">
          <div className="heading">
            <h2>We have Properties at these Locations</h2>
          </div>
          <div className="loc">
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>Bangalore</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>Bangalore</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>Bangalore</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>Bangalore</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Location;
