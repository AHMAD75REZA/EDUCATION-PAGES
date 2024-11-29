import React from "react";
import contactimg1 from "../assets/ContactImg/contact-us-scaled-1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Visa from "../Components/Visa";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={contactimg1}
          alt="Contact Us"
          className="w-full h-[500px]  object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold uppercase">
          CONTACT US
        </h1>
      </div>

      {/* Contact Information Section */}
      <section className="bg-gray-100 py-10 flex flex-wrap justify-center gap-10">
        {/* Address Info */}
        <div className="flex flex-col items-center text-center bg-gray-200 p-6 rounded-lg shadow-md w-80">
          <FaLocationDot className="text-4xl text-red-500 mb-2" />
          <h1 className="text-lg font-bold mb-1">Our Address</h1>
          <h4 className="text-sm">
            VYNX OVERSEAS CONSULTANCY BUSINESS: Plot No-282 Rajenderanagar, 
            Hyderabad, India Postcode: 500 089
          </h4>
        </div>

        {/* Email Info */}
        <div className="flex flex-col items-center text-center bg-gray-200 p-6 rounded-lg shadow-md w-80">
          <MdEmail className="text-4xl text-red-500 mb-2" />
          <h1 className="text-lg font-bold mb-1">Our Email</h1>
          <h2 className="text-sm">info@vynxoverseas.com</h2>
        </div>

        {/* Duplicate Address Info */}
        <div className="flex flex-col items-center text-center bg-gray-200 p-6 rounded-lg shadow-md w-80">
          <FaLocationDot className="text-4xl text-red-500 mb-2" />
          <h1 className="text-lg font-bold mb-1">Our Address</h1>
          <h4 className="text-sm">
            VYNX OVERSEAS CONSULTANCY BUSINESS: 113 Al Makeen Building, Dubai
            International Airport Road, P.O. Box 1464
          </h4>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-gray-100 py-10">
        <div className="flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5046632965928!2d55.34062787516548!3d25.253603477674737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc695eb81d5%3A0xde2cc8818e15f762!2sMakeen%20Properties%20LLC!5e0!3m2!1sen!2sin!4v1732515690577!5m2!1sen!2sin"
            className="w-full h-96 md:w-3/4 lg:w-2/3 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Visa/>
    </>
  );
};

export default ContactUs;
