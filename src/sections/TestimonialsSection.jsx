import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../assets/images/lady_image.png';
import star from '../assets/images/star_image.png';
import right_image from '../assets/icons/right_icon.png';
import comment from '../assets/images/comments_image.png';

const HeartO = () => (
  <span className="inline-block align-middle" style={{ height: '0.9em' }}>
    <svg width="24" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Highlight 14" d="M3.339 9.17041C6.49265 4.8769 12.323 11.574 13.5472 11.8851C14.7715 12.1961 12.8752 2.03657 19.1995 2.64251C25.5239 3.24845 18.4529 20.8025 17.1313 21.139C15.4792 21.5597 0.185344 13.4639 3.339 9.17041Z" stroke="#4B4398" strokeWidth="4.44023" strokeLinecap="round"/>
    </svg>
  </span>
);

const testimonials = [
  {
    name: 'Millon Zahino',
    title: 'Manager',
    image: image,
    description: 'At our recent kitty party, we had a fantastic time sharing laughs and stories. Everyone brought their unique flair, making the gathering truly special.',
  },
  {
    name: 'Millon Zahino 2',
    title: 'Manager',
    image: image,
    description: 'Another testimonial: We had a wonderful experience at the event. Everyone enjoyed themselves and made new friends.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants for sliding in/out
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col items-center relative">
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
          bottom-[2%]
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
      {/* Heading */}
      <div className="pb-4 px-6 mt-6 text-center font-merriweather">
        <h1 className="text-3xl sm:text-6xl md:text-4xl text-[#4B4398] leading-[150%] font-bold italic">
          Real St<HeartO />ries, Real Sparkle
        </h1>
      </div>

      {/* Testimonial Card */}
      <div className="relative px-8 py-10 rounded-xl max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between overflow-visible min-h-[400px] mx-auto">
        {/* Left side: Name, title, stars */}
        <div className="ml-[140px] md:ml-[200px] w-full md:w-1/2 flex flex-col justify-center font-merriweather">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-[#4B4398] ml-3">{testimonials[currentIndex].name}</h2>
              <p className="text-[#4B4398] text-sm mt-1 ml-3">{testimonials[currentIndex].title}</p>
              <div className="relative">
                <img src={comment} alt="comment" className="w-[250px] h-[200px] absolute bottom-[-75px] left-[-8%]" />
                <div className="flex ml-5 mt-16 gap-1">
                  {[...Array(5)].map((_, index) => (
                    <img key={index} src={star} alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image absolutely placed to look like it pops out */}
        <div className="absolute top-[-5%] left-[35%] lg:left-[calc(50%-160px)] z-10">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.3 }}
              className="relative w-[318px] h-[340px]"
            >
              <img
                src={testimonials[currentIndex].image}
                alt="testimonial"
                className="relative z-10 w-full h-full rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side: Quote and navigation buttons */}
        <div className="w-full md:w-1/2 pl-20 flex flex-col justify-center text-center md:text-left font-merriweather text-[25px] mt-6 md:mt-0 italic">
          <AnimatePresence custom={direction} mode="wait">
            <motion.p
              key={`desc-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.3 }}
              className="text-[#4B4398] text-lg font-semibold leading-relaxed"
            >
              {testimonials[currentIndex].description}
            </motion.p>
          </AnimatePresence>

          <div className="flex justify-center md:justify-start mt-6 gap-4">
            {/* Hide left arrow for first testimonial */}
            {currentIndex !== 0 && (
              <button onClick={goToPrev} aria-label="Back" className="transform rotate-180">
                <img src={right_image} alt="back arrow" className="w-6 h-6" />
              </button>
            )}
            {/* Hide right arrow for last testimonial */}
            {currentIndex !== testimonials.length - 1 && (
              <button onClick={goToNext} aria-label="Next">
                <img src={right_image} alt="right arrow" className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
