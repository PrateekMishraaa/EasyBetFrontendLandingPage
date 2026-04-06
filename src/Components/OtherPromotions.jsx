// components/OtherPromotions.jsx
import React from 'react';
import Other1 from "../assets/other1.webp"
import Other2 from "../assets/other2.webp"
import Other3 from "../assets/other3.webp"

const OtherPromotions = () => {
  const promotions = [
    {
      title: "GAME SHOW CASHBACK!",
      percentage: "10%",
      provider: "Evolution",
      isNew: true,
      gradient: "from-green-900/30 to-emerald-900/30",
      icon: "🎮",
      image: Other1,
      description: "Get 10% cashback on all Game Show losses"
    },
    {
      title: "SLOTS CASHBACK!",
      percentage: "10%",
      provider: "Evolution",
      isNew: true,
      gradient: "from-purple-900/30 to-pink-900/30",
      icon: "🎰",
      image: Other2,
      description: "Weekly cashback on slot games"
    },
    {
      title: "SPORTS WELCOME BONUS!",
      percentage: "100%",
      provider: "Sportsbook",
      isNew: true,
      gradient: "from-blue-900/30 to-cyan-900/30",
      icon: "⚽",
      image: Other3,
      description: "100% match up to $100 on first deposit"
    },
    {
      title: "AVIATOR WELCOME BONUS!",
      percentage: "200%",
      provider: "Spribe",
      isNew: false,
      gradient: "from-yellow-900/30 to-orange-900/30",
      icon: "✈️",
      image: Other1,
      description: "200% bonus on first Aviator deposit"
    },
    {
      title: "LIVE CASINO CASHBACK!",
      percentage: "15%",
      provider: "Ezugi",
      isNew: true,
      gradient: "from-red-900/30 to-rose-900/30",
      icon: "🎲",
      image: Other2,
      description: "15% daily cashback on live casino"
    },
    {
      title: "WEEKLY RELOAD BONUS!",
      percentage: "50%",
      provider: "All Games",
      isNew: false,
      gradient: "from-indigo-900/30 to-violet-900/30",
      icon: "💰",
      image: Other3,
      description: "Reload bonus every Wednesday"
    }
  ];

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🎁 Other Promotions</h2>
        <button className="text-[#00E5FF] text-sm hover:underline transition">
          View All Promotions →
        </button>
      </div>

      {/* Promotions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {promotions.map((promo, idx) => (
          <div 
            key={idx}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer hover:scale-105 transform duration-200 group"
          >
            {/* Image Section */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={promo.image} 
                alt={promo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Percentage Badge */}
              <div className="absolute top-3 right-3">
                <div className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                  {promo.percentage}
                </div>
              </div>
              
              {/* NEW Badge */}
              {promo.isNew && (
                <div className="absolute top-3 left-3">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    NEW
                  </span>
                </div>
              )}
            </div>
            
            {/* Content Section */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xl">{promo.icon}</div>
                <p className="text-white text-sm font-bold group-hover:text-[#00E5FF] transition-colors">
                  {promo.title}
                </p>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-xs mb-3">
                {promo.description}
              </p>
              
              {/* Provider */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 text-[10px]">Provider: {promo.provider}</span>
                <span className="text-green-500 text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Available
                </span>
              </div>

              {/* Claim Button */}
              <button className="w-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold text-xs py-2 rounded-lg hover:opacity-90 transition-all duration-300">
                Claim Bonus →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherPromotions;