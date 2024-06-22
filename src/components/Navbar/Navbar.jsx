import "./Navbar.css";
import { useState } from "react";

// assets
import { close, menu, logo } from "../../assets";

// nav-links
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar-container">
      <div className="desktop-navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo-img" className="logo-image" />
          </Link>
        </div>
        <nav className="nav-links__container">
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="nav-link" href="/#tours">
                Tours
              </a>
            </li>

            <li>
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>

            <li>
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo-img" className="logo-image" />
          </Link>
        </div>

        <nav className="nav-links__container">
          <img
            src={toggle ? close : menu}
            alt="nav"
            className="nav-link_menu"
            onClick={() => setToggle(!toggle)}
          />
          <ul className={`${!toggle ? "hidden" : "openMenu"} `}>
            <li>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="nav-link" href="/#tours">
                Tours
              </a>
            </li>

            <li>
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>

            <li>
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
