import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
//import { IoClose } from "react-icons/io5";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (e) => {
    if (isMobileMenuOpen && !e.target.closest("nav")) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMobileMenu);
    return () => document.removeEventListener("click", closeMobileMenu);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-body text-white pt-5 pb-4 px-8">
      <nav className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-12 ml-[0] md:ml-[20%]"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden cursor-pointer text-white bg-primary text-2xl py-1 px-1.5"
          onClick={toggleMobileMenu}
        >
          <TiThMenu />
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed md:static top-0 right-0 h-[95%] md:h-auto md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out z-50 md:rounded-none md:py-0 bg-white w-1/2 md:w-auto md:p-0 shadow-lg md:shadow-none transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <div className="md:hidden text-white bg-primary w-full text-center italic py-10 mb-6">
            <p>Crafting Excellence</p>
            <p>in Every Byte</p>
          </div>
          {/* Nav Links */}
          {["Home", "Services", "Portfolio", "About Us", "Contact Us"].map(
            (link, index) => (
              <li key={index}>
                <NavLink
                  to={
                    link === "Home"
                      ? "/"
                      : `/${link.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-blue-500 font-bold block py-2 md:py-0"
                        : "text-black block py-2 md:py-0 hover:text-primary"
                    } text-center`
                  }
                >
                  {link}
                </NavLink>
              </li>
            )
          )}

          {/* Request Quote Button */}
          <li>
            <NavLink to="/request-quote">
              <button className="bg-primary text-white px-5 py-2 rounded-lg hover:cursor-pointer mr-3 md:mt-0 md:ml-0 mt-6 ml-[72px]">
                Request a Quote
              </button>
            </NavLink>
          </li>

          {/* Social Media Icons (Mobile Only) */}
          <div className="flex justify-center space-x-4 mt-10 mb-6 md:hidden">
            <a href="#" className="bg-black p-1.5 rounded-full">
              <FaFacebookF className="fill-white" />
            </a>
            <a href="#" className="bg-black p-1.5 rounded-full">
              <FaLinkedinIn className="fill-white" />
            </a>
            <a href="#" className="bg-black p-1.5 rounded-full">
              <FaSquareInstagram className=" fill-white" />
            </a>

            <a href="#" className="bg-black p-1.5 rounded-full">
              <FaXTwitter className=" fill-white" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
