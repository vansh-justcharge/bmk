import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const HomeHeading = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sponsor");
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-16 pb-4 px-6 text-center font-merriweather">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-2 text-[#4B4398] leading-[150%]">
        Showcase Your Brand to <span className="text-[rgb(255,18,133)]">1M+</span> Women<br />
        Through Exclusive BMK Events
      </h1>
      <p className="text-[#4B4398] mt-6 max-w-xl mx-auto text-base sm:text-lg">
        Get your brand in front of high-engagement women communities through
        curated kitty events, contests, and bookings.
      </p>

      {/* Hover applies to both buttons */}
      <div
        className="flex mt-8 justify-center "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
        onClick={handleClick}
          className={`px-6 py-3 rounded-full flex items-center transition border border-[#4B4398] ${
            isHovered
              ? 'bg-white text-[#4B4398]'
              : 'bg-[#4B4398] text-white'
          }`}
        >

          Becoming Sponsor
        </button>

        <button
        onClick={handleClick}
          className={`px-4 py-3 rounded-full flex items-center justify-center transition border border-[#4B4398] ${
            isHovered
              ? 'bg-white text-[#4B4398]'
              : 'bg-[#4B4398] text-white'
          }`}
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
    </div>
  );
};

export default HomeHeading;
