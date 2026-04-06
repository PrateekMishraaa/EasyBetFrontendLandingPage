// components/LuckyNumbers.jsx - Clickable lottery items
import React from 'react';

const LuckyNumbers = () => {
  const numbers = [
    "UK 49's LUNCH TIME", "UK 49's BRUNCH TIME", "SA DAILY LOTTO",
    "RUSSIA GOSLOTO", "GREEK POWER", "US POWER"
  ];

  const handleLotteryClick = (lotteryName) => {
    console.log(`Checking lottery: ${lotteryName}`);
    // Navigate to lottery page
  };

  return (
    <div className="mb-8" id="lucky-numbers">
      <h2 className="text-white text-xl font-bold mb-4">🍀 Lucky Numbers</h2>
      <div className="flex flex-wrap gap-3">
        {numbers.map((num, idx) => (
          <span 
            key={idx} 
            onClick={() => handleLotteryClick(num)}
            className="bg-gray-800 px-4 py-2 rounded-full text-white text-sm cursor-pointer hover:bg-[#00E5FF]/20 hover:text-[#00E5FF] transition duration-200"
          >
            {num}
          </span>
        ))}
      </div>
      <div className="mt-2 text-gray-500 text-xs truncate">easybet.co.za/casino/ebcasinogames/providers/evolution/r5oifzndy3lkouv</div>
    </div>
  );
};

export default LuckyNumbers;