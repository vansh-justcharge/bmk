import React from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sponsor");
  };
  return (
    <header className="w-full fixed top-4 z-50">
      <div
        className="mx-auto max-w-[1280px] px-6 py-3 rounded-full flex items-center justify-between backdrop-blur-lg bg-[#A0A5F62E] bg-opacity-[18%]"
      >
        {/* Logo Image */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="Book My Kitty" className="h-[56px] w-auto object-contain" />
          </a>
        </div>


        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-[#4B4398] text-base font-bold py-[14px] ml-[110px] mr-[135px]">
          <a
            href="#about"
            className="font-merriweather font-bold text-current  transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#a04dcc] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#benefits"
            className="font-merriweather font-bold text-current transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#a04dcc] after:transition-all after:duration-300 hover:after:w-full"
          >
            Benefits
          </a>
          <a
            href="#how"
            className="font-merriweather font-bold text-current  transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[rgb(160,77,204)] after:transition-all after:duration-300 hover:after:w-full"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="font-merriweather font-bold text-current transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#a04dcc] after:transition-all after:duration-300 hover:after:w-full"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="font-merriweather font-bold text-current transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#a04dcc] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact us
          </a>
        </nav>


        {/* CTA Button */}
        <button onClick={handleClick}
          className="font-merriweather bg-[#4B4398] text-white text-[16px] px-4 py-2 rounded-full transition">
          Becoming sponsor
        </button>
      </div>
    </header>

  );
};

export default NavBar;
