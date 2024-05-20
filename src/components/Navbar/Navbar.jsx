import "./Navbar.css";
import { useState } from "react";

// assets
import logo from "../../assets/logo-v2.png";
import menu from "../../assets/menu.png";
import { close } from "../../assets";

// nav-links
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar-container">
      <div className="desktop-navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo-img" className="logo-image" />
        </a>
        <nav className="nav-links__container">
          {navLinks.map((link) => (
            <ul className="nav-links" key={link.id}>
              <li>
                <a className="nav-link" href={`#${link.id}`}>
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
              <li>
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
