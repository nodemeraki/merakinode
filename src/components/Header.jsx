import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-body">
      <nav className="flex justify-between items-center py-6 px-6 container mx-auto">
        {/* logo */}
        <div>
          <img src={logo} alt="logo" className="h-12" />
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden cursor-pointer text-white bg-primary text-2xl py-1 px-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <TiThMenu />}
        </button>

        {/* desktop nav */}
        <ul
          className={`fixed md:static z-10 top-0 right-0 h-screen md:h-auto md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out bg-white w-2/3 p-6 md:w-auto md:p-0 shadow-lg md:shadow-none transform ${
            isOpen
              ? "translate-x-0 flex-col gap-4"
              : "translate-x-full gap-4 hidden"
          } md:translate-x-0 flex justify-center items-center`}
        >
          {/* Slogan (Mobile only) */}
          {isOpen && (
            <div className="relative md:hidden text-white bg-primary w-full text-center italic py-10 mb-6">
              <p>
                Crafting Excellence <br /> in Every Byte
              </p>
              <IoClose
                size={24}
                className="absolute top-6  right-6 fill-white hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          )}
          {/* nav links */}
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
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
                      isActive ? "text-primary" : "text-black"
                    } font-bold hover:text-primary`
                  }
                >
                  {link}
                </NavLink>
              </li>
            )
          )}

          {/* Social Media Icons (Mobile Only) */}
          <div className="flex justify-center space-x-4 mt-10 mb-6 md:hidden">
            <a href="#" className="bg-black p-1.5 rounded-full">
              <FaFacebookF className=" fill-white" />
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
};

export default Header;
