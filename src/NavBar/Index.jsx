import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "COUNTRIES", path: "/countries" },
    { name: "COACHING", path: "/coaching" },
    { name: "SCHENGEN VISA", path: "/visa" },
    { name: "NEWS", path: "/news" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-slate-100 py-3 px-4 md:px-10 shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <a
          href="https://vynxgroup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="VYNX Group Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <p className="font-bold text-sm text-blue-500 uppercase tracking-wide">
            VYNX International
            <br />
            <span className="block text-center text-xs md:text-sm font-medium">
              PVTLTD
            </span>
          </p>
        </a>
      </div>

      {/* Toggle Button for Mobile & Tablet */}
      <button
        className="lg:hidden text-2xl focus:outline-none hover:text-red-400"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Dropdown Menu for Mobile & Tablet */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 bg-white shadow-lg py-4 px-5 w-full lg:hidden z-50">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  location.pathname === item.path
                    ? "text-red-400 font-bold"
                    : "hover:text-red-400"
                }`}
              >
                <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 items-center">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              location.pathname === item.path
                ? "text-red-400 font-bold"
                : "hover:text-red-400"
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
