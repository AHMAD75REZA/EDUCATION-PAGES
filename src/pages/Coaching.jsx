import React, { useState, useEffect } from "react";
import cochngImg from "../assets/CoachingImg/Blog-36_How-to-show-personality-on-your-website.jpg";
import img1 from "../assets/CoachingImg/gre.jpg";
import img2 from "../assets/CoachingImg/PTE_logo_1.png";
import img3 from "../assets/CoachingImg/1200px-GMAT_LOGO_POS_RGB.svg-1.png";
import Visa from "../Components/Visa";

const Coaching = () => {
  const images = [
    { src: img1, label: "" },
    { src: img2, label: "" },
    { src: img3, label: "" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch to the next dot every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Rearrange images based on currentIndex
  const rearrangedImages = [
    ...images.slice(currentIndex),
    ...images.slice(0, currentIndex),
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={cochngImg}
          alt="Coaching Header"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold uppercase">
          COACHING
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
        <h1 className="text-xl sm:text-2xl font-serif font-thin text-gray-800">
          WORLD-CLASS COACHING FOR STUDENTS & PROFESSIONALS
        </h1>
        <p className="text-sm sm:text-lg font-serif text-gray-600 mt-4">
          The world’s most advanced economies rely on standardized tests to
          assess visa applicants. As Dubai's #1 Visas & Immigration company, we
          have seen the positive impact of high scores in these tests on work,
          student, and migrant visa applications. VYNX Overseas and Educations
          Coaching delivers world-class coaching designed to help you get your
          best score and boost your chances of achieving your international
          ambitions. Explore our offerings below:
        </p>
      </div>

      {/* Carousel Section */}

      <div className="relative w-full max-w-4xl mx-auto mt-6 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {rearrangedImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <img
                src={image.src}
                alt={image.label}
                className="w-44 sm:w-56 md:w-72 h-44 sm:h-56 md:h-72 object-contain"
              />
              <p className="mt-2 sm:mt-4 text-sm sm:text-lg font-medium text-gray-700">
                {image.label}
              </p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 sm:px-6 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-2xl font-serif font-thin text-gray-800">
            STANDARDIZED TESTS FOR VISA APPLICANTS ARE OF TWO TYPES:
          </h1>

          {/* English Proficiency Tests */}
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold font-serif text-gray-700">
              English Language Proficiency Tests
            </h3>
            <p className="text-sm sm:text-lg font-serif text-gray-600 mt-2">
              International students seeking admission to foreign universities
              must prove their proficiency in English.
            </p>
            <ul className="list-disc pl-6 mt-4 text-sm sm:text-base text-gray-700">
              <li>IELTS</li>
              <li>TOEFL</li>
              <li>PTE</li>
            </ul>
          </div>

          {/* Math Proficiency Tests */}
          <div className="mt-8">
            <h3 className="text-base sm:text-lg font-semibold font-serif text-gray-700">
              Math Proficiency Tests
            </h3>
            <ul className="list-disc pl-6 mt-4 text-sm sm:text-base text-gray-700">
              <li>GRE</li>
              <li>GMAT</li>
              <li>SAT</li>
            </ul>
          </div>
        </div>
      </section>
      <Visa />
    </>
  );
};

export default Coaching;
