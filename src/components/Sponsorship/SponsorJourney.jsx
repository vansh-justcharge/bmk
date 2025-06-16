import React from 'react';
import icon from '../../assets/icons/text.png';

const HeartO = () => (
  <span className="inline-block align-middle" style={{ height: '0.8em' }}>
    <svg width="24" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.339 9.17041C6.49265 4.8769 12.323 11.574 13.5472 11.8851C14.7715 12.1961 12.8752 2.03657 19.1995 2.64251C25.5239 3.24845 18.4529 20.8025 17.1313 21.139C15.4792 21.5597 0.185344 13.4639 3.339 9.17041Z"
        stroke="#4B4398"
        strokeWidth="4.44023"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const SponsorJourney = () => {
  return (
    <div className="overflow-x-hidden w-full mt-20">
      {/* Heading */}
      <div className="py-16 px-6 mt-8 text-center font-merriweather italic">
        <div className="relative inline-block">
          <img
            src={icon}
            alt="Text Icon"
            className="w-5 h-5 absolute -top-2 left-[105px] md:left-[75px]"
          />
          <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#4B4398] leading-[150%] font-bold italic">
            The Sp<HeartO />nsorship Journey
          </h1>
        </div>
      </div>

      {/* Wrapper with relative positioning */}
      <div className="relative min-h-[586px] w-full max-w-[1280px] mx-auto">
        {/* Row 1 */}
        <div className="absolute top-0 left-[2%] right-0 flex items-start gap-7">
          {/* Text for Box 1 */}
          <div className="text-right">
            <div className="w-[497px]">
              <h3 className="text-[20px] mt-[46px] font-merriweather font-bold text-[#4B4398]">
                Submit Your Interest Form
              </h3>
              <p className="text-[16px] italic text-[#4B4398] font-merriweather mt-1">
                Fill Out Our Simple Form With Your Brand Details And Sponsorship Goals.
              </p>
            </div>
          </div>

          {/* Box 1 */}
          <div className="bg-gradient-to-br from-[#4B4398] to-[rgba(75,67,152,0)] rounded-[40px] w-[632px] h-[352px] p-8 text-white flex items-end justify-between relative overflow-hidden">
            {/* Left Text */}
            <div className="absolute top-[60px] left-[36px]">
              <div>
                <div className="text-[64px] font-semibold leading-none">200k</div>
                <p className="text-[20px] mt-2">
                  BMK Clients<br />Worldwide.
                </p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="absolute bottom-8 right-8 flex items-end gap-2 h-[160px] pr-4">
              <div className="w-[12px]"></div>
              {[75, 144, 52, 144, 108, 60, 178].map((h, idx) => (
                <div
                  key={idx}
                  className="w-[44px] bg-[#4B4398] rounded-t-[6px]"
                  style={{ height: `${h}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="absolute bottom-[12%] left-[10%] right-0 flex items-end gap-8">
          {/* Box 2 */}
          <div className="bg-gradient-to-br from-[#4B4398] to-[rgba(75,67,152,0)] rounded-[40px] p-6 w-[454px] h-[352px] shadow-lg text-white relative overflow-hidden">
            <div className="text-[64px] font-medium">1900+</div>
            <p className="mt-4 text-[20px] w-[150px] ml-2">
              We Have Uploaded 1900+ Views On BMK Videos
            </p>
            {/* Combined SVG as background */}
            {/* First SVG Path */}
          <svg
            className="absolute right-[-25%] bottom-[-16%]"
            width="500"
            height="250"
            viewBox="0 0 610 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 0 }}
          >
            <path
              d="M-6 202.387L63.1544 194.961C68.1957 194.42 73.2545 195.813 77.3074 198.86L127.895 236.887C138.179 244.617 152.981 240.768 158.196 229.007L185.806 166.743C186.268 165.701 186.64 164.622 186.918 163.517L211.674 65.152C216.222 47.0843 240.829 44.5016 249.028 61.2314L282.343 129.205C289.947 144.719 312.319 143.942 318.828 127.938L365.397 13.4436C371.317 -1.11124 390.938 -3.46867 400.137 9.26968L442.485 67.91C449.616 77.7836 463.841 79.0458 472.598 70.5818L528.063 16.9763C531.263 13.8839 535.402 11.9468 539.827 11.4717L610 3.936"
              stroke="#6C60FF"
              strokeWidth="2"
            />
          </svg>

          {/* Second SVG Path */}
          <svg
            className="absolute right-[-45%] bottom-[-10%]"
            width="700"
            height="250"
            viewBox="0 0 610 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 0 }}
          >
            <path
              d="M-6 211.299L68.1496 207.059C70.0403 206.951 71.9368 207.112 73.7822 207.537L136.013 221.877C143.364 223.571 151.044 220.983 155.872 215.186L183.361 182.177C185.423 179.7 188.053 177.759 191.028 176.518L212.071 167.737C219.833 164.499 228.792 166.462 234.488 172.651L283.692 226.11C292.796 236 308.87 234.273 315.665 222.675L371.159 127.947C375.774 120.07 385.137 116.318 393.914 118.827L441.099 132.318C449.871 134.826 459.227 131.08 463.845 123.213L527.581 14.6347C530.966 8.86733 537.01 5.1737 543.687 4.79191L610 1"
              stroke="#CE2A96"
              strokeWidth="2"
            />
          </svg>

          </div>
          <div className="max-w-sm text-left mb-[42px]">
            <h3 className="text-[20px] font-bold font-merriweather text-[#4B4398] mb-5">
              BMK Team Reviews & Plans
            </h3>
            <p className="text-[16px] italic text-[#4B4398] font-merriweather">
              Our Team Reviews Your Application And Creates A Customized Sponsorship Plan For Your Brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorJourney;
