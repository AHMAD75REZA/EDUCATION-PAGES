import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const FooterNav = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-black text-white flex flex-wrap items-center justify-between px-4 md:px-10 py-4 md:py-0 w-full h-auto md:h-20">
      {/* Copyright Text */}
      <div className="text-center md:text-left w-full md:w-auto mb-2 md:mb-0 text-sm">
        <h1>&copy; VYNX Group of Companies {currentYear}. All Rights Reserved</h1>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center md:justify-end gap-3 text-3xl w-full md:w-auto">
        <a
          href="#"
          aria-label="Visit our Facebook page"
          className="hover:text-gray-400"
          rel="noopener noreferrer"
        >
          <CiFacebook />
        </a>
        <a
          href="https://www.instagram.com/vynx_group_of_companies?igsh=MWJpYmY3cTZ2NHY2NQ=="
          aria-label="Visit our Instagram page"
          className="hover:text-gray-400"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoLogoInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/vynx-group-of-companies-0097a532a/"
          aria-label="Visit our LinkedIn profile"
          className="hover:text-gray-400"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default FooterNav;
