// components/Footer.jsx - Complete with all details from screenshot
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    'About Us', 'Verify My Account', 'Contact Us', 'Promotions', 'Become a Partner',
    'FAQs', 'Idea Suggestions', 'Privacy Policy', "T's & C's", 'PAIA Manual',
    'Play Data Free', 'Playbook', 'Easybet App', 'Responsible Gaming'
  ];

  return (
    <footer className="bg-[#060810] border-t border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#00E5FF] text-black p-3 rounded-full shadow-lg hover:bg-[#00B8D4] transition-all duration-300 z-50 group"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* App Download Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 pb-6 border-b border-gray-800">
          <span className="text-gray-400 text-sm font-medium w-full text-center mb-2">Download our app</span>
          <a href="#" className="flex items-center gap-2 bg-black/40 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#00E5FF] transition group">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-[#00E5FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17.36 3 13.16 5.81 10.3c1.38-1.45 3.55-2.36 5.62-2.38 1.48-.01 2.87.67 3.85 1.75.93-1.15 2.52-2.02 4.25-1.79.73.09 2.77.29 4.08 2.22-3.44 2.07-2.88 7.44.58 8.96-.92 2.28-2.18 4.55-3.78 4.44zM14.77 4.7c.77-1.04 1.79-1.89 3.03-2.04.17 1.24-.32 2.49-1.12 3.4-.77.87-1.83 1.5-2.95 1.53-.18-1.22.27-2.45 1.04-2.89z"/>
            </svg>
            <div>
              <p className="text-gray-400 text-[10px]">Download on the</p>
              <p className="text-white text-sm font-semibold">App Store</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center gap-2 bg-black/40 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#00E5FF] transition group">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-[#00E5FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.707l4.5 4.5-6.5-3.5 2-1zm-2-1l-2-1-6.5-3.5 4.5-4.5 4 3.5zM15.5 5.793l6.5 3.5-4.5 4.5-2-1z"/>
            </svg>
            <div>
              <p className="text-gray-400 text-[10px]">Download on</p>
              <p className="text-white text-sm font-semibold">Android</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center gap-2 bg-black/40 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#00E5FF] transition group">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-[#00E5FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            <div>
              <p className="text-gray-400 text-[10px]">EXPLORE IT ON</p>
              <p className="text-white text-sm font-semibold">AppGallery</p>
            </div>
          </a>
        </div>

        {/* Navigation Links - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 mb-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-gray-400 text-xs hover:text-[#00E5FF] transition duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* License and Regulatory Information */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-xs leading-relaxed">
            Easybet Group EC (Pty) Ltd (2024/745057/07) is licensed and regulated by the{' '}
            <span className="text-white">Eastern Cape Gambling Board</span> - 
            Bookmaker License Number: <span className="text-white">ECBM 029</span>, issued on 1 April 2025.
          </p>
          
          <p className="text-gray-400 text-xs mt-3">
            Easybet Supports Responsible Gambling. No persons under the age of 18 years are permitted to gamble. Winners know when to stop.
          </p>
          
          <p className="text-gray-400 text-xs mt-3">
            Call the <span className="text-white">National Responsible Gambling Programme</span> toll-free counselling line:{' '}
            <a href="tel:0800006008" className="text-[#00E5FF] hover:underline">0800 006 008</a> or{' '}
            <span className="text-white">WHATSAPP HELP</span> to{' '}
            <a href="https://wa.me/27676750710" className="text-[#00E5FF] hover:underline">076 675 0710</a>.
          </p>
          
          <p className="text-red-500 text-xs mt-3 font-semibold">
            ⚠️ Warning: Gambling involves risk. By gambling on this website, you run the risk that you may lose.
          </p>
          
          <p className="text-gray-500 text-[10px] mt-4">
            V2.3 EASYBET GROUP EC (PTY) LTD REG NO.2024/745057/07, LICENCE NUMBER: <span className="text-gray-400">ECBM 029</span>
          </p>
          
          <p className="text-gray-600 text-[10px] mt-4">
            © 2026 Easybet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;