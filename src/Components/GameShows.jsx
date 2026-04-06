// components/GameShows.jsx - Alternative with thumbnails
import React from 'react';
import Game1 from "../assets/g1.webp"
import Game2 from "../assets/g2.webp"
import Game3 from "../assets/g3.webp"
import Game4 from "../assets/g4.webp"
import Game5 from "../assets/g5.webp"
import Game6 from "../assets/g6.webp"
import Game7 from "../assets/g7.webp"
import Game8 from "../assets/g8.webp"
import Game9 from "../assets/g9.webp"
import Game10 from "../assets/g10.png"
import Game11 from "../assets/g11.webp"
import Game12 from "../assets/g12.webp"

const GameShows = () => {
  const shows = [
    { name: 'REDDON', image: Game1, isNew: true, players: '2.3K' },
    { name: 'MONOPOLY', image: Game2, isNew: false, players: '1.8K' },
    { name: 'RACETRACK', image: Game3, isNew: true, players: '3.1K' },
    { name: 'MARBLE', image: Game4, isNew: false, players: '956' },
    { name: 'EVOLUTION', image: Game5, isNew: true, players: '4.2K' },
    { name: 'FISHING', image: Game6, isNew: false, players: '2.7K' },
    { name: 'LICHFINIC', image: Game7, isNew: true, players: '1.2K' },
    { name: 'DRAGON TIGER', image: Game8, isNew: false, players: '3.4K' },
    { name: 'ROULETTE', image: Game9, isNew: true, players: '5.1K' },
    { name: 'BLACKJACK', image: Game10, isNew: false, players: '2.9K' },
    { name: 'BACCARAT', image: Game11, isNew: true, players: '3.7K' },
    { name: 'SLOTS', image: Game12, isNew: false, players: '8.4K' }
  ];

  const handleShowClick = (showName) => {
    console.log(`Launching game show: ${showName}`);
    // Navigate to game show or open game modal
  };

  return (
    <div className="mb-8" id="game-shows">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🎮 Game Shows</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {shows.map((show, idx) => (
          <div 
            key={idx} 
            onClick={() => handleShowClick(show.name)}
            className="group relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-[#00E5FF]/10"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={show.image} 
                alt={show.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Live Players Count */}
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-white text-[10px]">{show.players}</span>
                </div>
              </div>
              
              {/* NEW Badge */}
              {show.isNew && (
                <div className="absolute top-2 right-2">
                  <span className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                    NEW
                  </span>
                </div>
              )}
            </div>
            
            {/* Game Info */}
            <div className="p-3 text-center">
              <h3 className="text-white text-sm font-bold group-hover:text-[#00E5FF] transition-colors">
                {show.name}
              </h3>
              <button className="mt-2 w-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-medium py-1 rounded-lg hover:bg-[#00E5FF]/20 transition">
                Play Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameShows;