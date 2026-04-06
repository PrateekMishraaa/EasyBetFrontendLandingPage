// components/HotSlots.jsx - With image fallback
import React, { useState } from 'react';
import ImageOne from "../assets/h1.webp";
import ImageTwo from "../assets/h2.webp";
import ImageThree from "../assets/h3.png";
import ImageFour from "../assets/h4.webp";
import ImageFive from "../assets/h5.webp";
import ImageSix from "../assets/h6.png";
import ImageSeven from "../assets/h7.png";
import ImageEight from "../assets/h8.png";
import ImageNine from "../assets/h9.png";
import ImageTen from "../assets/h10.png";
import ImageEleven from "../assets/h11.webp";
import ImageTwelve from "../assets/h12.svg";

const HotSlots = () => {
  const slots = [
    { name: 'STARBURST', tag: 'NEW', link: '/game/starburst', img: ImageOne },
    { name: 'Sugar Rush', tag: 'NEW', link: '/game/sugar-rush', img: ImageTwo },
    { name: 'Super Buz', tag: 'NEW', link: '/game/super-buz', img: ImageThree },
    { name: 'Sweet Buzz', tag: 'NEW', link: '/game/sweet-buzz', img: ImageFour },
    { name: 'Fortune Olympus', tag: 'NEW', link: '/game/fortune-olympus', img: ImageFive },
    { name: 'Bingo Mania', tag: 'NEW', link: '/game/bingo-mania', img: ImageSix },
    { name: 'Lava Balls', tag: 'NEW', link: '/game/lava-balls', img: ImageSeven },
    { name: 'Gold', tag: 'NEW', link: '/game/gold', img: ImageEight },
    { name: 'Sugar Rush 1000', tag: 'NEW', link: '/game/sugar-rush-1000', img: ImageNine },
    { name: 'Lava Balls', tag: 'NEW', link: '/game/lava-balls', img: ImageTen },
    { name: 'Gold', tag: 'NEW', link: '/game/gold', img: ImageEleven },
    { name: 'Sugar Rush 1000', tag: 'NEW', link: '/game/sugar-rush-1000', img: ImageTwelve }
  ];

  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (idx) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };

  const handleGameClick = (gameName) => {
    console.log(`Navigating to ${gameName}`);
  };

  return (
    <div className="mb-8" id="hot-slots">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">🔥 Hot Slots</h2>
        <button className="text-[#00E5FF] text-sm hover:underline">See all →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {slots.map((slot, idx) => (
          <div 
            key={idx} 
            onClick={() => handleGameClick(slot.name)}
            className="bg-gray-900/50 rounded-xl p-3 border border-gray-800 hover:border-[#00E5FF]/50 transition cursor-pointer hover:scale-105 transform duration-200"
          >
            {/* Game Image with Fallback */}
            <div className="rounded-lg mb-2 overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 h-28 flex items-center justify-center">
              {!imgErrors[idx] ? (
                <img 
                  src={slot.img} 
                  alt={slot.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={() => handleImageError(idx)}
                />
              ) : (
                <span className="text-white text-xs font-bold text-center px-2">
                  {slot.name}
                </span>
              )}
            </div>
            <p className="text-white text-sm font-medium truncate text-center">{slot.name}</p>
            <div className="text-center">
              <span className="text-[#00E5FF] text-xs inline-block mt-1 px-2 py-0.5 bg-[#00E5FF]/10 rounded-full">{slot.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSlots;