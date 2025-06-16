import React from 'react';
import Slider from 'react-slick';
import HomeHeading from '../components/Home/HomeHeading';
import ImageBanner from '../components/Home/ImageBanner';

const HomePage = () => {
  return (
    <div className="relative pt-[80px] text-center min-h-screen overflow-hidden">
      <div
            className="
              absolute
              left-[-5%]
              top-[-32%]
              w-[600px]
              h-[400px]
              rounded-[375px]
              bg-[radial-gradient(circle_at_center,_#959AF6_0%,_#959AF6_42%)]
              opacity-[90%]
              blur-[183px]
              pointer-events-none
            "
          />
          <div
            className="
              absolute
              right-[5%]
              top-[5%]
              w-[250px]
              h-[250px]
              rounded-[375px]
              bg-[radial-gradient(circle_at_center,_#959AF6_0%,_#959AF6_42%)]
              opacity-[75%]
              blur-[100px]
              pointer-events-none
            "
          />
      <div className="max-w-5xl mx-auto">
        <HomeHeading />
      </div>

      <div>
        <ImageBanner />
      </div>
    </div>
  );
};

export default HomePage;
