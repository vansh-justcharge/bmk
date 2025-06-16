import React from 'react'
import image from '../../assets/icons/doodle.svg';

const HeartO = () => (
  <span className="inline-block align-middle" style={{ height: '0.8em' }}>
    <svg width="24" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Highlight 14" d="M3.339 9.17041C6.49265 4.8769 12.323 11.574 13.5472 11.8851C14.7715 12.1961 12.8752 2.03657 19.1995 2.64251C25.5239 3.24845 18.4529 20.8025 17.1313 21.139C15.4792 21.5597 0.185344 13.4639 3.339 9.17041Z" stroke="#4B4398" strokeWidth="4.44023" strokeLinecap="round"/>
    </svg>
  </span>
);
const AboutHeading = () => {
  return (
    <div className="py-16 px-6 text-center">
      <h1 className="relative text-3xl sm:text-4xl md:text-4xl text-[#4B4398] leading-[150%] italic font-bold font-merriweather">
        <img
          src={image}
          alt="Heading Style"
          className="w-7 h-7 absolute top-[-25%] right-[-7%]"
        />
        Why Spons
       <HeartO />

        r with <span className="text-[rgb(255,18,133)] italic font-bold">BMK</span>
      </h1>
    </div>
  );
};

export default AboutHeading;
