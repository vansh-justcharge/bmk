const SponsorCard = ({ icon, title, description, iconWidth, iconHeight }) => {
  return (
    <div
      className=" 
        bg-white rounded-[24px] shadow-md p-5 w-full sm:w-[377px]
        transition-shadow duration-300 ease-in-out
        hover:shadow-lg hover:scale-[1.02] 
      "
    >
      <div className="flex justify-between items-center mb-2 ">
        <h3 className="text-[#4B4398] font-bold text-[20px] leading-snug max-w-[69%] font-merriweather">
          {title}
        </h3>
        <div className="w-14 h-14 bg-[#EAE6FD] flex items-center justify-center rounded-2xl">
          <img
            src={icon}
            alt={title}
            style={{ width: iconWidth, height: iconHeight }}
          />
        </div>
      </div>
      <p className="text-sm text-[#9A858F] font-merriweather leading-snug">{description}</p>
    </div>
  );
};

export default SponsorCard;
