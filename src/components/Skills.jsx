import React, { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import vue from '../assets/vue.png';
import nextj from '../assets/nextj.png';
import sql from '../assets/sql.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const techStack = [
    { src: HTML, label: 'HTML' },
    { src: CSS, label: 'CSS' },
    { src: JavaScript, label: 'JavaScript' },
    { src: ReactImg, label: 'React' },
    { src: GitHub, label: 'GitHub' },
    { src: Node, label: 'Node.js' },
    { src: Mongo, label: 'MongoDB' },
    { src: Tailwind, label: 'Tailwind' },
    { src: FireBase, label: 'Firebase' },
    { src: nextj, label: 'Next.js' },
    { src: vue, label: 'Vue.js' },
    { src: sql, label: 'SQL' },
  ];

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] via-[#081224] to-[#020c1b] text-gray-300 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Skills & Tech Stack
          </h2>
          <p data-aos="fade-up" className="text-gray-400 text-lg">
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        {/* Grid */}
        <div className="px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {techStack.map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="relative group p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-105 transition duration-500"
            >
              {/* Inner Card */}
              <div className="bg-[#0f1a2f] rounded-xl py-6 flex flex-col items-center justify-center shadow-lg backdrop-blur-md">

                {/* Icon */}
                <img
                  src={tech.src}
                  alt={tech.label}
                  className="w-16 h-16 object-contain mb-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                />

                {/* Label */}
                <p className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition">
                  {tech.label}
                </p>

              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Skills;