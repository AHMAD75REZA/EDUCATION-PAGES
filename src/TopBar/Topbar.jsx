import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function Topbar() {
  return (
    <div className="hidden md:flex flex-wrap justify-between items-center bg-gray-500 py-2 px-4 md:px-16">
      {/* Contact Info */}
      <div className="flex flex-wrap gap-5 items-center text-white">
        {/* Phone */}
        <a
          href="tel:+12488756746"
          className="text-sm flex items-center gap-2 hover:text-gray-300"
        >
          <FaPhoneAlt className="text-base" />
          Tel: +919705241107 / +971562155037
        </a>

        {/* Email */}
        <a
          href="mailto:info@vynxoverseas.com"
          className="text-sm flex items-center gap-2 hover:text-gray-300"
        >
          <TfiEmail className="text-base" />
          info@vynxoverseas.com
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 text-white text-lg">
        <a
          href="#"
          aria-label="Visit our Facebook page"
          className="hover:text-gray-300"
        >
          <CiFacebook />
        </a>
        <a
          href="https://www.instagram.com/vynx_group_of_companies?igsh=MWJpYmY3cTZ2NHY2NQ=="
          aria-label="Visit our Instagram profile"
          className="hover:text-gray-300"
        >
          <IoLogoInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/vynx-group-of-companies-0097a532a/"
          aria-label="Visit our YouTube channel"
          className="hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Topbar;
