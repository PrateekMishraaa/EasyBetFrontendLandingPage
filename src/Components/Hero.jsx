// components/Hero.jsx - With Auto-sliding Carousel for 11 images
import React, { useState, useEffect } from 'react';

// Import your 11 images here
import Slide1 from "../assets/carousels/c1.webp";
import Slide2 from "../assets/carousels/c2.webp";
import Slide3 from "../assets/carousels/c3.webp";
import Slide4 from "../assets/carousels/c4.webp";
import Slide5 from "../assets/carousels/c5.webp";
import Slide6 from "../assets/carousels/c6.webp";
import Slide7 from "../assets/carousels/c7.webp";
import Slide8 from "../assets/carousels/c8.webp";
import Slide9 from "../assets/carousels/c9.webp";
import Slide10 from "../assets/carousels/c10.webp";
import Slide11 from "../assets/carousels/c11.webp";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 0, image: Slide1, title: "R200K SKYPILOT TOURNAMENT!", promo: "PROMOTIONS" },
    { id: 1, image: Slide2, title: "100% WELCOME BONUS!", promo: "SPORTS" },
    { id: 2, image: Slide3, title: "DAILY CASHBACK", promo: "CASINO" },
    { id: 3, image: Slide4, title: "FREE SPINS EVERY DAY", promo: "SLOTS" },
    { id: 4, image: Slide5, title: "MULTIBET BOOST", promo: "SPORTSBOOK" },
    { id: 5, image: Slide6, title: "WEEKLY TOURNAMENT", promo: "LIVE CASINO" },
    { id: 6, image: Slide7, title: "JACKPOT DROPS", promo: "PROMOTIONS" },
    { id: 7, image: Slide8, title: "REFER A FRIEND", promo: "BONUS" },
    { id: 8, image: Slide9, title: "VIP LOYALTY REWARDS", promo: "EXCLUSIVE" },
    { id: 9, image: Slide10, title: "SPORTS CASHBACK", promo: "PROMOTIONS" },
    { id: 10, image: Slide11, title: "BIG WIN CONTEST", promo: "SPECIAL" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000); // Change slide every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata'
    }).replace(',', '') + ' GMT+5.5';
  };

  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  // Update date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl mx-4 sm:mx-6 lg:mx-8 mt-4 overflow-hidden group">
      {/* Carousel Container */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="relative min-w-full h-full flex-shrink-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://picsum.photos/1200/400?random=${idx}`;
                }}
              />
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="relative p-6 sm:p-8 lg:p-10 max-w-2xl">
                  <span className="text-[#00E5FF] text-sm font-semibold tracking-wide bg-black/40 px-3 py-1 rounded-full inline-block">
                    {slide.promo}
                  </span>
                  <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                    {slide.title}
                  </h1>
                  <button className="mt-5 bg-[#00E5FF] text-black font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-[#00B8D4] transition transform hover:scale-105 duration-200">
                    CLAIM OFFER →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx 
                  ? 'w-8 h-2 bg-[#00E5FF]' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs text-white">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative bg-black/40 backdrop-blur-sm px-4 py-2 flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-3 flex-wrap">
          <span className="text-gray-300 text-xs">PlayDataFree</span>
          <span className="text-gray-300 text-xs">Statistics</span>
          <span className="text-gray-300 text-xs">Results</span>
          <span className="text-gray-300 text-xs">Terms&Conditions</span>
          <span className="text-gray-300 text-xs">FAQ'S</span>
          <span className="text-gray-300 text-xs">Contact Details</span>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-xs">Decimal</div>
          <div className="text-white font-mono text-xs">{dateTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;