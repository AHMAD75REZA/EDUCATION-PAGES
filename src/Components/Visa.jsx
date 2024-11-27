import React from "react";

const Visa = () => {
  return (
    <div className="bg-slate-200 w-full h-auto px-6 sm:px-10 lg:px-20 py-10">
      {/* Heading */}
      <h1 className="text-lg font-thin mb-1">ENTER YOUR INFORMATION</h1>
      <h1 className="text-2xl font-semibold mb-6">
        CHOOSE THE DESTINATION TO MIGRATE
      </h1>

      {/* Form Section */}
      <form className="bg-slate-500 p-6 sm:p-10 rounded-md shadow-md">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border border-gray-500 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-500 rounded"
          />
          <select
            name="maritalStatus"
            className="w-full p-2 border border-gray-500 rounded"
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
          </select>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full p-2 border border-gray-500 rounded"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nationality"
            className="w-full p-2 border border-gray-500 rounded"
          />
          <input
            type="text"
            placeholder="Occupation"
            className="w-full p-2 border border-gray-500 rounded"
          />
          <input
            type="text"
            placeholder="Destination Country"
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>

        {/* Level of Study */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Level of Study"
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Visa;
