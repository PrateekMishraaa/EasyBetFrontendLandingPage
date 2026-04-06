// components/TableGames.jsx - Card style version
import React from 'react';
import Table1 from "../assets/t1.jpg"
import Table2 from "../assets/t2.webp"
import Table3 from "../assets/t3.webp"
import Table4 from "../assets/t4.jpg"
import Table5 from "../assets/t5.webp"
import Table6 from "../assets/t6.webp"
import Table7 from "../assets/t7.webp"
import Table8 from "../assets/t8.webp"
import Table9 from "../assets/t9.webp"
import Table10 from "../assets/t10.png"
import Table11 from "../assets/t11.webp"
import Table12 from "../assets/t12.webp"

const TableGames = () => {
  const games = [
    { name: 'LIGHT ROULETTE', image: Table1, isNew: true, players: '1.2K', category: 'Roulette' },
    { name: 'FIRST PERSON', image: Table2, isNew: false, players: '856', category: 'Evolution' },
    { name: 'BLACKJACK', image: Table3, isNew: true, players: '2.1K', category: 'Blackjack' },
    { name: 'VIDEO POKER', image: Table4, isNew: false, players: '654', category: 'Poker' },
    { name: 'FIRST PERSON BACCARAT', image: Table5, isNew: true, players: '987', category: 'Baccarat' },
    { name: 'Aviator Roulette', image: Table6, isNew: false, players: '1.5K', category: 'Roulette' },
    { name: 'First Person Blackjack', image: Table7, isNew: true, players: '1.8K', category: 'Blackjack' },
    { name: 'ROULETTE', image: Table8, isNew: false, players: '2.3K', category: 'Roulette' },
    { name: 'BACCARAT', image: Table9, isNew: true, players: '1.1K', category: 'Baccarat' },
    { name: 'TEXAS HOLDEM', image: Table10, isNew: false, players: '743', category: 'Poker' },
    { name: 'SIC BO', image: Table11, isNew: true, players: '432', category: 'Dice' },
    { name: 'CRAPS', image: Table12, isNew: false, players: '567', category: 'Dice' }
  ];

  const handleGameClick = (gameName) => {
    console.log(`Opening table game: ${gameName}`);
    // Navigate to table game or open game modal
  };

  return (
    <div className="mb-8" id="table-games">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🎲 Table Games</h2>
        <button className="text-[#00E5FF] text-sm hover:underline transition">
          Browse All →
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game, idx) => (
          <div 
            key={idx} 
            onClick={() => handleGameClick(game.name)}
            className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer group"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full">
                  {game.category}
                </span>
              </div>
              
              {/* NEW Badge */}
              {game.isNew && (
                <div className="absolute top-2 right-2">
                  <span className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    NEW
                  </span>
                </div>
              )}
              
              {/* Live Indicator */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-white text-[10px]">{game.players} playing</span>
              </div>
            </div>
            
            {/* Game Info */}
            <div className="p-3 text-center">
              <h3 className="text-white text-sm font-bold group-hover:text-[#00E5FF] transition-colors line-clamp-1">
                {game.name}
              </h3>
              
              {/* Play Button */}
              <button className="mt-2 w-full bg-gradient-to-r from-[#00E5FF]/20 to-[#00B8D4]/20 text-[#00E5FF] text-xs font-medium py-1.5 rounded-lg hover:from-[#00E5FF]/30 hover:to-[#00B8D4]/30 transition">
                Play Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableGames;