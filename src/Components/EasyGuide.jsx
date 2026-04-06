// components/EasyGuide.jsx - Original style enhanced with images
import React from 'react';
import Easy1 from "../assets/easy1.webp"
import Easy2 from "../assets/easy2.webp"
import Easy3 from "../assets/easy3.webp"

const EasyGuide = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">📚 Easy Guide</h2>
        <button className="text-[#00E5FF] text-sm hover:underline transition">
          Help Center →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Easy Deposit */}
        <div className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer hover:scale-105 transform duration-200">
          <div className="relative h-32 overflow-hidden">
            <img 
              src={Easy1} 
              alt="Easy Deposit"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-2 left-3 text-2xl">💰</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-[#00E5FF] font-bold text-lg group-hover:text-white transition">
              EASY DEPOSIT
            </div>
            <p className="text-gray-400 text-sm mt-1">MORE WAYS TO TOP UP!</p>
            <button className="mt-3 text-[#00E5FF] text-xs hover:underline">
              Deposit Now →
            </button>
          </div>
        </div>

        {/* Easy Withdraw */}
        <div className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer hover:scale-105 transform duration-200">
          <div className="relative h-32 overflow-hidden">
            <img 
              src={Easy2} 
              alt="Easy Withdraw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-2 left-3 text-2xl">💸</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-[#00E5FF] font-bold text-lg group-hover:text-white transition">
              EASY WITHDRAW
            </div>
            <p className="text-gray-400 text-sm mt-1">MORE WAYS TO CASH OUT!</p>
            <button className="mt-3 text-[#00E5FF] text-xs hover:underline">
              Withdraw Now →
            </button>
          </div>
        </div>

        {/* Account Verification */}
        <div className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00E5FF]/50 transition-all cursor-pointer hover:scale-105 transform duration-200">
          <div className="relative h-32 overflow-hidden">
            <img 
              src={Easy3} 
              alt="Account Verification"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-2 left-3 text-2xl">✅</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-white font-bold text-sm group-hover:text-[#00E5FF] transition">
              How to verify your account
            </div>
            <button className="mt-2 text-[#00E5FF] text-xs hover:underline">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyGuide;