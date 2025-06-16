import React from 'react';
import images from '../../data/imagesData';

const ImageBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Oval Curve */}
      <svg
        className="absolute top-0 left-0 w-full h-28 z-15 "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 Q50,100 100,0 Z" fill="#fff" />
      </svg>

      {/* Bottom Oval Curve */}
      <svg
        className="absolute bottom-[-1px] left-0 w-full h-28 z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,100 Q50,0 100,100 Z" fill="#fff" />
      </svg>

      {/* Image Banner with smooth scroll and snap */}
      <div className="flex w-full h-[460px] overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-none w-[60%] md:w-[30%] -mx-2 snap-center transition-transform "
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBanner;
