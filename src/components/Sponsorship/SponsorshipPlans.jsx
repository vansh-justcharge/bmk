import React, { useRef } from "react";
import { filterButtons } from "../../data/buttonData";
import FilterButton from "../FilterButton";
import { sponsorshipPlans as allPlans } from "../../data/planData";
import PlanCard from "../PlanCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import icon from '../../assets/icons/heading_style.png';


const HeartO = () => (
  <span className="inline-block align-middle" style={{ height: '0.9em' }}>
    <svg width="24" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Highlight 14" d="M3.339 9.17041C6.49265 4.8769 12.323 11.574 13.5472 11.8851C14.7715 12.1961 12.8752 2.03657 19.1995 2.64251C25.5239 3.24845 18.4529 20.8025 17.1313 21.139C15.4792 21.5597 0.185344 13.4639 3.339 9.17041Z" stroke="#4B4398" strokeWidth="4.44023" strokeLinecap="round"/>
    </svg>
    </span>
);
const SponsorshipPlans = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24;
      const { scrollLeft } = scrollRef.current;

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <div className="relative pt-12 px-6 mt-6 text-center font-merriweather">
        <img src={icon} alt="Text Icon" className="w-6 h-6 absolute top-[32%] right-[20%]" />
        <h1 className="text-3xl sm:text-4xl text-[#4B4398] font-bold">Spons<HeartO/>rship Plans</h1>
        <p className="text-[#4B4398] mt-5 font-bold text-[20px]">
          Choose the perfect plan for your brand's needs and budget
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 p-4 bg-white justify-center mt-2 mb-5 font-merriweather">
        {filterButtons.map((btn, index) => (
          <FilterButton key={index} text={btn.text} icon={btn.icon} type={btn.type} />
        ))}
      </div>

      {/* Scrollable Plans Section */}
      <div className="relative w-[1050px] mx-auto">
        {/* Left Arrow */}
        <button
          className="absolute left-[-5%] top-1/2 -translate-y-1/2 z-10 bg-[#887CFF1F] hover:bg-[#42987a1f] rounded-full p-2 shadow-lg"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Card Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll gap-6 py-8 px-[24px] scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {allPlans.map((plan, index) => (
            <div key={index} className="flex-shrink-0 w-[320px]">
              <PlanCard {...plan} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 z-10 bg-[#887CFF1F] hover:bg-[#42987a1f] rounded-full p-2 shadow-lg"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Hide Scrollbar */}
      <style>{`.scroll-smooth::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default SponsorshipPlans;
