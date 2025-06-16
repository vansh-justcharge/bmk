import React from 'react'
import CategoryGrid from './CategoryGrid'
import image from '../../assets/icons/pink_doodle.svg';


const HeartO = () => (
  <span className="inline-block align-middle" style={{ height: '0.8em' }}>
    <svg width="24" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Highlight 14" d="M3.339 9.17041C6.49265 4.8769 12.323 11.574 13.5472 11.8851C14.7715 12.1961 12.8752 2.03657 19.1995 2.64251C25.5239 3.24845 18.4529 20.8025 17.1313 21.139C15.4792 21.5597 0.185344 13.4639 3.339 9.17041Z" stroke="#4B4398" strokeWidth="4.44023" strokeLinecap="round"/>
    </svg>
    </span>
);

const BrandPage = () => {
  
  return (
    <div>
        {/* Heading  */}
        <div className="mt-28 px-6 text-center font-merriweather"> 
          <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#4B4398] italic font-bold">
            
            Your Brand,Center Stage <br />
            <div className="text-3xl md:text-[42px] text-center font-['Merriweather'] mt-[20px] mb-8 font-bold italic">
                Join as a <span className="text-[#ff3b87] relative">
                  <img
                    src={image}
                    alt="Heading Style"
                    className="w-5 h-5 absolute top-[-2%] left-[-5%]"
                  />
                  Spons<HeartO />r</span><span className='text-[#4B4398]'>!</span>
              </div>
            
          </h1>
        </div>
        {/* Image Container */}

        <CategoryGrid></CategoryGrid>


    </div>
  )
}

export default BrandPage
