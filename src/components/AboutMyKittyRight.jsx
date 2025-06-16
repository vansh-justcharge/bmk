import React from 'react';
import aboutMyKittyRight from '../data/aboutMyKittyRight';

const AboutMyKittyRight = () => {
  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 ">
      <div className="relative w-[400px] h-auto">

        {/* Rounded background behind image */}
        <div className="absolute top-20 left-0 w-[400px] h-[340px] bg-[#CACCC9] rounded-3xl z-0"></div>

        {/* Pink circle top right */}
       <div className="absolute top-[12%] right-6 w-16 h-8 bg-pink-400 [border-radius:9999px_9999px_0_0] z-10"></div>
        

        {/* Gray blurred circle bottom left */}
        <div className="absolute bottom-[-20px] left-[-20px] w-16 h-16 bg-gray-200 rounded-full blur-sm z-0"></div>

        {/* Purple blurred circle bottom right */}
        <div className="absolute bottom-[-2%] right-[-45px]  w-24 h-24 bg-[#00000017] rounded-full  z-0"></div>

        {/* Main image */}
        <img
          src={aboutMyKittyRight.image}
          alt="Book My Kitty"
          className="relative z-10 rounded-3xl w-[340px] h-auto object-cover"
        />

        {/* Badge 1 - Top left */}
        <div className="absolute top-[250px] left-[-100px] bg-white shadow-md rounded-xl px-4 py-4 text-xs font-merriweather italic text-[#4B4398] font-semibold flex items-center z-20">
          <img src={aboutMyKittyRight.badges[0].icon} alt="icon1" className="w-6 h-6" />
          {aboutMyKittyRight.badges[0].label}
        </div>

        {/* Badge 2 - Right center */}
        <div className="absolute top-[225px] right-[-80px] bg-white shadow-md rounded-xl pl-7 pr-2 py-4 text-sm font-medium text-pink-600 flex items-center gap-2 z-20 rotate-[-6deg]">
          <img src={aboutMyKittyRight.badges[1].icon} alt="icon2" className="w-12 h-12 absolute top-[0%] left-[-12%]" />
          {aboutMyKittyRight.badges[1].label}
        </div>

        {/* Badge 3 - Bottom */}
        <div className="absolute bottom-[-5px] left-[95px] bg-white shadow-xl rounded-3xl px-8 py-7 text-xs font-semibold font-merriweather text-[#4B4398] max-w-[350px] z-20 rotate-[-12deg] flex items-center gap-2">
          <div className='text-center '>{aboutMyKittyRight.badges[2].label}</div>
          <img src={aboutMyKittyRight.badges[2].icon} alt="icon3" className="w-9 h-9 absolute right-[3%] top-[7%]" />
        </div>

      </div>
    </div>
  );
};

export default AboutMyKittyRight;
