import React from "react";
import search from '../assets/icons/search_icon.png';

const FilterButton = ({ text, icon, type }) => {
  let baseStyle =
    "flex items-center gap-2 px-5 py-2 rounded-[14px] border border-gray-300 text-sm font-medium transition font-merriweather ";
  let inputStyle =
    "bg-white text-gray-500 placeholder:text-gray-400 focus:outline-none w-full";
  let filledStyle =
    "bg-[#CAC8E2] text-[#2F1C6A] border-[#4B4398]/44 hover:bg-[#c9c2f5]";

  if (type === "input") {
    return (
      <div className={`${baseStyle}`}>
        <img src={icon} alt="" className="w-4 h-4" />
        <input
          type="text"
          placeholder={text}
          className={`bg-transparent focus:outline-none text-sm placeholder:text-gray-400`}
        />
        <img src={search} alt="" className="w-4 h-4" />
      </div>
    );
  }

  if (type === "dropdown") {
    return (
      <button className={`${baseStyle} bg-white`}>
        <img src={icon} alt="" className="w-4 h-4" />
        {text}
        <span className="ml-1">▼</span>
      </button>
    );
  }

  if (type === "filled") {
    return (
      <button className={`${baseStyle} ${filledStyle}`}>
        <img src={icon} alt="" className="w-4 h-4" />
        {text}
      </button>
    );
  }

  if (type === "icon") {
    return (
      <button className={`${baseStyle} px-3`}>
        <img src={icon} alt="" className="w-5 h-5" />
      </button>
    );
  }

  return null;
};

export default FilterButton;
