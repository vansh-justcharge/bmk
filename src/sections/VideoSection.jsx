import React, { useState } from 'react';
import videoBg from '../assets/video/video.mp4'; 
import { useNavigate } from "react-router-dom";

const VideoSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sponsor");
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full py-16 flex justify-center items-center relative ">
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
      <div className="relative w-full max-w-6xl h-[500px] overflow-hidden shadow-xl">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-2xl"></div>

        {/* Main Content */}
        <div className="relative z-20 w-full h-full px-6 flex flex-col justify-center items-center text-white text-center italic">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-merriweather leading-tight">
            Join 1,000+ Brands Growing Their <br /> Business With Book My Kitty
          </h1> 

          <div className="mt-2 backdrop-blur-sm bg-[#FFFFFF05] px-4 py-1">
            <p className="text-[12px] md:text-xs italic font-light text-gray-200 max-w-2xl font-merriweather">
              Get Direct Access To Our Community Of 1 Million+ Women Across India. <br />
              Our Sponsors See An Average Of 30%+ Increase In Brand Engagement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex mt-8 justify-center">
            <button
            onClick={handleClick}
              className={`px-6 py-3 rounded-full flex items-center transition font-merriweather ${
                isHovered ? 'bg-white text-[#4B4398]' : 'bg-[#4B4398] text-white'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Becoming Sponsor
            </button>

            <button
              className={`px-4 py-3 rounded-full flex items-center justify-center transition ${
                isHovered ? 'bg-white text-[#4B4398]' : 'bg-[#4B4398] text-white'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ width: '48px', height: '48px' }}
            >
              <span className="inline-block align-middle" style={{ height: '1.3em' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0298 6.81782C16.2282 6.81021 16.4216 6.88123 16.5678 7.01544C16.7141 7.14965 16.8014 7.33618 16.8109 7.53447L17.1146 14.599C17.1225 14.6994 17.1101 14.8004 17.0781 14.8959C17.0461 14.9914 16.9952 15.0795 16.9284 15.1549C16.8616 15.2303 16.7804 15.2915 16.6894 15.3348C16.5985 15.3781 16.4998 15.4026 16.3991 15.4069C16.2985 15.4113 16.198 15.3953 16.1037 15.3599C16.0094 15.3246 15.9232 15.2706 15.8502 15.2012C15.7772 15.1318 15.7189 15.0485 15.6788 14.956C15.6388 14.8636 15.6177 14.7641 15.6169 14.6634L15.391 9.40738L8.50171 16.9157C8.36723 17.0622 8.18003 17.1494 7.9813 17.1579C7.78257 17.1665 7.58859 17.0957 7.44202 16.9612C7.29546 16.8267 7.20832 16.6395 7.19978 16.4408C7.19123 16.2421 7.26198 16.0481 7.39646 15.9015L14.2857 8.39326L9.0297 8.61925C8.83537 8.62074 8.64806 8.54675 8.50721 8.41286C8.36636 8.27897 8.28298 8.09564 8.27463 7.90148C8.26628 7.70733 8.33362 7.51752 8.46246 7.37204C8.59129 7.22655 8.77157 7.13676 8.96531 7.12156L16.0298 6.81782Z"
                    fill={isHovered ? '#4B4398' : '#FFFFFF'}
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 font-merriweather">
            {[
              { value: '1M+', label: 'Active Users' },
              { value: '500+', label: 'Monthly Events' },
              { value: '30%', label: 'Avg. Engagement' },
              { value: '2cr+', label: 'Revenue Generated' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white text-[#4B4398] w-[130px] sm:w-[150px] px-4 py-2 rounded-2xl shadow-md text-center"
              >
                <p className="text-sm">{stat.value}</p>
                <p className="text-xs text-[#4B4398] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
