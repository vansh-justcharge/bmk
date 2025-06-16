import React from "react";
import badge from '../assets/icons/batch_icon.png';

const PlanCard = ({ title, subtitle, features, buttonText, offset }) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#A9A0FF] to-[#4B4398] text-white rounded-2xl p-5  w-[300px] shadow-xl relative overflow-hidden flex flex-col justify-between mt-0 h-[380px] font-merriweather`} 
    >
      {/* Badge (top right icon) */}
      {badge && (
        <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
          <img src={badge} alt="badge" className="w-4 h-4" />
        </div>
      )}

      {/* Title & Subtitle */}
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm mt-1 mb-4">{subtitle}</p>
      </div>

      {/* Features */}
      <ul className="text-[14px] space-y-[4px] text-[#EFEEFF] bg-[#A09BFF21] rounded-xl p-4 my-4 flex-1 overflow-auto">
        {Array.isArray(features) && features.map((feature, idx) => (
          <li key={idx}>• {feature}</li>
        ))}
      </ul>

      {/* Button */}
      <button className="bg-[#EF4F9A] hover:bg-[#e4468d] text-white text-sm px-5 py-3 rounded-full w-full">
        {buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
