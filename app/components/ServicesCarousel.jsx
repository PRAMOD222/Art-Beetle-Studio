"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [selectedImage, setSelectedImage] = useState(null);

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
              <div className="relative w-full h-full bg-gray-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/services/graphics/graphics-1.png" 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                
                {/* See More Button */}
                <div className="absolute bottom-4 right-4 z-20">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage("/services/graphics/full-graphics-1.png");
                        }}
                        className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/30"
                    >
                        See more
                    </button>
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

      {/* Full Screen Image Popup */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-transparent border-none shadow-none [&>button]:text-black [&>button]:bg-primary [&>button]:rounded-full [&>button]:p-4 [&>button]:top-0 [&>button]:right-0 [&>button]:translate-x-1/2 [&>button]:-translate-y-1/2 [&>button>svg]:w-10 [&>button>svg]:h-10 [&>button>svg]:stroke-[3] [&>button]:border-none [&>button]:ring-0 [&>button]:outline-none [&>button:focus]:ring-0 [&>button:focus]:ring-offset-0 [&>button:focus]:outline-none [&>button]:opacity-100">
            <ScrollArea className="h-full w-full rounded-lg bg-transparent">
                <div className="flex justify-center min-h-full ">
                    {/* Image Wrapper */}
                    <div className="relative w-full ">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={selectedImage || ""} 
                            alt="Full View" 
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
