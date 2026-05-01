import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-gray-300 py-20 px-4 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto md:mx-4 flex flex-col justify-center">

        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block relative">
            About Me
            <span className="block h-1 w-16 md:w-20 bg-pink-500 mt-2 rounded-full mx-auto md:mx-0"></span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">

          {/* Left Side */}
          <div className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left px-2 sm:px-6 font-semibold leading-snug hover:translate-x-2 transition duration-500">

            <p>
              Hi, I’m <span className="text-pink-500">Zanib Zubair</span>.
              <br />
              I build clean, modern, and user-focused web experiences.
            </p>

          </div>

          {/* Right Side */}
          <div className="text-base sm:text-lg text-gray-400 leading-relaxed backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:scale-[1.02] transition duration-500 shadow-lg">

            <p className="mb-4">
              I'm a Front-End Web Developer with{" "}
              <span className="text-pink-500 font-semibold">1 year</span> of
              hands-on experience building responsive and user-friendly
              applications.
            </p>

            <p className="mb-4">
              I specialize in turning ideas into interactive digital products
              using <span className="text-white">HTML</span>,{" "}
              <span className="text-white">Tailwind CSS</span>,{" "}
              <span className="text-white">JavaScript</span>, and{" "}
              <span className="text-white">React</span>.
            </p>

            <p>
              My focus is on writing clean code, designing beautiful interfaces,
              and delivering experiences that feel smooth and intuitive.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;