import React from "react";
import Newimg1 from "../assets/NewsImg/Newsimg.jpg";
import Newimg2 from "../assets/NewsImg/close-up-hands-holding-tickets-1024x681.jpg";
import Newimg3 from "../assets/NewsImg/front-view-office-worker-sitting-his-working-place-holding-tickets-passport-1024x683.jpg";
import Visa from "../Components/Visa";

const News = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative">
        <img
          src={Newimg1}
          alt="News Banner"
          className="w-full h-[500px] object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold uppercase">
          NEWS
        </h1>
      </div>

      {/* News Section 1 (Image Left, Text Right) */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-10 lg:px-20 gap-8">
        <img
          src={Newimg2}
          alt="News 1"
          className="w-full lg:w-1/2 object-cover rounded-md shadow-lg"
        />
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4 uppercase">
            How has the pandemic impacted the <strong>immigration sector?</strong> 
          </h2>
          <p className="text-gray-700 mb-4">
            VYNX Overseas and Educations is among the very few licensed agents
            in the UAE offering Immigration services in association with
            government-authorized bodies in a very transparent, honest, and
            ethical manner. It has a dedicated team to provide unmatched visa
            solutions to reach personalized goals of students, families,
            entrepreneurs, and investors complying with the requirements and
            understanding migration law.
          </p>
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
            Read More
          </button>
        </div>
      </div>

      {/* News Section 2 (Text Left, Image Right) */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-10 lg:px-20 gap-8">
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4 uppercase">
            VYNX Overseas and Educations: Delivering the{" "}
            <strong>highest quality of services</strong>
          </h2>
          <p className="text-gray-700 mb-4">
            VYNX Overseas and Educations has a brilliant team of experienced
            solicitors and immigration lawyers in respective countries who
            understand the applicant’s needs and interests to provide customized
            solutions within the legal framework of immigration to provide
            end-to-end service for all nationalities, students, families,
            entrepreneurs, and investors complying with the requirements and
            understanding migration law.
          </p>
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
            Read More
          </button>
        </div>
        <img
          src={Newimg3}
          alt="News 2"
          className="w-full lg:w-1/2 object-cover rounded-md shadow-lg"
        />
      </div>
      <Visa/>
    </>
  );
};

export default News;
