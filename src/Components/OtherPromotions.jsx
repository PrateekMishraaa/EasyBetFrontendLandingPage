// components/OtherPromotions.jsx
import React from 'react';

const OtherPromotions = () => {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 border border-gray-800">
        <div className="text-2xl font-bold text-white">10%</div>
        <p className="text-white text-sm font-semibold">GAME SHOW CASHBACK!</p>
        <span className="text-gray-400 text-xs">Evolution</span>
        <span className="ml-2 text-[#00E5FF] text-xs">NEW</span>
      </div>
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-4 border border-gray-800">
        <div className="text-2xl font-bold text-white">10%</div>
        <p className="text-white text-sm font-semibold">SLOTS CASHBACK!</p>
        <span className="text-gray-400 text-xs">Evolution</span>
        <span className="ml-2 text-[#00E5FF] text-xs">NEW</span>
      </div>
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-4 border border-gray-800">
        <p className="text-white text-sm font-semibold">Aviator WELCOME BONUS!</p>
        <span className="text-gray-400 text-xs">Evolution</span>
        <span className="ml-2 text-[#00E5FF] text-xs">NEW</span>
      </div>
    </div>
  );
};

export default OtherPromotions;