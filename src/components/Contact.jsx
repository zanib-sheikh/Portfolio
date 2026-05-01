import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#020617] to-[#0a192f] flex justify-center items-center px-4 py-24 relative overflow-hidden"
    >
      {/* 🌌 Glow Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px]" />

      {/* 📦 Form Container */}
      <form
        method="POST"
        action="https://formspree.io/f/xeokypna"
        className="relative z-10 flex flex-col max-w-[600px] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        {/* Heading */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-3">
            Contact Me
          </h2>
          <p className="text-gray-400">
            Open to freelance, internships & collaborations. Let’s build something great.
          </p>
        </div>

        {/* Inputs */}
        <input
          className="p-3 mb-4 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
          type="text"
          placeholder="Your Name"
          name="name"
        />

        <input
          className="p-3 mb-4 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
          type="email"
          placeholder="Your Email"
          name="email"
        />

        <textarea
          className="p-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
          name="message"
          rows="6"
          placeholder="Your Message"
        ></textarea>

        {/* 🔥 PREMIUM BUTTON */}
        <button
          className="relative mt-8 mx-auto px-8 py-3 rounded-full text-white font-medium border border-white/20 overflow-hidden group transition duration-300"
        >
          {/* Glow layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-lg transition duration-300"></span>

          {/* Button text */}
          <span className="relative z-10 flex items-center gap-2">
            Let’s Collaborate
            <span className="transform group-hover:translate-x-1 group-hover:-rotate-12 transition duration-300">
              →
            </span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;