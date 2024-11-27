import React from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "James L.",
      rating: 5,
      review:
        "Choosing VYNX Overseas and Educations was the best decision I made. Their personalized approach made me feel valued throughout the process. Their team's knowledge of immigration laws is exceptional, and they ensured I understood every step. I'm now pursuing my higher education abroad, all thanks to their dedication.",
    },
    {
      name: "Emily T.",
      rating: 5,
      review:
        "Choosing VYNX Overseas and Educations was the best decision I made. Their personalized approach made me feel valued throughout the process. Their team's knowledge of immigration laws is exceptional, and they ensured I understood every step. I'm now pursuing my higher education abroad, all thanks to their dedication.",
    },
    {
      name: "Sophia M.",
      rating: 5,
      review:
        "Choosing VYNX Overseas and Educations was the best decision I made. Their personalized approach made me feel valued throughout the process. Their team's knowledge of immigration laws is exceptional, and they ensured I understood every step. I'm now pursuing my higher education abroad, all thanks to their dedication.",
    },
    {
      name: "Luis A.",
      rating: 5,
      review:
        "Choosing VYNX Overseas and Educations was the best decision I made. Their personalized approach made me feel valued throughout the process. Their team's knowledge of immigration laws is exceptional, and they ensured I understood every step. I'm now pursuing my higher education abroad, all thanks to their dedication.",
    },
    {
      name: "John B.",
      rating: 5,
      review:
        "Choosing VYNX Overseas and Educations was the best decision I made. Their personalized approach made me feel valued throughout the process. Their team's knowledge of immigration laws is exceptional, and they ensured I understood every step. I'm now pursuing my higher education abroad, all thanks to their dedication.",
    },
  ];
  return (
    <div className="w-full bg-slate-300 px-2 flex justify-around flex-row overflow-x-scroll ">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className=" min-w-64 my-10 mx-1 bg-white p-5 rounded-lg shadow-md cursor-pointer"
        >
          <h1 className="text-black font-semibold text-center">
            {testimonial.name}
          </h1>
          <h1 className="text-center text-3xl text-yellow-300 mt-2 font-extrabold">
            {"* ".repeat(testimonial.rating).trim()}
          </h1>
          <p className="text-sm font-serif mt-3 text-gray-400">
            {testimonial.review}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

