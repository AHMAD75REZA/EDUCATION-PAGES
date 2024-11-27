import React from 'react';
import coutryimg from '../assets/Images/toronto-skyline-from-park-scaled.jpg';
import Countries from '../Components/Countries';

const Countriesworld = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative'>
        <img
          src={coutryimg}
          alt="Toronto Skyline"
          className='w-full h-[500px] object-cover brightness-50'
          style={{ objectPosition: 'center' }}
        />
        <h1 className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold uppercase'>
          Countries of the World
        </h1>
      </div>

      {/* Countries Component */}
      <Countries />
    </>
  );
};

export default Countriesworld;
