import React from 'react';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import PoemSection from './components/PoemSection';
import MemoryGallery from './components/MemoryGallery';
import Timeline from './components/Timeline';
import SevenWonders from './components/SevenWonders';
import BirthdayWishes from './components/BirthdayWishes';
import SisterPromise from './components/SisterPromise';
import FinalCelebration from './components/FinalCelebration';

function App() {
  return (
    <div className="min-h-screen bg-pearl">
      {/* Background Effects */}
      <MusicToggle />
      
      {/* Main Content Sections */}
      <Hero />
      <PoemSection />
      <MemoryGallery />
      <Timeline />
      <SevenWonders />
      <BirthdayWishes />
      <SisterPromise />
      <FinalCelebration />
    </div>
  );
}

export default App;