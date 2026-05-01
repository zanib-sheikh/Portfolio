import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192fa5] text-gray-300 z-50'>
      {/* Logo or name */}
      <div>
       
      </div>

     <ul className='hidden md:flex gap-x-10 text-lg absolute left-1/2 transform -translate-x-1/2'>
  <li>
    <Link
      to='home'
      smooth={true}
      duration={500}
      spy={true}
      activeClass='text-pink-600 font-semibold'
      className='hover:text-pink-400 duration-200'
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to='about'
      smooth={true}
      duration={500}
      spy={true}
      activeClass='text-pink-600 font-semibold'
      className='hover:text-pink-400 duration-200'
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to='skills'
      smooth={true}
      duration={500}
      spy={true}
      activeClass='text-pink-600 font-semibold'
      className='hover:text-pink-400 duration-200'
    >
      Skills
    </Link>
  </li>
  <li>
    <Link
      to='work'
      smooth={true}
      duration={500}
      spy={true}
      activeClass='text-pink-600 font-semibold'
      className='hover:text-pink-400 duration-200'
    >
      Work
    </Link>
  </li>
  <li>
    <Link
      to='contact'
      smooth={true}
      duration={500}
      spy={true}
      activeClass='text-pink-600 font-semibold'
      className='hover:text-pink-400 duration-200'
    >
      Contact
    </Link>
  </li>
</ul>
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    {/* LinkedIn */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://www.linkedin.com/in/zanibzubair/'
        target='_blank'
        rel='noreferrer'
      >
        Linkedin <FaLinkedin size={30} />
      </a>
    </li>

    {/* GitHub */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://github.com/zanib-sheikh'
        target='_blank'
        rel='noreferrer'
      >
        Github <FaGithub size={30} />
      </a>
    </li>

    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
  <a
    className='flex justify-between items-center w-full text-gray-300'
    href='https://mail.google.com/mail/?view=cm&to=zanib4902@gmail.com&su=Portfolio%20Inquiry'
    target='_blank'
    rel='noreferrer'
  >
    Email <HiOutlineMail size={30} />
  </a>
</li>


    {/* Resume */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
       href='https://pdflink.to/028d4329/'
        target='_blank'
        rel='noreferrer'
      >
        Resume <BsFillPersonLinesFill size={30} />
      </a>
    </li>
  </ul>
</div>



      {/* Hamburger Icon */}
      {/* Mobile top bar: Contact Me button (left) & Hamburger (right) */}
<div className='flex justify-between items-center w-full md:hidden z-10'>
  {/* Contact Me Button */}
  <Link
    to='contact'
    smooth={true}
    duration={500}
    className='text-white bg-pink-600 px-4 py-2 rounded-md text-sm ml-2 hover:bg-pink-700 transition'
  >
    Contact Me
  </Link>

  {/* Hamburger Icon */}
  <div onClick={handleClick} className='cursor-pointer mr-2'>
    {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
  </div>
</div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

        {/* Social icons on mobile */}
        <div className='flex mt-8 gap-6'>
          <a
            href='https://github.com/zanib-sheikh'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-pink-600'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='https://www.linkedin.com/in/zanibzubair/'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-pink-600'
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://mail.google.com/mail/?view=cm&to=zanib4902@gmail.com&su=Portfolio%20Inquiry'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-pink-600'
          >
            <HiOutlineMail size={30} />
          </a>
          <a
            href='https://pdflink.to/028d4329/'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-pink-600'
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </div>
      </ul>

      {/* Desktop Socials (optional, already exists in your old code) */}
    </div>
  );
};

export default Navbar;
