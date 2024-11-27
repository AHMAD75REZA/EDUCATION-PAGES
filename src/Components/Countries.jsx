import React from "react";
import usimg from "../assets/Images/usa.jpg";
import usflgimg from "../assets/Images/usa_flag.jpg";
import austimg from "../assets/Images/hm_img_australia.jpg";
import austflgimg from "../assets/Images/australia.jpg";
import canadimg from "../assets/Images/hm_img_canada.jpg";
import canadflg from "../assets/Images/canada.jpg";
import newzimg from "../assets/Images/hm_img_newzealand.jpg";
import ukimg from "../assets/Images/hm_img_uk.jpg";
import ukflg from "../assets/Images/uk_flag.jpg";
import Visa from "./Visa";

function Countries() {
  
  const slides = [
    {
      image: usimg,
      flag: usflgimg,
      country: "USA",
      disc: "The United States, comprising 50 states, is a global hub for finance, culture, and education. Foreign individuals can gain sponsorship through employment opportunities for a chance to live and work in the USA.",
    },
    {
      image: austimg,
      flag: austflgimg,
      country: "Australia",
      disc: "Australia offers a high quality of life, robust economy, and excellent opportunities for skilled migration, business migration, and education, making it a top destination for immigrants worldwide.",
    },
    {
      image: canadimg,
      flag: canadflg,
      country: "Canada",
      disc: "Known for its welcoming policies and multicultural society, Canada provides numerous pathways for skilled workers, students, and families seeking permanent residency or citizenship.",
    },
    {
      image: ukimg,
      flag: ukflg,
      country: "UK",
      disc: "The UK is renowned for its rich cultural heritage, world-class education, and economic opportunities. Its strategic location and strong ties to the EU add to its appeal for immigrants.",
    },
    {
      image: newzimg,
      flag: usflgimg,
      country: "New Zealand",
      disc: "New Zealand stands out for its open and welcoming culture. Its strong economy and high living standards make it an attractive destination for skilled workers and families.",
    },
  ];

  return (
    <div className="relative bg-white pt-10 px-8">
      {/* Banner Section */}
      <div className="bg-cyan-700 w-full h-72 flex flex-col items-center justify-center text-white ">
        <h1 className="text-4xl font-light ">CHOOSE COUNTRY</h1>
        <h2 className="text-2xl font-bold font-serif text-slate-300 mt-2">
          Immigration - Choose Your Destination
        </h2>
        <h3 className="text-xl font-light text-slate-300 mt-4">
          Find the best country to start your journey!
        </h3>
      </div>

      {/* Main Content */}
      <div className="relative -top-16 z-20 flex flex-wrap justify-center gap-8 px-8">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="bg-slate-100 rounded-lg shadow-md w-96 p-4 transform hover:scale-105 transition-all"
          >
            <img
              src={slide.image}
              alt={`${slide.country} Scenic View`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="relative -top-5 right-5 flex justify-end">
              <img
                src={slide.flag}
                alt={`${slide.country} Flag`}
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
            </div>
            <h1 className="text-center text-black font-bold mt-2 text-lg">
              {slide.country}
            </h1>
            <p className="text-gray-500 text-sm mt-3 px-2">{slide.disc}</p>
            <button className="text-red-700 font-medium mt-5 w-full hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
      <Visa/>
    </div>
  );
}

export default Countries;
