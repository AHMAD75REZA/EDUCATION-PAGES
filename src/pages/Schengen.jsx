import React from "react";
import visaimg1 from "../assets/VisaImg/visa2.avif";
import visaimg2 from "../assets/VisaImg/Cheapest-Cities-in-Europe-e1693686465572.jpg";
import visaimg3 from "../assets/VisaImg/Europe-Travel-Destinations.jpg";
import { MdOutlineCheckCircle } from "react-icons/md";
import Visa from "../Components/Visa";

function Schengen() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={visaimg1}
          alt="Travel agent working at her desk"
          className="w-full h-[500px] object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold uppercase">
          SCHENGEN VISA
        </h1>
      </div>

      {/* Main Content Section */}
      <section className="py-10 px-5 max-w-screen-lg mx-auto">
        <div>
          {/* Article */}
          <article className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 ">
              The Schengen area member states:
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              The holder of this type of visa is not required to have the
              citizenship of the designated country in order to spend time with
              their relatives or visiting the designated Schengen country.
              However, such an authorization has its limitations as well.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Tourists are allowed to reside in the designated country for the
              maximum of 3 months/90 days, unless the visa states differently.
              You are not allowed to work during this period unless the visa
              explicitly states so.
            </p>
          </article>

          {/* Image Gallery */}
          <div className="flex gap-5 justify-between">
            <img
              src={visaimg2}
              alt="Cheapest cities in Europe"
              className="flex-1 max-w-[45%] h-auto rounded-md shadow-md"
            />
            <img
              src={visaimg3}
              alt="Top travel destinations in Europe"
              className="flex-1 max-w-[53%] h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-500 py-10">
        <div className="bg-gray-300 max-w-screen-lg mx-auto p-8 rounded-md shadow-md">
          {/* Section Title */}
          <h1 className="text-2xl font-bold text-center mb-6">Documentation</h1>

          {/* Tourist Visa Section */}

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Tourist Visa (Visiting Friends or Relatives)
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                Bank statement (preferably for the last 6 months)
              </li>
              <li className="flex items-start space-x-4">
                {/* Circle with Check Icon */}
                <span className="flex items-center justify-center w-8 h-8  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                {/* Text Content */}
                <div>
                  If you don’t have a bank account, relatives need to sign an
                  <strong> “official affidavit of support”</strong> at their
                  place of residence. Carry the original document when applying
                  for the visa.
                </div>
              </li>

              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4 text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                The applicant's trip details, including the purpose, time frame,
                and all personal data written in a letter.
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                Income tax returns for the last three years
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                Appointment letter
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                Proof of the legal entity of the company
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                A reference letter from the employer
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                If the applicant owns the company, attach the business
                registration, tax returns, and the latest bank statement.
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4 text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                Plane ticket reservation (Buy the ticket after getting the visa,
                as recommended).
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                Other documents specified by the visa subtype
              </li>
            </ol>
          </div>

          {/* Visiting Relatives/Friends Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Visiting Relatives/Friends
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                If the applicant covers all travel expenses, proof of financial
                status is required. If expenses are covered by a
                relative/friend, submit a formal document issued by the
                authorities to a resident of a Schengen country.
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                A formal invitation by the relative/friend residing in a
                Schengen country.
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                If the applicant covers the expenses, provide the
                relative/friend's name, address, and a copy of their passport.
                If the friend/relative is not a citizen, include their residency
                permit.
              </li>
            </ul>
          </div>

          {/* Tourist Travel Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Tourist Travel (No Visit to Relatives/Friends)
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                The applicant's bank statement (preferably for the last 6
                months).
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 mr-4  text-white rounded-full">
                  <MdOutlineCheckCircle size={20} />
                </span>
                A detailed itinerary of travel days in the Schengen Zone, hotel
                reservations, or a formal invitation letter from a resident.
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              Depending on the embassy/consulate, additional documents may be
              required, such as a certificate proving no legal issues or a
              criminal record. During the appointment, you will be notified of
              any additional requirements.
            </p>
          </div>
        </div>
      </section>
      <Visa/>
    </>
  );
}

export default Schengen;
