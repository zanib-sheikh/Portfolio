import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name='work' className='w-full py-20 px-4 bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-gray-300'>
      <div className='max-w-6xl mx-auto flex flex-col justify-center w-full h-full'>

        {/* Heading */}
        <div className='pb-12 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            My Work
          </h2>
          <p className='text-gray-400 text-lg'>
            A collection of projects I’ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {project.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">

                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.name}
                </h3>

                <div className="flex gap-4">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                      Code
                    </button>
                  </a>

                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button className="px-5 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                      Live
                    </button>
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Work;