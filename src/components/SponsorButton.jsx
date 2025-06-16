import React from "react";
import { useNavigate } from "react-router-dom";

const SponsorButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sponsor");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-7 right-7 bg-[#FF1285] text-white text-[16px] px-4 py-2 rounded-full shadow-lg z-50 hover:bg-[#e0097d] transition font-merriweather font-bold italic"
    >
      Becoming Sponsor
    </button>
  );
};

export default SponsorButton;
