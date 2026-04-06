// components/GameShows.jsx - Clickable game shows
import React from 'react';

const GameShows = () => {
  const shows = ['REDDON', 'MONOPOLY', 'RACETRACK', 'MARBLE', 'EVOLUTION', 'FISHING', 'LICHFINIC'];

  const handleShowClick = (showName) => {
    console.log(`Launching game show: ${showName}`);
    // Navigate to game show
  };

  return (
    <div className="mb-8" id="game-shows">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🎮 Game Shows</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {shows.map((show, idx) => (
          <div 
            key={idx} 
            onClick={() => handleShowClick(show)}
            className="bg-gray-900/50 rounded-xl p-3 text-center border border-gray-800 hover:border-[#00E5FF]/50 transition cursor-pointer hover:scale-105 transform duration-200"
          >
            <div className="text-white text-xs font-medium">{show}</div>
            <span className="text-[#00E5FF] text-[10px]">NEW</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameShows;