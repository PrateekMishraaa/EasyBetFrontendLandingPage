// components/Navbar.jsx
import React, { useState } from 'react';
import Logo from "../assets/logo.png"
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-700 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 h-8">
           <img src={Logo} alt='' className='h-8'/>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">SPORTS</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">AVIATOR</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">EASYSPINS</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">LIVEDEALER</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">LUCKYNUMBERS</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">HORSE RACING</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">BETGAMES</a>
            <a href="#" className="text-gray-300 hover:text-[#00E5FF] transition text-sm font-medium">SPIN&WIN</a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-gray-300 hover:text-white text-sm">Login</button>
            <button className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold px-5 py-1.5 rounded-lg text-sm hover:opacity-90 transition">
              Join
            </button>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">SPORTS</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">AVIATOR</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">EASYSPINS</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">LIVEDEALER</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">LUCKYNUMBERS</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">HORSE RACING</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">BETGAMES</a>
              <a href="#" className="text-gray-300 hover:text-[#00E5FF] text-sm">SPIN&WIN</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;