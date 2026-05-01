import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import VantaBackground from './VantaBackground';



const Home = () => {
  return (
    <div name='home' className='relative overflow-hidden w-full bg-[#0a192f] z-20 h-screen '>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <VantaBackground />
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          ZANIB ZUBAIR
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-end Developer.
        </h2>
        <p className='text-[#8892b0] py-4 text-xl max-w-[700px]'>
        I specialize in building clean, responsive, and interactive web applications using modern front-end technologies. Passionate about user experience and performance, I'm currently focused on developing dynamic full-stack web applications that make a real impact.  </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
  <button className="text-white animate-pulse` group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 -z-30">
    View Work
    <span className="group-hover:rotate-90 duration-300">
      <HiArrowNarrowRight className="ml-3" />
    </span>
  </button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
