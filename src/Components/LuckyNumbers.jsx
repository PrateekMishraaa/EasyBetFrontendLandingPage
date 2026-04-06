// components/LuckyNumbers.jsx - Clickable lottery items with images
import React from 'react';
import Lucky1 from "../assets/l1.webp"
import Lucky2 from "../assets/l2.webp"
import Lucky3 from "../assets/l3.webp"
import Lucky4 from "../assets/l4.webp"
import Lucky5 from "../assets/l5.webp"
import Lucky6 from "../assets/l6.webp"
import Lucky7 from "../assets/l7.webp"
import Lucky8 from "../assets/l8.webp"

const LuckyNumbers = () => {
  const lotteries = [
    { name: "UK 49's LUNCH TIME", image: Lucky1, isNew: false, jackpot: "£2.5M", drawTime: "12:49 PM" },
    { name: "UK 49's BRUNCH TIME", image: Lucky2, isNew: true, jackpot: "£3.1M", drawTime: "04:49 PM" },
    { name: "SA DAILY LOTTO", image: Lucky3, isNew: false, jackpot: "R1.2M", drawTime: "09:00 PM" },
    { name: "RUSSIA GOSLOTO", image: Lucky4, isNew: false, jackpot: "₽5.8M", drawTime: "10:30 AM" },
    { name: "GREEK POWER", image: Lucky5, isNew: true, jackpot: "€2.1M", drawTime: "08:00 PM" },
    { name: "US POWER", image: Lucky6, isNew: false, jackpot: "$40M", drawTime: "11:00 PM" },
    { name: "MEGA MILLIONS", image: Lucky7, isNew: true, jackpot: "$50M", drawTime: "10:00 PM" },
    { name: "EURO MILLIONS", image: Lucky8, isNew: false, jackpot: "€17M", drawTime: "09:00 PM" }
  ];

  const handleLotteryClick = (lotteryName) => {
    console.log(`Checking lottery: ${lotteryName}`);
    // Navigate to lottery page or open lottery modal
  };

  return (
    <div className="mb-8" id="lucky-numbers">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🍀 Lucky Numbers</h2>
        <button className="text-[#00E5FF] text-sm hover:underline transition">
          View All Lotteries →
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lotteries.map((lottery, idx) => (
          <div 
            key={idx} 
            onClick={() => handleLotteryClick(lottery.name)}
            className="group bg-gradient-to-b from-gray-900/80 to-gray-900/40 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer hover:scale-105 transform duration-200"
          >
            {/* Image Container */}
            <div className="relative h-36 overflow-hidden">
              <img 
                src={lottery.image} 
                alt={lottery.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Jackpot Amount */}
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[8px]">Jackpot</span>
                  <span className="text-[#00E5FF] text-xs font-bold">{lottery.jackpot}</span>
                </div>
              </div>
              
              {/* NEW Badge */}
              {lottery.isNew && (
                <div className="absolute top-2 right-2">
                  <span className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    NEW
                  </span>
                </div>
              )}
            </div>
            
            {/* Lottery Info */}
            <div className="p-3">
              <h3 className="text-white text-sm font-bold group-hover:text-[#00E5FF] transition-colors line-clamp-2">
                {lottery.name}
              </h3>
              
              {/* Draw Time */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-400 text-[10px]">{lottery.drawTime}</span>
                </div>
                <button className="bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-medium px-3 py-1 rounded-lg hover:bg-[#00E5FF]/20 transition">
                  Bet Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuckyNumbers;