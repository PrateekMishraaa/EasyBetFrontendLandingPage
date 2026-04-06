// components/TableGames.jsx - Clickable table games
import React from 'react';

const TableGames = () => {
  const games = [
    'LIGHT ROULETTE', 'FIRST PERSON', 'BLACKJACK', 'VIDEO POKER',
    'FIRST PERSON BACCARAT', 'Aviator Roulette', 'First Person Blackjack'
  ];

  const handleGameClick = (gameName) => {
    console.log(`Opening table game: ${gameName}`);
    // Navigate to table game
  };

  return (
    <div className="mb-8" id="table-games">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🎲 Table Games</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {games.map((game, idx) => (
          <div 
            key={idx} 
            onClick={() => handleGameClick(game)}
            className="bg-gray-900/50 rounded-lg p-3 text-center border border-gray-800 hover:border-[#00E5FF]/50 transition cursor-pointer hover:scale-105 transform duration-200"
          >
            <div className="h-12 bg-green-800/40 rounded-lg mb-2 flex items-center justify-center text-green-400 text-sm">🎯</div>
            <p className="text-white text-xs">{game}</p>
            <span className="text-[#00E5FF] text-[10px]">NEW</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableGames;