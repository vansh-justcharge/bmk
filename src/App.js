import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SponsorButton from './components/SponsorButton';
import HomePage from './sections/HomePage';
import About from './sections/About';
import Sponsership from './sections/Sponsership';
import AboutMyKitty from './sections/AboutMyKitty';
import TestimonialsSection from './sections/TestimonialsSection';
import VideoSection from './sections/VideoSection';
import FaqAccordion from './sections/FaqAccordion';
import Footer from './sections/Footer';
import SponsorPage from './pages/Sponsor/SponsorPage'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <SponsorButton />
              <HomePage></HomePage>
              <About />
              <Sponsership />
              <AboutMyKitty />
              <TestimonialsSection />
              <VideoSection />
              <FaqAccordion />
              <Footer />
            </>
          } />
          <Route path="/sponsor" element={<SponsorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
