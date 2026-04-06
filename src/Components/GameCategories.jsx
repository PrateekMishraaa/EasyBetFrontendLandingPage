// components/GameCategories.jsx - Updated with click handlers
import React from 'react';

const GameCategories = ({ 
  scrollToSection, 
  hotSlotsRef, 
  crashGamesRef, 
  newGamesRef, 
  popularGamesRef, 
  sportsPromosRef, 
  gameShowsRef, 
  otherPromosRef, 
  tableGamesRef, 
  luckyNumbersRef, 
  easyGuideRef, 
  playbookRef 
}) => {
  const categories = [
    { name: 'Hot Slots', ref: sportsPromosRef },
    { name: 'Crash Games', ref: crashGamesRef },
    { name: 'Popular Lotto', ref: hotSlotsRef },
    { name: 'New Games', ref: tableGamesRef },
    { name: 'Popular Games', ref: luckyNumbersRef },
    { name: 'Sports Promos', ref: sportsPromosRef },
    { name: 'Bet On Sports', ref: newGamesRef },
    { name: 'Game Shows', ref: hotSlotsRef }
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-between items-center border-b border-gray-800 pb-4 mb-6 overflow-x-auto">
      {categories.map((cat, idx) => (
        <button 
          key={idx} 
          onClick={() => cat.ref && scrollToSection(cat.ref)}
          className="text-gray-400 hover:text-[#00E5FF] text-sm font-medium whitespace-nowrap transition cursor-pointer"
        >
          {cat.name}
        </button>
      ))}
      <button 
        onClick={() => scrollToSection(hotSlotsRef)}
        className="bg-[#00E5FF]/10 text-[#00E5FF] px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-[#00E5FF]/20 transition"
      >
        SKYPILOT by Aerock's
      </button>
    </div>
  );
};

export default GameCategories;