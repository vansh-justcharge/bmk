import React from 'react';
import footerData from '../data/footerData';  

const Footer = () => {
  const { contact, locations, socialIcons } = footerData;

  return (
    <footer className="w-full h-[486px] bg-white text-[#4B4398] pt-0 pb-0 px-4 font-merriweather relative overflow-hidden">
      
      {/* Background circle with horizontal line inside */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[566px] h-[566px] rounded-full bg-[linear-gradient(to_bottom,_#DDD8FF,_#A09BFF_43%,_#4B4398)] flex justify-center items-center z-0">

</div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1280px] mt-[64px] mx-auto flex flex-col md:flex-row justify-between  text-center md:text-left gap-10 italic">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm font-medium">Contact</p>
          <p className="text-base mt-2 font-semibold">{contact.email}</p>
          <p className="text-base mt-1">{contact.phone}</p>
        </div>

        {/* Center CTA */}
        <div className="flex flex-col items-center gap-4 absolute top-[68%] left-[43%] ">
          <button className="bg-white border border-[#4B4398] text-[#4B4398] px-5 py-2 rounded-full text-sm font-semibold hover:shadow-md transition">
            Becoming sponsor
          </button>
          <div className="flex gap-4 mt-2">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
              >
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>

        {/* Location Info */}
        <div className="flex flex-col gap-4 text-sm text-center md:text-left italic">
            <div>
                <p className="font-bold font-merriweather">{locations.india.title}</p>
                <p className="whitespace-pre-line font-merriweather">{locations.india.address}</p>
            </div>
            <div>
                <p className="font-bold font-merriweather">{locations.mumbai.title}</p>
                <p className="whitespace-pre-line font-merriweather">{locations.mumbai.address}</p>
            </div>
        </div>

      </div>

      {/* Bottom Text Section */}
        <div className="relative z-10 mt-[120px] flex justify-between items-center text-xs text-[#4B4398] max-w-[1280px] mx-auto md:-px-2">
          <p>© Copyright 2025 BMK. All rights reserved.</p>
          <p className="hover:underline cursor-pointer ml-8 md:ml-16">Terms & Conditions</p>
        </div>

        {/* LET’S WORK TOGETHER at the very bottom */}
        {/* LET’S WORK TOGETHER at the very bottom, cut 1/4 by screen bottom */}
        <div className="w-full relative h-full  overflow-hidden mt-[36px]">
          <h1 className="absolute  left-1/2 -translate-x-1/2 text-[50px] md:text-[108px] font-extrabold tracking-[0.13em] select-none whitespace-nowrap bg-gradient-to-b from-[#4B4398] to-[#000000] text-transparent bg-clip-text font-Anton ">
            LET’S WORK TOGETHER
          </h1>
        </div>


    </footer>
  );
};

export default Footer;
