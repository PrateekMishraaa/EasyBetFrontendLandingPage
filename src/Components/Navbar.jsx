// components/Navbar.jsx - Updated with both login and register handlers
import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode"

const Navbar = ({ onRegisterClick, onLoginClick }) => {
  const token = localStorage.getItem('token')
  const [userTokenData, setUserTokenData] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const decodeUserData = async () => {
      if (token) {
        try {
          const decoded = await jwtDecode(token)
          console.log('decoded token ', decoded)
          setUserTokenData(decoded)
        } catch (error) {
          console.error('Error decoding token:', error)
          localStorage.removeItem('token')
          setUserTokenData(null)
        }
      } else {
        setUserTokenData(null)
      }
    }
    decodeUserData()
  }, [token])

  // Get first letter of username
  const getFirstLetter = () => {
    if (userTokenData?.username) {
      return userTokenData.username.charAt(0).toUpperCase()
    }
    return ''
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token')
    setUserTokenData(null)
    window.location.reload() // Optional: reload to reset app state
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0B0E1A]/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">easy<span className="text-[#00E5FF]">bet</span></span>
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

          {/* Right side buttons - Conditional rendering based on login status */}
          <div className="flex items-center gap-3">
            {!userTokenData ? (
              // Show Login and Join buttons when NOT logged in
              <>
                <button 
                  onClick={onLoginClick}
                  className="hidden sm:block text-gray-300 hover:text-white text-sm"
                >
                  Login
                </button>
                <button 
                  onClick={onRegisterClick}
                  className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold px-5 py-1.5 rounded-lg text-sm hover:opacity-90 transition"
                >
                  Join
                </button>
              </>
            ) : (
              // Show user avatar and logout when logged in
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold flex items-center justify-center hover:opacity-90 transition">
                    {getFirstLetter()}
                  </button>
                  
                  {/* Dropdown menu on hover/click */}
                  <div className="absolute right-0 mt-2 w-48 bg-[#1A1F2E] rounded-lg shadow-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-3 border-b border-gray-700">
                      <p className="text-white text-sm font-medium">{userTokenData.username}</p>
                      <p className="text-gray-400 text-xs">{userTokenData.email}</p>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-400/10 transition rounded-b-lg"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
            
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
              
              {!userTokenData ? (
                // Mobile: Show Login and Join buttons when NOT logged in
                <>
                  <button 
                    onClick={onLoginClick}
                    className="text-gray-300 hover:text-[#00E5FF] text-sm py-1 text-left"
                  >
                    Login
                  </button>
                  <button 
                    onClick={onRegisterClick}
                    className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold px-5 py-2 rounded-lg text-sm mt-2"
                  >
                    Join Now
                  </button>
                </>
              ) : (
                // Mobile: Show user info and logout when logged in
                <div className="mt-2 pt-2 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold flex items-center justify-center text-lg">
                      {getFirstLetter()}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{userTokenData.username}</p>
                      <p className="text-gray-400 text-xs">{userTokenData.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg transition text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;