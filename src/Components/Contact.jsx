import React from "react";
import fotrimg from "../assets/Images/b2.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src={fotrimg}
          alt="Contact Background"
          className="w-full h-full object-cover filter blur-sm brightness-50"
        />
      </div>

      {/* Contact Details Section */}
      <div className="relative z-10 text-white px-5 sm:px-6 md:px-10 py-10 bg-opacity-80 w-full max-w-screen-lg mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* India Office */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineLocationOn className="text-4xl" />
              <h1 className="font-extrabold font-serif">INDIA OFFICE</h1>
            </div>
            <p className="mb-2 text-sm">
              VYNX INFO TECH, Plot no 282 Neknampur, Rajendranagar Venkateshwara
              Colony, Hyderabad, India, Postcode 5000008
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone className="text-xl" />
              <p>+91 98490 12345</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineMail className="text-xl" />
              <p>info@vynxgroup.com</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <IoMdGlobe className="text-xl" />
              <p>www.vynxgroup.com</p>
            </div>
          </div>

          {/* UAE Office */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineLocationOn className="text-4xl" />
              <h1 className="font-extrabold font-serif">UAE OFFICE</h1>
            </div>
            <p className="mb-2 text-sm">
              VYNX INFORMATION TECHNOLOGY : 113 Al Makeen Building Dubai
              international Airport Road Pobox 14
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone className="text-xl" />
              <p>Tel+971 4296 6227</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineMail className="text-xl" />
              <p>info@vynxgroup.com</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <IoMdGlobe className="text-xl" />
              <p>www.vynxgroup.com</p>
            </div>
          </div>

          {/* Armenia Office */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineLocationOn className="text-4xl" />
              <h1 className="font-extrabold font-serif">ARMENIA OFFICE</h1>
            </div>
            <p className="mb-2 text-sm">
              ARMENIA OFFICE VYNX GLOBAL : Yerevan, Galshoyan Str 50bld 43 Apt
              Postal 0079
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone className="text-xl" />
              <p>Tel+374 91 757677</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineMail className="text-xl" />
              <p>info@vynxgroup.com</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <IoMdGlobe className="text-xl" />
              <p>www.vynxgroup.com</p>
            </div>
          </div>

          {/* USA Office */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineLocationOn className="text-4xl" />
              <h1 className="font-extrabold font-serif">USA OFFICE</h1>
            </div>
            <p className="mb-2 text-sm">
              USA OFFICE VYNX GROUP : 42513 Fawn Meadow Pl Chantilly Virginia
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone className="text-xl" />
              <p>Tel+1 (248) 875-6746</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MdOutlineMail className="text-xl" />
              <p>info@vynxgroup.com</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <IoMdGlobe className="text-xl" />
              <p>www.vynxgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
