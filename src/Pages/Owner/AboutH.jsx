import {
  faHandHoldingDollar,
  faScrewdriverWrench,
  faUserCheck,
  faUserGear,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function AboutH(props) {
  return (
    <div>
      <div className="aboutH">
        <div className="info">
          <h2>
            We Care About Your <span>Property</span>
          </h2>
          <p>
            At [Company Name], we understand the unique challenges of managing
            real estate from a distance. As property owners who may reside
            outside the city, entrusting your valuable assets to a reliable
            property management company is crucial. We specialize in overseeing
            and optimizing the rental experience for absentee property owners,
            ensuring that your investment is not only well-maintained but also
            maximizes its earning potential.
          </p>
          <Link>Know More</Link>
        </div>
        <div className="content">
          <div className="content-container">
            <div className="icon">
              <FontAwesomeIcon
                icon={faUserCheck}
                style={{ color: "#F76766" }}
              />
            </div>
            <div className="content-info">
              <h3>Verified Tenants</h3>
              <p>
                We place only responsible tenants who will treat your property
                well.{" "}
              </p>
            </div>
          </div>
          <div className="content-container">
            <div className="icon">
              <FontAwesomeIcon
                icon={faUsersGear}
                style={{ color: "#265FDB" }}
              />
            </div>
            <div className="content-info">
              <h3>TENANT MANAGEMENT</h3>
              <p>
                We provide full support to tenants from their move-in till exit.
              </p>
            </div>
          </div>
          <div className="content-container">
            <div className="icon">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                style={{ color: "#57C0CE" }}
              />
            </div>
            <div className="content-info">
              <h3>MAINTENANCE & INTERIORS</h3>
              <p>We keep your property safe, intact and well-maintained.</p>
            </div>
          </div>
          <div className="content-container">
            <div className="icon">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                style={{ color: "#A666F7" }}
              />
            </div>
            <div className="content-info">
              <h3>RENT COLLECTION</h3>
              <p>
                We take responsibility for payments & follow up for any dues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutH;
