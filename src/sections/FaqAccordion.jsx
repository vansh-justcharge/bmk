import React, { useState } from 'react';
import faqData from '../data/faqData';
import white_icon from '../assets/icons/down.svg';
import blue_icon from '../assets/icons/right_arrow.svg';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full px-4 py-16 flex justify-center items-center relative">
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
          bottom-[15%]
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
      <div className="max-w-3xl w-full">
        <h2 className="text-xl sm:text-2xl md:text-[42px] font-merriweather font-bold text-center italic text-[#4B4398] mb-10">
          All Your What-ifs, Whys & Hows
        </h2>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                className={`rounded-xl shadow-md border-[2px] ${
                  isOpen ? 'bg-white border-[#4B4398]' : 'bg-white border-transparent'
                } transition-all duration-300 py-4`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                >
                  <span className="text-[22px] sm:text-base italic text-[#4B4398] font-merriweather">
                    {item.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 ${
                      isOpen ? 'bg-[#4B4398]' : 'bg-white shadow-md '
                    }`}
                  >
                    <img
                      src={isOpen ? white_icon : blue_icon}
                      alt="arrow"
                      className={`transition-transform duration-300 transform ${
                        isOpen ? 'rotate-180 w-3 h-2' : 'rotate-0 w-2 h-3'
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6  w-[600px] pb-4 text-xs text-[#6F6C90] transition-all duration-300 font-merriweather leading-6 tracking-wide">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
