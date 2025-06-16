
import React from "react";
import { categories } from "../../data/categories";
import image from "../../assets/images/image_center.png"

const CategoryGrid = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center mt-[146px] mb-[86px]">
      {/* Center Text Box */}
      <div className="relative w-full h-[200px] flex items-center justify-center bg-white">
        <div className="bg-[#887CFF1F] w-[706px] h-[290px] rounded-[32px] flex items-center justify-center">
          <div className="bg-[#887CFF1F] w-[560px] h-[190px] rounded-[32px] flex items-center justify-center">
            <div className="bg-[#887CFF1F] w-[392px] h-[104px] rounded-[32px] flex items-center justify-center">
              <img src={image}  alt="center" className="mx-auto w-[320px] h-[88px]" />
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
          <p style={{ fontSize: cat.fontSize }}  className="font-bold font-merriweather mt-2 italic">{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
