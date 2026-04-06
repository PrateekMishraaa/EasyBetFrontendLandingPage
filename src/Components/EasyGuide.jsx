// components/EasyGuide.jsx
import React from 'react';

const EasyGuide = () => {
  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-900/30 rounded-xl p-5 border border-gray-800">
      <div className="text-center">
        <div className="text-[#00E5FF] font-bold text-lg">💰 EASY DEPOSIT</div>
        <p className="text-gray-400 text-sm">MORE WAYS TO TOP UP!</p>
      </div>
      <div className="text-center">
        <div className="text-[#00E5FF] font-bold text-lg">💸 EASY WITHDRAW</div>
        <p className="text-gray-400 text-sm">MORE WAYS TO CASH OUT!</p>
      </div>
      <div className="text-center">
        <div className="text-white font-bold text-sm">How to verify your account</div>
        <button className="mt-2 text-[#00E5FF] text-xs">Learn more →</button>
      </div>
    </div>
  );
};

export default EasyGuide;