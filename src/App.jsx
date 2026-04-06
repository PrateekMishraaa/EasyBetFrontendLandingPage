// App.js - Main Component with section refs
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCategories from './components/GameCategories';
import HotSlots from './components/HotSlots';
import CrashGames from './components/CrashGames';
import NewGames from './components/NewGames';
import PopularGames from './components/PopularGames';
import SportsPromotions from './components/SportsPromotions';
import GameShows from './components/GameShows';
import OtherPromotions from './components/OtherPromotions';
import TableGames from './components/TableGames';
import LuckyNumbers from './components/LuckyNumbers';
import EasyGuide from './components/EasyGuide';
import Playbook from './components/Playbook';
import Footer from './components/Footer';

function App() {
  // Create refs for each section
  const hotSlotsRef = useRef(null);
  const crashGamesRef = useRef(null);
  const newGamesRef = useRef(null);
  const popularGamesRef = useRef(null);
  const sportsPromosRef = useRef(null);
  const gameShowsRef = useRef(null);
  const otherPromosRef = useRef(null);
  const tableGamesRef = useRef(null);
  const luckyNumbersRef = useRef(null);
  const easyGuideRef = useRef(null);
  const playbookRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const yOffset = -80; // Account for fixed navbar
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E1A]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <GameCategories 
            scrollToSection={scrollToSection}
            hotSlotsRef={hotSlotsRef}
            crashGamesRef={crashGamesRef}
            newGamesRef={newGamesRef}
            popularGamesRef={popularGamesRef}
            sportsPromosRef={sportsPromosRef}
            gameShowsRef={gameShowsRef}
            otherPromosRef={otherPromosRef}
            tableGamesRef={tableGamesRef}
            luckyNumbersRef={luckyNumbersRef}
            easyGuideRef={easyGuideRef}
            playbookRef={playbookRef}
          />
          
          <div ref={hotSlotsRef}><HotSlots /></div>
          <div ref={crashGamesRef}><CrashGames /></div>
          <div ref={newGamesRef}><NewGames /></div>
          <div ref={popularGamesRef}><PopularGames /></div>
          <div ref={sportsPromosRef}><SportsPromotions /></div>
          <div ref={gameShowsRef}><GameShows /></div>
          <div ref={otherPromosRef}><OtherPromotions /></div>
          <div ref={tableGamesRef}><TableGames /></div>
          <div ref={luckyNumbersRef}><LuckyNumbers /></div>
          <div ref={easyGuideRef}><EasyGuide /></div>
          <div ref={playbookRef}><Playbook /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;