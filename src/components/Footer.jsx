import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

// import FooterBg from "../assets/footer-bg.png";
// import FooterBg from "/images/footer-bg.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div
        className="text-white py-12 bg-cover bg-center"
        // style={{ backgroundImage: `url(${FooterBg})` }}
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* === Mobile Version === */}
          <div className="flex flex-col items-center space-y-6 md:hidden">
            {/* Focus Text */}
            <p className="text-center text-sm leading-relaxed px-4">
              We have much planned for the future, working with great minds and
              clients.
            </p>

            {/* Navigation Links */}
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-primary transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center">
              <a href="#">
                <FaFacebookF className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="#">
                <FaLinkedinIn className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
              </a>

              <a href="#">
                <FaSquareInstagram className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="#">
                <FaXTwitter className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* === Desktop Version === */}
          <div className="hidden md:flex flex-row gap-12">
            {/* Our Focus Section */}
            <div className="flex-1 ml-7">
              <h3 className="text-xl mb-4">Our Focus</h3>
              <p className="text-sm leading-relaxed mb-4">
                We have much planned for the future,
                <br />
                working with great minds and clients.
              </p>
              <p className="font-bold text-lg">+234057005399</p>
              <p className="hover:underline cursor-pointer">
                info@merakinode.com
              </p>
              {/* Social Media Icons */}
              <div className="mt-4">
                <p>Follow Us:</p>
                <div className="flex space-x-3 mt-2">
                  <a href="#">
                    <FaFacebookF className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
                  </a>
                  <a href="#">
                    <FaLinkedinIn className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
                  </a>

                  <a href="#">
                    <FaSquareInstagram className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
                  </a>
                  <a href="#">
                    <FaXTwitter className=" fill-white w-5 h-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex-1 text-center ml-24 md:text-left">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-primary transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-primary transition"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-primary transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-primary transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Hours Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="text-sm space-y-2">
                <p>
                  <strong>Monday:</strong> 9:00 am - 7:00 pm
                </p>
                <p>
                  <strong>Tuesday:</strong> 9:00 am - 7:00 pm
                </p>
                <p>
                  <strong>Wednesday:</strong> 9:00 am - 7:00 pm
                </p>
                <p>
                  <strong>Thursday:</strong> 9:00 am - 7:00 pm
                </p>
                <p>
                  <strong>Friday:</strong> 9:00 am - 7:00 pm
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 am - 2:00 pm
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-body text-black py-5 flex justify-center items-center">
        <p>copyright &copy; {year}. Sambmedia All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
