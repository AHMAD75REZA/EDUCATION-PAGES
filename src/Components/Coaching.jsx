import React from 'react';

function Coaching() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-slate-500 w-full h-auto py-6 flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="text-white space-y-2 px-4">
          <h1 className="text-sm">FROM SATURDAY TO THURSDAY (9.00 AM TO 6.00 PM)</h1>
          <h1 className="font-semibold text-2xl md:text-4xl">HAVE A QUESTION? ASK OUR EXPERT</h1>
        </div>
        <div className="text-white mt-4 md:mt-0 px-4">
          <h1 className="text-lg md:text-xl">Tel: <a href="tel:+919705241107 / +971562155037" className="hover:underline">+919705241107 / +971562155037</a></h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-slate-200 w-full py-6 px-4 flex flex-col md:flex-row justify-around items-center text-center md:text-left space-y-4 md:space-y-0">
        <h1 className="text-xl md:text-3xl font-medium text-blue-400 max-w-xl">
          We bridge a pathway for all kinds of immigration services with our years of expertise that shows your success.
        </h1>
        <button className="bg-red-400 w-40 h-12 rounded text-white font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 px-5">
          Get Free Assessment
        </button>
      </div>
 
      
    </>
  );
}

export default Coaching;
