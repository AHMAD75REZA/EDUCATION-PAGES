import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import images from "../assets/Images/visa-application-composition-with-canadian-flag-scaled.jpg";
import About from "./About";
import Countries from "./Countries";
import Coaching from "./Coaching";
import Reviews from "./Reviews";
import Visa from "./Visa";

function Home() {
  return (
    <>
      <div className="relative">
        <img
          src={images}
          alt="visa application"
          className="w-full h-[500px] object-cover "
          style={{ objectPosition: "center top 30%" }}
        />


        <div className="absolute top-0 mt-20 px-5 md:px-16 p-10 text-center w-full text-white" style={{
          textShadow:"2px 2px 8px 8px #00000",
          
        }}>
          <div className="absolute top-0 bg-fuchsia-300  w-auto h-12"></div>
          <h1 className="text-2xl md:text-4xl  font-serif" style={{color:"#b5208c"}}>
            YOUR PARTNER IN MIGRATION, <br /> YOUR GUIDE TO NEW BEGINNINGS
          </h1>
          <p className="text-xl md:text-2xl text-red-700 font-semibold mt-4" >
            Creating Extraordinary Futures through VYNX Overseas <br /> Educations Services
          </p>

          <div className="mt-10">
            {/* Wrap the button with Link to navigate to Visa page */}
            <Link to="/visa">
              <button className="bg-red-600 text-white rounded px-6 py-3 hover:bg-red-700 transition duration-300">
                Get Free Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Countries />
      <Coaching />
      <Reviews />
      <Visa />
    </>
  );
}

export default Home;
