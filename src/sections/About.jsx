import React from 'react';
import AboutHeading from '../components/About/AboutHeading';
import SponsorCard from "../components/About/SponsorCard";
import sponsorData from "../data/sponsorData";
import BrandPage from '../components/About/BrandPage';

const About = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 relative">
      <AboutHeading />
      
      
      
      <div className="w-full flex flex-wrap justify-center  gap-[2rem] px-2 sm:px-2 lg:px-4 relative">
        <div
        className="
          absolute
          right-[0%]
          top-[-0%]
          w-[120px]
          h-[250px]
          rounded-[375px]
          bg-[radial-gradient(circle_at_center,_#959AF6_0%,_#959AF6_42%)]
          opacity-[75%]
          blur-[100px]
          pointer-events-none
          z-[-5px]
        "
      />
        <div
        className="
          absolute
          left-[0%]
          bottom-[2%]
          w-[120px]
          h-[150px]
          rounded-[375px]
          bg-[radial-gradient(circle_at_center,_#959AF6_0%,_#959AF6_42%)]
          opacity-[75%]
          blur-[100px]
          pointer-events-none
          z-[-50px]
        "
      />
        {sponsorData.map((item, index) => (
          <div key={index} style={{ width: '370px' }} className="max-w-full z-[15px]">
            <SponsorCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconWidth={item.iconWidth}
              iconHeight={item.iconHeight}
            />
          </div>
        ))}
      </div>

      

      <BrandPage />
    </div>
  );
};

export default About;
