import React from 'react';
import aboutimg from '../assets/Images/front-view-office-worker-sitting-his-working-place-holding-tickets-passport-1024x683.jpg';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-7 px-5 md:px-20 mt-10 md:mt-20">
      {/* Image Section */}
      <img
        src={aboutimg}
        alt="Office worker holding tickets and a passport"
        className="w-full md:w-1/2 rounded-lg"
      />

      {/* Content Section */}
      <div className="space-y-4 text-gray-600">
        <h3 className="text-sm font-light text-red-500 tracking-widest">
          ABOUT VYNX OVERSEAS CONSULTANCY
        </h3>
        <h2 className="font-sans text-2xl md:text-3xl mt-5">Navigating Immigration</h2>
        <h1 className="font-serif font-semibold text-3xl md:text-4xl mt-3 text-gray-800">
          With Skilled Attorneys
        </h1>
        <p>
          At VYNX Overseas and Educations, we stand as a dependable immigration enterprise,
          dedicated to delivering expert consultation services for both Canadian and Australian
          Immigration Visas. Our accomplished team boasts extensive years of proficiency in
          immigration visas and citizenship law, with a particular focus on Skilled & Business
          Migration as well as Study Abroad opportunities.
        </p>
        <p>
          Our team of professionals engages closely with every client, taking the time to
          comprehend their unique aspirations and requirements. Through this personalized
          approach, we craft tailor-made solutions and offer representation that aligns seamlessly
          with the legal immigration framework, enabling us to assist you in achieving your
          individualized goals.
        </p>
        <div>
          <button className="text-lg bg-red-500 text-white rounded mt-5 px-6 py-3 hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
