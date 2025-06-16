import { useState, useCallback, memo } from "react";
import NavBar from "../../components/NavBar";
import down from "../../assets/icons/drop_down.svg";
import right from "../../assets/icons/black_arrow.svg";
import cursor from "../../assets/icons/cursor.svg";
import search from "../../assets/icons/search.svg";

// Memoized Tag Component
const Tag = memo(({ location, onRemove }) => (
  <div className="bg-[#4B439838] text-[#000000] px-3 py-1 rounded-[12px] flex items-center text-sm font-merriweather">
    {location}
    <span className="ml-2 cursor-pointer" onClick={onRemove}>
      ✕
    </span>
  </div>
));

// Memoized Screen Components
const ServiceScreen = memo(({ selectedService, setSelectedService, serviceOpen, setServiceOpen }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
      What service do you need?
    </h2>
    <div className="w-[250px] md:w-[560px] relative">
      <button
        type="button"
        className="w-full border border-[#4B4398] rounded-full px-4 py-2 text-left text-[#4B4398] shadow-lg font-merriweather bg-white cursor-pointer relative"
        aria-haspopup="listbox"
        aria-expanded={serviceOpen}
        onClick={() => setServiceOpen(!serviceOpen)}
      >
        {selectedService}
        <img
          src={down || "/placeholder.svg"}
          alt="down arrow"
          className="w-[14px] h-[14px] absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </button>

      {serviceOpen && (
        <ul
          className="absolute z-10 mt-2 w-full bg-white border border-[#4B4398] rounded-xl shadow-lg"
          role="listbox"
          tabIndex={-1}
        >
          {["Event", "Workshop", "Seminar", "Webinar", "Meetup"].map((service) => (
            <li
              key={service}
              role="option"
              aria-selected={selectedService === service}
              onClick={() => {
                setSelectedService(service);
                setServiceOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#f1edfe] cursor-pointer text-[#4B4398]"
            >
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
));

const SkillsScreen = memo(({ selectedSkills, setSelectedSkills, skillInputValue, setSkillInputValue }) => {
  const handleSkillInputKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = skillInputValue.trim();
      if (value && !selectedSkills.includes(value)) {
        setSelectedSkills((prev) => [...prev, value]);
        setSkillInputValue("");
      }
    }
  }, [skillInputValue, selectedSkills]);

  const removeTag = useCallback((skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  }, []);

  const handleTagClick = useCallback((skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prev) => [...prev, skill]);
    }
  }, [selectedSkills]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
        What Skill do you need?
      </h2>
      <div className="flex flex-wrap items-center gap-2 border rounded-full px-4 py-2 w-full max-w-xl shadow-lg mb-[86px] border-[#4B4398]">
        {selectedSkills.map((skill) => (
          <Tag
            key={skill}
            location={skill}
            onRemove={() => removeTag(skill)}
          />
        ))}
        <input
          className="flex-grow border-none outline-none bg-transparent text-sm"
          value={skillInputValue}
          onChange={(e) => setSkillInputValue(e.target.value)}
          onKeyDown={handleSkillInputKeyDown}
          placeholder="Add skill..."
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center max-w-4xl font-merriweather">
        {[
          "Sponsoring", "Funding", "Partnership", "Granting",
          "Investment", "Crowdfunding", "Savings", "Expenses",
          "Revenue", "Assets", "Liabilities", "Net Worth"
        ].map((skill) => (
          <div
            key={skill}
            onClick={() => handleTagClick(skill)}
            className="bg-[#4B439838] text-[#000000] px-4 py-1 rounded-[12px] text-sm flex items-center cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
});

const LocationsScreen = memo(({
  selectedLocations,
  setSelectedLocations,
  searchValue,
  setSearchValue,
  tagInputValue,
  setTagInputValue
}) => {
  const handleSearchKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = searchValue.trim();
      if (value && !selectedLocations.includes(value)) {
        setSelectedLocations((prev) => [...prev, value]);
        setSearchValue("");
      }
    }
  }, [searchValue, selectedLocations]);

  const handleTagInputKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = tagInputValue.trim();
      if (value && !selectedLocations.includes(value)) {
        setSelectedLocations((prev) => [...prev, value]);
        setTagInputValue("");
      }
    }
  }, [tagInputValue, selectedLocations]);

  const removeLocation = useCallback((location) => {
    setSelectedLocations((prev) => prev.filter((l) => l !== location));
  }, []);

  const handleLocationClick = useCallback((location) => {
    if (!selectedLocations.includes(location)) {
      setSelectedLocations((prev) => [...prev, location]);
    }
  }, [selectedLocations]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
        Where should the provider be active?
      </h2>

      <div className="flex items-center gap-2 border rounded-[14px] px-4 py-2 w-full max-w-[258px] shadow-sm text-sm text-gray-400 mb-4 border-[#4B4398]">
        <span className="ml-3">
          <img src={cursor || "/placeholder.svg"} alt="cursor" />
        </span>
        <input
          type="text"
          placeholder="Search location"
          className="flex-grow bg-transparent outline-none text-black placeholder:text-gray-400"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          autoComplete="off"
        />
        <span>
          <img src={search || "/placeholder.svg"} alt="search" />
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 border rounded-full px-4 py-2 w-full max-w-xl shadow-lg mb-4 mt-[24px] border-[#4B4398]">
        {selectedLocations.map((location) => (
          <Tag
            key={location}
            location={location}
            onRemove={() => removeLocation(location)}
          />
        ))}
        <input
          type="text"
          placeholder="Add location..."
          className="flex-grow bg-transparent outline-none text-black placeholder:text-gray-400 min-w-[120px] text-sm"
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={handleTagInputKeyDown}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mt-[24px]">
        {[
          "Maharashtra", "Karnataka", "Gujarat", "Punjab", "Rajasthan",
          "Tamil Nadu", "West Bengal", "Uttar Pradesh", "Haryana", "Odisha",
          "Bihar", "Kerala", "Andhra Pradesh", "Himachal Pradesh", "Chhattisgarh",
          "Jammu and Kashmir"
        ].map((state) => (
          <div
            key={state}
            onClick={() => handleLocationClick(state)}
            className={`px-4 py-1 rounded-[12px] font-merriweather text-sm flex items-center cursor-pointer transition-colors ${selectedLocations.includes(state)
                ? "bg-[#4B4398] text-white"
                : "bg-[#4B439838] text-[#000000] hover:bg-[#4B439850]"
              }`}
          >
            {state}
          </div>
        ))}
      </div>
    </div>
  );
});

const CompanyNameScreen = memo(() => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
      What is your company name?
    </h2>
    <input
      type="text"
      placeholder="Enter your company name"
      className="w-full max-w-lg px-5 py-2 border border-[#4B4398] rounded-[28px] shadow-lg outline-none text-[#4B4398] placeholder-[#000000] font-merriweather"
    />
  </div>
));

const MembersScreen = memo(() => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
      How many members you are inviting?
    </h2>
    <div className="flex flex-col space-y-3 text-[#4B4398] text-base md:text-lg font-merriweather">
      {[
        "10 - 50 person",
        "51 - 100 person",
        "101 - 200 person",
        "201 - 500 person",
        "501 - 1000 person",
        "1001 - 5000 person",
        "5001 - 10000 person",
        "10001 - 50000 person",
        "50000+ person",
      ].map((option, idx) => (
        <label key={idx} className="flex items-center space-x-3">
          <input type="radio" name="members" value={option} className="text-[#4B4398] focus:ring-[#4B4398]" />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </div>
));

const BudgetScreen = memo(({ budgetMin, budgetMax, setBudgetMin, setBudgetMax }) => {
  const handlePointerDragStart = useCallback((e, pointerIndex) => {
    e.preventDefault();
    const slider = e.currentTarget.closest(".slider-container");
    if (!slider) return;

    const sliderRect = slider.getBoundingClientRect();
    const onMouseMove = (moveEvent) => {
      const x = moveEvent.clientX - sliderRect.left;
      const percent = Math.min(Math.max(x / sliderRect.width, 0), 1);
      const index = Math.round(percent * 29);

      if (pointerIndex === 0) {
        if (index < budgetMax) setBudgetMin(index);
      } else {
        if (index > budgetMin) setBudgetMax(index);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [budgetMin, budgetMax]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
        What budget range would be comfortable for you?
      </h2>
      <div className="w-full max-w-[1100px] px-4 relative slider-container">
        <div className="relative w-full h-40 mt-4">
          <div className="absolute bottom-6 left-0 right-0 flex justify-between items-end">
            {Array.from({ length: 30 }, (_, i) => {
              const peak = 15;
              const diff = Math.abs(i - peak);
              const height = 30 + Math.max(0, 10 - diff) * 5;
              const isActive = i >= budgetMin && i <= budgetMax;
              return (
                <div
                  key={i}
                  className={`w-2 mx-[1px] rounded-t bg-[#4B4398] ${isActive ? "opacity-100" : "opacity-20"}`}
                  style={{ height: `${height}px` }}
                />
              );
            })}
          </div>

          <div className="absolute bottom-6 left-0 right-0 h-1 bg-gray-300 rounded-full" />
          <div
            className="absolute bottom-6 h-1 bg-[#4B4398] rounded-full"
            style={{
              left: `${(budgetMin / 29) * 100}%`,
              width: `${((budgetMax - budgetMin) / 29) * 100}%`,
            }}
          />

          {[budgetMin, budgetMax].map((pos, index) => (
            <div
              key={index}
              className="absolute bottom-[18px] w-4 h-4 bg-white border-2 border-[#4B4398] rounded-full cursor-pointer z-10"
              style={{ left: `calc(${(pos / 29) * 100}% - 8px)` }}
              onMouseDown={(e) => handlePointerDragStart(e, index)}
            />
          ))}

          <div className="absolute bottom-1 text-[#4B4398] text-sm font-medium flex justify-between w-full">
            <span style={{ marginLeft: `${(budgetMin / 29) * 100}%` }}>
              ₹{(37500 + 2500 * budgetMin).toLocaleString()}
            </span>
            <span style={{ marginRight: `${100 - (budgetMax / 29) * 100}%` }}>
              ₹{(37500 + 5000 * budgetMax).toLocaleString()}
            </span>
          </div>

          <div className="absolute bottom-[-12px] w-full flex justify-between text-sm text-[#4B4398]">
            <span>₹37,500 – ₹75,000</span>
            <span>₹150,000 – ₹175,000</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const DescriptionScreen = memo(() => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-[#4B4398] font-merriweather text-center mb-[96px]">
      What are the context and goals of your project?
    </h2>
    <div className="w-full max-w-[560px]">
      <textarea
        placeholder="Example of a good description:"
        className="w-full h-40 border border-[#4B4398] rounded-[28px] px-4 py-3 text-gray-700 placeholder:text-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4B4398] resize-none"
      />
    </div>
  </div>
));

const ProgressBar = memo(({ screenIndex, totalScreens }) => (
  <div className="w-full h-2 mt-[100px] bg-[#E3DFFC]">
    <div
      className="h-full bg-[#4B4398] transition-all duration-300"
      style={{ width: `${((screenIndex + 1) / totalScreens) * 100}%` }}
    ></div>
  </div>
));

const NavigationButtons = memo(({ screenIndex, totalScreens, prevScreen, nextScreen }) => (
  <div className="absolute bottom-0 left-0 right-0 px-4 py-6 flex justify-between items-center">
    {screenIndex > 0 ? (
      <button
        onClick={prevScreen}
        className="px-6 py-2 bg-[#4B439838] text-black rounded-[12px] shadow flex items-center gap-2 font-merriweather"
      >
        <img src={right} alt="Previous Button Icon" className="w-4 h-4 rotate-180" />
        Previous
      </button>
    ) : (
      <div />
    )}
    <div className="flex items-center gap-4">
      <button
        onClick={nextScreen}
        className={`px-6 py-2 rounded-[12px] shadow flex items-center gap-2 font-merriweather ${screenIndex === totalScreens - 1 ? "bg-[#4B439838] text-black" : "bg-[#4B439838] text-black"
          }`}
      >
        {screenIndex === totalScreens - 1 ? "Done" : "Next"}
        <span className="flex items-center justify-center">
          <img src={right} alt="Next Button Icon" className="w-4 h-4" />
        </span>
      </button>
    </div>
  </div>
));

const SponsorPage = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Event");
  const [selectedSkills, setSelectedSkills] = useState(["Sponsoring"]);
  const [selectedLocations, setSelectedLocations] = useState(["Delhi"]);
  const [budgetMin, setBudgetMin] = useState(6);
  const [budgetMax, setBudgetMax] = useState(18);
  const [searchValue, setSearchValue] = useState("");
  const [tagInputValue, setTagInputValue] = useState("");
  const [skillInputValue, setSkillInputValue] = useState("");

  const totalScreens = 7;

  const nextScreen = useCallback(() => {
    if (screenIndex < totalScreens - 1) {
      setScreenIndex((prev) => prev + 1);
    }
  }, [screenIndex]);

  const prevScreen = useCallback(() => {
    if (screenIndex > 0) {
      setScreenIndex((prev) => prev - 1);
    }
  }, [screenIndex]);

  const renderScreen = useCallback(() => {
    switch (screenIndex) {
      case 0:
        return (
          <ServiceScreen
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            serviceOpen={serviceOpen}
            setServiceOpen={setServiceOpen}
          />
        );
      case 1:
        return (
          <SkillsScreen
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            skillInputValue={skillInputValue}
            setSkillInputValue={setSkillInputValue}
          />
        );
      case 2:
        return (
          <LocationsScreen
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            tagInputValue={tagInputValue}
            setTagInputValue={setTagInputValue}
          />
        );
      case 3:
        return <CompanyNameScreen />;
      case 4:
        return <MembersScreen />;
      case 5:
        return (
          <BudgetScreen
            budgetMin={budgetMin}
            budgetMax={budgetMax}
            setBudgetMin={setBudgetMin}
            setBudgetMax={setBudgetMax}
          />
        );
      case 6:
        return <DescriptionScreen />;
      default:
        return null;
    }
  }, [screenIndex, selectedService, serviceOpen, selectedSkills, skillInputValue,
    selectedLocations, searchValue, tagInputValue, budgetMin, budgetMax]);

  return (
    <div>
      <NavBar />
      <ProgressBar screenIndex={screenIndex} totalScreens={totalScreens} />
      <div className="flex flex-col justify-between min-h-[80vh] px-4 py-8 relative">
        <div className="flex-1 flex items-center justify-center">
          {renderScreen()}
        </div>
        <NavigationButtons
          screenIndex={screenIndex}
          totalScreens={totalScreens}
          prevScreen={prevScreen}
          nextScreen={nextScreen}
        />
      </div>
    </div>
  );
};

export default SponsorPage; 