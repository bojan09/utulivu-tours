import "./Navbar.css";
import { useState } from "react";

// assets
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { close } from "../../assets";

// nav-links
import { navLinks } from "../../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar-container">
      <div className="desktop-navbar sm:hidden">
        <div className="logo">
          <img src={logo} alt="logo-img" className="logo-image" />
        </div>
        <nav className="nav-links__container">
          {navLinks.map((link) => (
            <ul className="nav-links" key={link.id}>
              <li
                className={`${
                  active === link.title ? "active-link" : "inactive-link"
                }`}
                onClick={() => setActive(link.title)}
              >
                <a className="nav-link " href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            </ul>
          ))}
        </nav>
      </div>

      <div className="mobile-navbar">
        <div className="logo">
          <img src={logo} alt="logo-img" className="logo-image" />
        </div>

        <nav className="nav-links__container">
          <img
            src={toggle ? close : menu}
            alt="nav"
            className="nav-link_menu"
            onClick={() => setToggle(!toggle)}
          />
          <ul className={`${!toggle ? "hidden" : "openMenu"} `}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "active-link" : "inactive-link"
                } nav-links`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a className="nav-link" href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
