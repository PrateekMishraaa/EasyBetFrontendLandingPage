// components/SportsPromotions.jsx - Simple version with 3 images
import React from 'react';
import SportOne from "../assets/sp1.webp";
import SportTwo from "../assets/sp2.webp";
import SportThree from "../assets/sp3.webp";

const SportsPromotions = () => {
  const promotions = [
    { image: SportOne, title: "EASYUP®", desc: "1-0 5:35 1UP 2UP 3UP", tag: "NEW" },
    { image: SportTwo, title: "1000% MULTIBET WIN BOOST!", desc: "Boost your winnings", tag: "HOT" },
    { image: SportThree, title: "COPY A BET WEEKLY BONUS!", desc: "Copy winning bets", tag: "LIMITED" }
  ];

  return (
    <div className="mb-8" id="sports-promotions">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🏆 Sports Promotions</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>

      {/* 3 Column Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {promotions.map((promo, idx) => (
          <div
            key={idx}
            onClick={() => console.log(`Promotion: ${promo.title}`)}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/400x200?text=Sports+${idx + 1}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#00E5FF] text-xs font-semibold">{promo.tag}</span>
                <h3 className="text-white font-bold text-sm mt-1">{promo.title}</h3>
                <p className="text-gray-300 text-xs">{promo.desc}</p>
              </div>
            </div>
         
          </div>
        ))}
      </div>

      {/* Sports Betting Links */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-4 border border-gray-800">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-3 text-sm">
            <span className="text-gray-400">BUNDESLIGA</span>
            <span className="text-gray-400">SERIEA</span>
            <span className="text-gray-400">RUGBY</span>
            <span className="text-gray-400">MMA</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SportsPromotions;