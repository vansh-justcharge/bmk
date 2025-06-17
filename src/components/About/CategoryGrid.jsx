import React from "react";
import { categories } from "../../data/categories";
import image from "../../assets/images/image_center.png";
import pointer from "../../assets/icons/pointer.svg";

const PAUSE_TIME = 0.8; // seconds to pause at each end
const MOVE_TIME = 0.8;  // seconds to move between ends
const DISTANCE = -340; // px, negative for left, positive for right

const TOTAL_TIME = 2 * PAUSE_TIME + 2 * MOVE_TIME;
const pausePercent = (PAUSE_TIME / TOTAL_TIME) * 100;
const movePercent = (MOVE_TIME / TOTAL_TIME) * 100;

// Inline keyframes for animation
const keyframes = `
@keyframes leftRightPause {
  0% { transform: translateX(0); }
  ${pausePercent}% { transform: translateX(0); }
  ${pausePercent + movePercent}% { transform: translateX(${DISTANCE}px); }
  ${pausePercent + movePercent + pausePercent}% { transform: translateX(${DISTANCE}px); }
  ${pausePercent + 2 * movePercent + pausePercent}% { transform: translateX(0); }
  100% { transform: translateX(0); }
}
`;

const CategoryGrid = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center mt-[146px] mb-[86px]">
      {/* Inject keyframes for pointer animation */}
      <style>{keyframes}</style>
      {/* Center Text Box */}
      <div className="relative w-full h-[200px] flex items-center justify-center bg-white">
        <div className="bg-[#887CFF1F] w-[706px] h-[290px] rounded-[32px] flex items-center justify-center">
          <div className="bg-[#887CFF1F] w-[560px] h-[190px] rounded-[32px] flex items-center justify-center">
            <div className="bg-[#887CFF1F] w-[392px] h-[104px] rounded-[32px] flex items-center justify-center relative">
              <img src={image} alt="center" className="mx-auto w-[320px] h-[88px]" />
              <img
                src={pointer}
                alt="pointer"
                className="mx-auto w-[24px] h-[24px] absolute right-2 bottom-1"
                style={{
                  animation: `leftRightPause ${TOTAL_TIME}s ease-in-out infinite`
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Categories */}
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`absolute ${cat.style} text-center`}
        >
          <img
            src={cat.image}
            alt={cat.title}
            style={{ width: cat.width, height: cat.height }}
            className="object-cover rounded-[21px] shadow-md mx-auto"
          />
          <p style={{ fontSize: cat.fontSize }} className="font-bold font-merriweather mt-2 italic">{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
