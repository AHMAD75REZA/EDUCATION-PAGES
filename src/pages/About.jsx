import React from "react";
import imge from "../assets/AboutImages/high-angle-woman-working-as-travel-agent-scaled.jpg";
import imge2 from "../assets/AboutImages/close-up-woman-taking-travel-tickets-1024x681.jpg";
import imge3 from "../assets/AboutImages/map_abt.png";
import Visa from "../Components/Visa";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative ">
        <img
          src={imge}
          alt="Travel agent working at desk"
          className="w-full h-[500px] object-cover brightness-50"
          style={{ objectPosition: "center top 30%" }}
        />
        <h1 className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold uppercase">
          ABOUT US
        </h1>
      </div>

      {/* Introduction Section */}
      <section className="py-10 px-5 md:px-20">
        <h2 className="font-serif font-bold text-2xl uppercase mb-4">
          CICC/ICCRC Registered Canada Immigration Consultants In Dubai
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          As a trusted immigration firm, VYNX Overseas and Educations stands out
          for its unwavering reliability. We specialize in delivering
          professional consultancy services for the Canada Immigration Process,
          encompassing Canadian PR Visas, as well as Australia Immigration
          Visas. Our skilled team at VYNX Overseas and Educations brings forth
          extensive experience in the realm of immigration visas and citizenship
          law, with a distinct focus on facilitating Skilled & Business
          Migration opportunities, along with Study Abroad prospects. With a
          commitment to excellence, we guide you through your migration journey
          with expertise and dedication.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-7">
          <img
            src={imge2}
            alt="Close-up of woman holding travel tickets"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="space-y-4 text-gray-600">
            <p>
              When it comes to immigration services, we proudly stand as the
              leading Canada immigration consultants in Dubai. Our approach is
              anchored in effective communication, allowing us to deeply
              understand each client’s needs and interests. This enables us to
              create bespoke solutions and provide representation within the
              legal immigration framework, all aimed at achieving those
              personalized goals.
            </p>
            <p>
              Navigating Canada immigration services or Migration to Australia
              is a significant decision, and it’s best undertaken with the
              guidance of ICCRC and MARA registered consultants. We offer the
              right pathway to ensure the success of your application.
            </p>
            <p>
              Our comprehensive services encompass skilled migration, securing
              Permanent Residency in Canada, Business Migration opportunities,
              and study abroad programs. As a distinguished visa consultant in
              Dubai, we offer an end-to-end journey that covers everything from
              selecting your desired country to submitting applications, meeting
              requirements, understanding migration laws, and assisting with
              your transition upon arrival.
            </p>
          </div>
        </div>
      </section>

      {/* VYNX Groups and Educations Section */}
      <section className="bg-gray-600 py-20">
        <div className="bg-slate-300 px-10 py-8 rounded-lg mx-auto max-w-6xl">
          <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
            VYNX Groups and Educations
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            When it comes to immigration services, we proudly stand as the leading
            Canada immigration consultants in Dubai. Our approach is anchored in
            effective communication, allowing us to deeply understand each client’s
            needs and interests. This enables us to create bespoke solutions and
            provide representation within the legal immigration framework, all aimed
            at achieving those personalized goals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Navigating Canada immigration services or Migration to Australia is a
            significant decision, and it’s best undertaken with the guidance of
            ICCRC and MARA registered consultants. We offer the right pathway to
            ensure the success of your application.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our comprehensive services encompass skilled migration, securing
            Permanent Residency in Canada, Business Migration opportunities, and
            study abroad programs. As a distinguished visa consultant in Dubai, we
            offer an end-to-end journey that covers everything from selecting your
            desired country to submitting applications, meeting requirements,
            understanding migration laws, and assisting with your transition upon
            arrival.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            With a wealth of experience and expertise, our global migration services
            in Dubai are tailored to help you turn your dreams into reality. Contact
            us today to embark on the journey towards becoming a successful immigrant!
          </p>

          {/* Vision, Mission, Values in Box Format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Vision</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                Our foremost commitment is to deliver unparalleled services and
                unwavering support to our esteemed clients. This promise is deeply
                ingrained in our Quality Policy, objectives, and core values.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Mission</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                Our primary objective is to offer unparalleled career guidance that
                stands out for its integrity, professionalism, and innovative approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Values</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                At the heart of our foundation lie our core values: Integrity, Care,
                Innovation, Passion, and Trust.
              </p>
            </div>
          </div>

          {/* Quality Policy Section */}
          <div className="top-5 py-10">
            <h1 className="text-xl font-thin text-gray-500 mb-2 uppercase">
              Quality Policy
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Our commitment is to deliver services of exceptional quality that adhere
              to the pinnacle of professional performance standards. By meeting and
              exceeding client requisites, we consistently provide outstanding value.
              This achievement is realized through collaborative teamwork and a
              relentless pursuit of service enhancement. Our services are designed to
              conform to requirements, surpass expectations, and consistently satisfy
              clients. Our team is composed of qualified, motivated professionals, a
              testament to our dedication in recruiting, developing, and retaining
              exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Immigration Section */}
      <section className="bg-gray-100 py-10 px-10 md:px-20">
        <div className="px-10">
          <h1 className="text-3xl font-serif font-thin mb-6 text-gray-800 uppercase">
            What is <b>Immigration?</b>
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            The pursuit of fresh opportunities, whether in the realm of business,
            enhanced job prospects, or reuniting with family, lends an air of
            excitement to immigration and migration endeavors. However, this excitement
            coexists with challenges of significant magnitude...
          </p>
        </div>
      </section>

      {/* Company Section */}
      <section className="bg-gray-600 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start">
        <div className="text-white md:w-1/2 mb-6 md:mb-0">
          <h1 className="font-thin text-lg md:text-xl">OUR COMPANY</h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Since 2019, We have one branch in Dubai, providing one-on-one
            consultation with personalized services.
          </h2>
          <p className="text-xl mt-3 leading-relaxed">
            Our aim is to ensure success by focusing on offering personalized
            support at every step of their migration journey, delivering a
            personalized experience, and ensuring a smooth and hassle-free process
            from start to finish.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={imge3}
            alt="Map"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Visa Section */}
      <Visa />
    </>
  );
};

export default About;
