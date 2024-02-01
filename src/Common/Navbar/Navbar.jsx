import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assests/logo.svg";
import "./Navbar.css";

function Navbar(props) {
  const path = useLocation();
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, [scroll]);

  useEffect(() => {
    setActive(path.pathname);
  }, [path]);

  return (
    <div>
      <div className={scroll ? "navbar-wrapper scroll" : "navbar-wrapper"}>
        <div className="navbar">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="lists">
            <ul className={active !== "/" ? "list" : "list home"}>
              <li>
                <Link
                  className={active === "/" ? "link active" : "link"}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={active === "" ? "link active" : "link"}
                  to={""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={active === "/locations" ? "link active" : "link"}
                  to={"/locations"}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  className={active === "" ? "link active" : "link"}
                  to={""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={active === "/contact" ? "link active" : "link"}
                  to={"/contact"}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className={
                    active === "/add-your-property"
                      ? "link active property"
                      : "link"
                  }
                  to={"/add-your-property"}
                >
                  Add Properties
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
