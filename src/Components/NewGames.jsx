// components/NewGames.jsx - Enhanced with loading states and fallbacks
import React, { useState } from 'react';
import NewOne from "../assets/new1.webp";
import NewTwo from "../assets/new2.jpg";
import NewThree from "../assets/new3.jpg";
import NewFour from "../assets/new4.png";
import NewFive from "../assets/new5.png";
import NewSix from "../assets/new6.png";
import NewSeven from "../assets/new7.png";
import NewEight from "../assets/new8.jpg";
import NewNine from "../assets/new9.jpg";
import NewTen from "../assets/new10.png";
import NewEleven from "../assets/new11.png";
import NewTwelve from "../assets/new12.png";

const NewGames = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const games = [
    { name: 'DIAMOND OLYMPUS WINS', tag: 'NEW', img: NewOne },
    { name: 'PRAGMATIC PLAY', tag: 'NEW', img: NewTwo },
    { name: 'DUCK HUNTERS', tag: 'NEW', img: NewThree },
    { name: 'SUPER SCATTER', tag: 'NEW', img: NewFour },
    { name: 'FAT PANDA', tag: 'NEW', img: NewFive },
    { name: 'HAMMER TORM', tag: 'NEW', img: NewSix },
    { name: 'HARDES', tag: 'NEW', img: NewSeven },
    { name: 'Jewels Hold&Spin', tag: 'NEW', img: NewEight },
    { name: 'TICKET TO IMMORTALITY', tag: 'NEW', img: NewNine },
    { name: 'RICHES RETURNING', tag: 'NEW', img: NewTen },
    { name: 'BIG BEAS', tag: 'NEW', img: NewEleven },
    { name: 'NIGHT&DAY', tag: 'NEW', img: NewTwelve }
  ];

  const handleGameClick = (gameName) => {
    console.log(`Opening new game: ${gameName}`);
    // Navigate to game page
  };

  const handleImageError = (idx) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <div className="mb-8" id="new-games">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🆕 New Games</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {games.map((game, idx) => (
          <div 
            key={idx} 
            onClick={() => handleGameClick(game.name)}
            className="bg-gray-900/50 rounded-xl p-3 border border-gray-800 hover:border-[#00E5FF]/50 transition cursor-pointer hover:scale-105 transform duration-200"
          >
            {/* Game Image with Hover Effect */}
            <div 
              className="relative rounded-lg mb-2 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 h-28"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {!imgErrors[idx] ? (
                <img 
                  src={game.img} 
                  alt={game.name} 
                  className="w-full h-full object-cover transition-transform duration-300"
                  onError={() => handleImageError(idx)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">🎮</span>
                </div>
              )}
              
              {/* Overlay that shows name on hover */}
              {hoveredIndex === idx && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                  <span className="text-white text-sm font-bold text-center px-2">
                    {game.name}
                  </span>
                </div>
              )}
            </div>
            
            {/* Game name and tag */}
            <p className="text-white text-xs font-medium truncate text-center mb-1">{game.name}</p>
            <div className="text-center">
              <span className="text-[#00E5FF] text-[10px] inline-block px-2 py-0.5 bg-[#00E5FF]/10 rounded-full">
                {game.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewGames;