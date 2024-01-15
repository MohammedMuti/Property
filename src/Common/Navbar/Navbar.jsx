import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assests/logo.svg";
import "./Navbar.css";

function Navbar(props) {
  const path = useLocation();
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("/");
  const [meanNav, setMeanNav] = useState(false);
  const [services, setServices] = useState(false);

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
  }, path);

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
                  className={
                    active === "/add-your-property" ? "link active" : "link"
                  }
                  to={"/add-your-property"}
                >
                  Add Properties
                </Link>
              </li>
              <li>
                <Link
                  className={active === "" ? "link active" : "link"}
                  to={""}
                >
                  Properties
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
                  Contact
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
