// App.js - Make sure onLoginClick is passed to RegisterForm
import React, { useRef, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import GameCategories from './Components/GameCategories';
import HotSlots from './Components/HotSlots';
import CrashGames from './Components/CrashGames';
import NewGames from './Components/NewGames';
import PopularGames from './Components/PopularGames';
import SportsPromotions from './Components/SportsPromotions';
import GameShows from './Components/GameShows';
import OtherPromotions from './Components/OtherPromotions';
import TableGames from './Components/TableGames';
import LuckyNumbers from './Components/LuckyNumbers';
import EasyGuide from './Components/EasyGuide';
import Playbook from './Components/Playbook';
import Footer from './Components/Footer';
import RegisterForm from './Pages/RegisterForm';
import LoginForm from './Pages/Login';

function App() {
  // State for modals
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Modal handlers
  const openRegisterForm = () => {
    console.log("Opening register form");
    setShowRegister(true);
  };

  const closeRegisterForm = () => {
    console.log("Closing register form");
    setShowRegister(false);
  };

  const openLoginForm = () => {
    console.log("Opening login form");
    setShowLogin(true);
  };

  const closeLoginForm = () => {
    console.log("Closing login form");
    setShowLogin(false);
  };

  // Switch from Register to Login
  const switchToLogin = () => {
    console.log("Switching from register to login");
    setShowRegister(false);
    setShowLogin(true);
  };

  // Switch from Login to Register
  const switchToRegister = () => {
    console.log("Switching from login to register");
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0E1A]">
      <Navbar onRegisterClick={openRegisterForm} onLoginClick={openLoginForm} />
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

      {/* Modals */}
      {showRegister && (
        <RegisterForm onClose={closeRegisterForm} onLoginClick={switchToLogin} />
      )}
      
      {showLogin && (
        <LoginForm onClose={closeLoginForm} onRegisterClick={switchToRegister} />
      )}
    </div>
  );
}

export default App;