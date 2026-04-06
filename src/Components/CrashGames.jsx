// components/CrashGames.jsx - With CRASH badge on image
import React, { useState } from 'react';
import CrashOne from "../assets/crash1.webp";
import CrashTwo from "../assets/crash2.webp";
import CrashThree from "../assets/crash3.webp";
import CrashFour from "../assets/crash4.webp";
import CrashFive from "../assets/crash5.webp";
import CrashSix from "../assets/crash6.webp";

const CrashGames = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const games = [
    { name: 'SKYPE by Aerock', tag: 'NEW', path: '/crash/skype', img: CrashOne },
    { name: 'CRASH GAME Aviator', tag: 'NEW', path: '/crash/aviator', img: CrashTwo },
    { name: 'SKYPE by Aerock', tag: 'NEW', path: '/crash/skype', img: CrashThree },
    { name: 'CRASH GAME Aviator', tag: 'NEW', path: '/crash/aviator', img: CrashFour },
    { name: 'SKYPE by Aerock', tag: 'NEW', path: '/crash/skype', img: CrashFive },
    { name: 'CRASH GAME Aviator', tag: 'NEW', path: '/crash/aviator', img: CrashSix }
  ];

  const handleGameClick = (gameName) => {
    console.log(`Launching crash game: ${gameName}`);
  };

  return (
    <div className="mb-8" id="crash-games">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">💥 Crash Games</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {games.map((game, idx) => (
          <div 
            key={idx} 
            onClick={() => handleGameClick(game.name)}
            className="bg-gray-900/50 rounded-xl p-3 border border-gray-800 hover:border-[#00E5FF]/50 transition cursor-pointer hover:scale-105 transform duration-200"
          >
            {/* Game Image with CRASH Badge */}
            <div 
              className="relative rounded-lg mb-2 overflow-hidden h-28"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={game.img} 
                alt={game.name} 
                className="w-full h-full object-cover transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/200x150?text=${game.name.charAt(0)}`;
                }}
              />
              
              {/* CRASH Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                CRASH
              </div>
              
              {/* Overlay that shows name on hover */}
              {hoveredIndex === idx && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                  <span className="text-white text-sm font-bold text-center px-2">
                    {game.name}
                  </span>
                </div>
              )}
            </div>
            
            {/* Tag always visible below image */}
            <div className="text-center mt-1">
              <span className="text-[#00E5FF] text-xs inline-block px-2 py-0.5 bg-[#00E5FF]/10 rounded-full">
                {game.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrashGames;