import React from "react";
import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// assets
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import logo from "../assets/logo.png";

import { navLinks } from "../constants";

AOS.init({
  duration: 1000,
  offset: 100,
});

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // NavbarContainer
    <div className="flex justify-between items-center mb-[5rem] mx-[-1.5rem] z-10 ">
      {/* Logo */}
      <div>
        <a
          className="fixed top-9 left-5 md:left-12 md:top-3 tracking-wide font-[500] text-xl z-10 "
          href="/"
        >
          <img className="w-[3.8rem]" src={logo} alt="logo" />
        </a>
      </div>

      {/* NavLinks */}
      <ul className="sm:hidden md:flex gap-3 pt-4 fixed md:top-4 right-14 z-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "activeLink" : "text-secondary"
            } hover:text-blue-300 text-[18px] font-medium cursor-pointer py-1 px-[6px] `}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* MobileNav */}
      <div
        className={`${
          toggle ? "bg-blue-200" : "bg-inherit"
        } md:hidden flex flex-col items-end z-30 fixed top-0 right-0 w-[50%] h-[100%] pr-6 pt-10`}
      >
        <img
          src={toggle ? close : menu}
          alt="navlist-menu"
          className="w-[28px] h-[28xp] object-contain cursor-pointer mb-5 "
          onClick={() => setToggle(!toggle)}
        />
        <ul className={`${!toggle ? "hidden" : "openMenu"}`}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-bold uppercase cursor-pointer text-[20px] `}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
