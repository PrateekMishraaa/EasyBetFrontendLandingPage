// components/PopularGames.jsx - With individual popular games and images
import React, { useState } from 'react';
import PopOne from "../assets/popular1.webp";
import PopTwo from "../assets/popular2.webp";
import PopThree from "../assets/popular3.webp";
import PopFour from "../assets/popular4.webp";
import PopFive from "../assets/popular5.webp";


const PopularGames = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const popularGames = [
    { name: 'Gates of Olympus', category: 'SLOT', img: PopOne, plays: '2.5K' },
    { name: 'Sweet Bonanza', category: 'SLOT', img: PopTwo, plays: '1.8K' },
    { name: 'The Dog House', category: 'SLOT', img: PopThree, plays: '1.2K' },
    { name: 'Big Bass Bonanza', category: 'FISHING', img: PopFour, plays: '3.1K' },
    { name: 'Wolf Gold', category: 'SLOT', img: PopFive, plays: '2.0K' },

  ];

  const handleGameClick = (gameName) => {
    console.log(`Playing popular game: ${gameName}`);
  };

  return (
    <div className="mb-8" id="popular-games">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">⭐ Popular Games</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {popularGames.map((game, idx) => (
          <div 
            key={idx} 
            onClick={() => handleGameClick(game.name)}
            className="bg-gray-900/50 rounded-xl p-3 border border-gray-800 hover:border-[#00E5FF]/50 transition cursor-pointer hover:scale-105 transform duration-200"
          >
            {/* Game Image */}
            <div 
              className="relative rounded-lg mb-2 overflow-hidden bg-gradient-to-br from-yellow-600 to-orange-600 h-28"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={game.img} 
                alt={game.name} 
                className="w-full h-full object-cover transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Hot Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                🔥 HOT
              </div>
              
              {/* Play Count */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur text-white text-[10px] px-1.5 py-0.5 rounded">
                {game.plays} plays
              </div>
              
              {/* Hover Overlay */}
              {hoveredIndex === idx && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                  <span className="text-white text-sm font-bold text-center px-2">
                    {game.name}
                  </span>
                </div>
              )}
            </div>
            
            {/* Game Info */}
            <p className="text-white text-xs font-medium truncate text-center">{game.name}</p>
            <div className="text-center mt-1">
              <span className="text-yellow-500 text-[10px] inline-block px-2 py-0.5 bg-yellow-500/10 rounded-full">
                ★ {game.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;