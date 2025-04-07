import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
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
          <img src={logo} alt="logo" className="h-12 ml-[0] md:ml-[20%]" />
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
          <li className="text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold block py-2 md:py-0"
                  : "text-black block py-2 md:py-0 hover:text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold block py-2 md:py-0"
                  : "text-black block py-2 md:py-0 hover:text-primary"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold block py-2 md:py-0"
                  : "text-black block py-2 md:py-0 hover:text-primary"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold block py-2 md:py-0"
                  : "text-black block py-2 md:py-0 hover:text-primary"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold block py-2 md:py-0"
                  : "text-black block py-2 md:py-0 hover:text-primary"
              }
            >
              Contact
            </NavLink>
          </li>

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

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { TiThMenu } from "react-icons/ti";
// import { IoClose } from "react-icons/io5";

// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaSquareInstagram,
//   FaXTwitter,
// } from "react-icons/fa6";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="relative z-50 bg-body">
//       <nav className="flex justify-between items-center py-6 px-6 container mx-auto">
//         {/* logo */}
//         <div>
//           <img src={logo} alt="logo" className="h-12" />
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <button
//           className="md:hidden cursor-pointer text-white bg-primary text-2xl py-1 px-1.5"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <IoClose /> : <TiThMenu />}
//         </button>

//         {/* desktop nav */}
//         <ul
//           className={`fixed md:static z-10 top-0 right-0 h-screen md:h-auto md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out bg-white w-2/3 p-6 md:w-auto md:p-0 shadow-lg md:shadow-none transform ${
//             isOpen
//               ? "translate-x-0 flex-col gap-4"
//               : "translate-x-full gap-4 hidden"
//           } md:translate-x-0 flex justify-center items-center`}
//         >
//           {/* Slogan (Mobile only) */}
//           {isOpen && (
//             <div className="relative md:hidden text-white bg-primary w-full text-center italic py-10 mb-6">
//               <p>
//                 Crafting Excellence <br /> in Every Byte
//               </p>
//               <IoClose
//                 size={24}
//                 className="absolute top-6  right-6 fill-white hover:text-gray-700 cursor-pointer"
//                 onClick={() => setIsOpen(false)}
//               />
//             </div>
//           )}
//           {/* nav links */}
//           {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
//             (link, index) => (
//               <li key={index}>
//                 <NavLink
//                   to={
//                     link === "Home"
//                       ? "/"
//                       : `/${link.toLowerCase().replace(/\s+/g, "-")}`
//                   }
//                   className={({ isActive }) =>
//                     `${
//                       isActive ? "text-primary" : "text-black"
//                     } font-bold hover:text-primary`
//                   }
//                 >
//                   {link}
//                 </NavLink>
//               </li>
//             )
//           )}

//           {/* Social Media Icons (Mobile Only) */}
//           <div className="flex justify-center space-x-4 mt-10 mb-6 md:hidden">
//             <a href="#" className="bg-black p-1.5 rounded-full">
//               <FaFacebookF className=" fill-white" />
//             </a>
//             <a href="#" className="bg-black p-1.5 rounded-full">
//               <FaLinkedinIn className="fill-white" />
//             </a>
//             <a href="#" className="bg-black p-1.5 rounded-full">
//               <FaSquareInstagram className=" fill-white" />
//             </a>
//             <a href="#" className="bg-black p-1.5 rounded-full">
//               <FaXTwitter className=" fill-white" />
//             </a>
//           </div>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
