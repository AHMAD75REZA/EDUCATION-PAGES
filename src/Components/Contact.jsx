import React from "react";
import fotrimg from "../assets/Images/b2.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

const Contact = () => {
  const companyDetails = [
    {
      name: "VYNX INTERNATIONAL PVT LTD",
      address: "Plot no - 282 Rajenderanagar, Hyderabad-India 500089",
      email: "info@vynxgroup.com",
      phone: "+91 91775 47901, +91 97052 41107",
    },
    {
      name: "VYNX INFORMATION TECHNOLOGY LLC",
      address: "Dubai Investment Park POB-1464",
      email: "info@vynxgroup.com",
      phone: "+97142966227",
    },
    {
      name: "VYNX TELECOM LLP",
      address: "DELAWARE 8 The Green STE-A 19901, USA",
      email: "info@vynxtelecom.com",
      phone: "+1 248 875 6746, +91 91775 47901",
    },
    {
      name: "VYNX GLOBAL LLC",
      address: "Armenia 🇦🇲, Yerevan",
      email: "info@vynxglobal.com",
      phone: "+374 91 757677, +91 91775 47901",
    },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10">
          {companyDetails.map((company, index) => (
            <div key={index} className="p-5 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-blue-400">
                {company.name}
              </h2>

              <div className="flex items-center space-x-2 mb-2">
                <MdOutlineLocationOn className="text-3xl" />
                <p className="text-sm">{company.address}</p>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <MdOutlineMail className="text-3xl" />
                <p>{company.email}</p>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <IoMdGlobe className="text-3xl" />
                <p>www.vynxgroup.com</p>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <FaPhone className="text-2xl" />
                <p>{company.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;