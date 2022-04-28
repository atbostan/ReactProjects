import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.style.scss";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link className="nav-links" to="/">
          <img src={images.logoNav} alt="" />
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          {["Home", "About", "Contact"].map((item) => (
            <li key={`link-${item}`}>
              {item === "Home" ? (
                <Link className="nav-links" to="/">
                  {item}
                </Link>
              ) : (
                <Link className="nav-links" to={item}>
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
