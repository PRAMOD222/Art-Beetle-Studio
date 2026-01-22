"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { FaPaw } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "PAWFECT",
    bg: "bg-[#003366]", // Dark blue
    accent: "text-[#FFFF00]", // Yellow
    secondary: "bg-[#FFFF00]",
    tertiary: "bg-[#2E71DA]", // Lighter blue
  },
  {
    id: 2,
    title: "NATURE",
    bg: "bg-[#1a472a]", // Dark green
    accent: "text-[#90EE90]", // Light green
    secondary: "bg-[#90EE90]",
    tertiary: "bg-[#2d5a3f]",
  },
  {
    id: 3,
    title: "URBAN",
    bg: "bg-[#4a0e4e]", // Dark purple
    accent: "text-[#ff00ff]", // Magenta
    secondary: "bg-[#ff00ff]",
    tertiary: "bg-[#812285]",
  },
  {
    id: 4,
    title: "OCEAN",
    bg: "bg-[#006994]", // Ocean blue
    accent: "text-[#00ffff]", // Cyan
    secondary: "bg-[#00ffff]",
    tertiary: "bg-[#008dc9]",
  },
  {
    id: 5,
    title: "SUNSET",
    bg: "bg-[#cc5500]", // Burnt orange
    accent: "text-[#ffcc00]", // Gold
    secondary: "bg-[#ffcc00]",
    tertiary: "bg-[#ff8c00]",
  },
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Start in middle

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center overflow-hidden min-h-[800px] bg-black">
        {/* Title */}
      <div className="mb-16 relative">
        <h2 className="text-6xl text-white font-light tracking-tight">Graphics</h2>
        <div className="h-1 w-full bg-white mt-4"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center [perspective:1000px]">
        {cards.map((card, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          
          
          
          let x = "0%";
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;
          
          if (offset === 0) {
            x = "0%";
            scale = 1;
            zIndex = 20;
            opacity = 1;
          } else if (offset < 0) {
            // Left
            x = `${offset * 15 - 10}%`; // -25%, -40%...
            scale = 1 - absOffset * 0.15;
            zIndex = 20 - absOffset;
            opacity = 1 - absOffset * 0.3;
          } else {
             // Right
            x = `${offset * 15 + 10}%`;
            scale = 1 - absOffset * 0.15;
            zIndex = 20 - absOffset;
            opacity = 1 - absOffset * 0.3;
          }
          
          const isVisible = absOffset <= 2;

          return (
            <motion.div
              key={card.id}
              className={`absolute w-[800px] h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 ${!isVisible ? 'pointer-events-none' : 'cursor-pointer'}`}
              initial={false}
              animate={{
                x,
                scale,
                zIndex,
                opacity: isVisible ? 1 : 0,
                filter: offset === 0 ? "brightness(1)" : "brightness(0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`w-full h-full grid grid-cols-2 grid-rows-2 ${card.bg}`}>
                {/* Top Left: Logo */}
                <div className="relative border-r border-b border-white/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <FaPaw className={`text-6xl ${card.accent} mx-auto mb-4`} />
                    <h3 className={`text-4xl font-bold ${card.accent}`}>{card.title}</h3>
                  </div>
                </div>

                {/* Top Right: Bowls */}
                <div className="relative border-b border-white/20 flex items-center justify-center p-8">
                    <div className="relative">
                        {/* Mocking bowls with circles */}
                        <div className={`w-32 h-32 rounded-full ${card.tertiary} flex items-center justify-center shadow-lg relative z-10 -mr-8`}>
                            <span className={`text-xs font-bold ${card.accent} -rotate-12`}>{card.title}</span>
                        </div>
                        <div className={`w-32 h-32 rounded-full ${card.secondary} flex items-center justify-center shadow-lg absolute top-4 left-16`}>
                             <span className="text-xs font-bold text-black -rotate-12">{card.title}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Left: Bag */}
                <div className="relative border-r border-white/20 flex items-center justify-center p-8">
                     <div className={`w-32 h-40 ${card.secondary} rotate-[-10deg] shadow-xl flex items-center justify-center rounded-sm`}>
                         <div className="text-center">
                            <FaPaw className="text-2xl text-black mx-auto mb-2 opacity-50" />
                            <span className="font-bold text-black text-sm">{card.title}</span>
                         </div>
                     </div>
                </div>

                {/* Bottom Right: Colors & CTA */}
                <div className="relative p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-4">COLORS</h4>
                    <div className="space-y-2">
                        <div className={`h-12 w-full ${card.tertiary} rounded-lg flex items-center px-3`}>
                            <span className="text-[10px] text-white/70">PRIMARY<br/>#2E71DA</span>
                        </div>
                        <div className="h-12 w-full bg-[#10244F] rounded-lg flex items-center px-3">
                             <span className="text-[10px] text-white/70">DARK<br/>#10244F</span>
                        </div>
                        <div className={`h-12 w-full ${card.secondary} rounded-lg flex items-center px-3`}>
                             <span className="text-[10px] text-black/70">ACCENT<br/>#FFFF00</span>
                        </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-2 mt-2">
                      <span className="text-white font-medium text-lg underline underline-offset-4">See more</span>
                  </div>
                  
                  {/* Dog Image Placeholder - using an absolute positioned element to simulate overlap */}
                  {/* Since we don't have the dog image, we'll skip or use a generic placeholder if needed, but the layout is packed. */}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-4 mt-12">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
