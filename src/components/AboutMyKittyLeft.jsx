import React from 'react';
import aboutMyKittyLeft from '../data/aboutMyKittyLeft';
import icon from '../assets/icons/text.png';
import { text } from 'framer-motion/client';

const AboutMyKittyLeft = () => {
  return (
    <div className=" relative w-full md:w-1/2 p-6 mr-[100px]">
      <img src={icon} alt="Text Icon" className="w-6 h-6 absolute top-[12px] left-[15px] " />
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 relative font-merriweather">
        {aboutMyKittyLeft.heading}
      </h2>
      {aboutMyKittyLeft.paragraphs.map((para, idx) => (
        <p key={idx} className="text-[#9A858F] w-[600px] mb-4 text-[15px] leading-relaxed font-merriweather">
          {para}
        </p>
      ))}
    </div>
  );
};

export default AboutMyKittyLeft;
