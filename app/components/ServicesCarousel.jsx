"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { YouTubeEmbed } from '@next/third-parties/google';
import dynamic from 'next/dynamic';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[500px] bg-gray-900 flex items-center justify-center text-white">Loading 3D Model...</div>
});

function ServiceCategory({ title, slides }) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(slides.length / 2));
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleSeeMore = (e, slide) => {
    e.stopPropagation();
    if (slide.openInNewTab && slide.link) {
      window.open(slide.link, '_blank');
    } else {
      setSelectedImage(slide);
    }
  };

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center overflow-hidden min-h-[800px] bg-black">
      {/* Title */}
      <div className=" relative">
        <h2 className="text-6xl text-white font-light tracking-tight">{title}</h2>
        <div className="h-1 w-full bg-white mt-4"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center [perspective:1000px]">
        {slides.map((slide, index) => {
          const total = slides.length;
          let offset = index - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
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
              key={index}
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
              <div className="relative w-full h-full bg-gray-800 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={slide.thumbnail} 
                  alt={slide.title || "Slide"}
                  className="w-full h-full object-cover"
                />
                
                {/* See More Button */}
                <div className="absolute bottom-4 right-4 z-20">
                    <button 
                        onClick={(e) => handleSeeMore(e, slide)}
                        className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/30"
                    >
                        {slide.videoId ? "Watch Video" : slide.modelPath ? "View 3D Model" : slide.openInNewTab ? "Visit Website" : "See more"}
                    </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-4 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Full Screen Image/Video Popup */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-transparent border-none shadow-none [&>button]:text-black [&>button]:bg-primary [&>button]:rounded-full [&>button]:p-4 [&>button]:top-0 [&>button]:right-0 [&>button]:translate-x-1/2 [&>button]:-translate-y-1/2 [&>button>svg]:w-10 [&>button>svg]:h-10 [&>button>svg]:stroke-[3] [&>button]:border-none [&>button]:ring-0 [&>button]:outline-none [&>button:focus]:ring-0 [&>button:focus]:ring-offset-0 [&>button:focus]:outline-none [&>button]:opacity-100">
            <DialogTitle className="sr-only">Content Preview</DialogTitle>
            <ScrollArea className="h-full w-full rounded-lg bg-transparent">
                <div className="flex justify-center min-h-full items-center">
                    {selectedImage?.videoId ? (
                      <div className="w-max min-w-2xl rounded-lg overflow-hidden shadow-2xl">
                        <YouTubeEmbed videoId={selectedImage.videoId} />
                      </div>
                    ) : selectedImage?.modelPath ? (
                      <div 
                        className="w-full h-[80vh] rounded-lg overflow-hidden shadow-2xl"
                        style={{ 
                            background: selectedImage?.hasGradient ? (selectedImage?.backgroundGradient || 'linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)') : 'transparent' 
                        }}
                      >
                        <ModelViewer modelPath={selectedImage.modelPath} />
                      </div>
                    ) : (
                      /* Image Wrapper */
                      <div 
                          className="relative w-full rounded-lg"
                          style={{ 
                            background: selectedImage?.hasGradient ? (selectedImage?.backgroundGradient || 'linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)') : 'transparent' 
                          }}
                      >
                          {selectedImage?.fullImage && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img 
                              src={selectedImage.fullImage} 
                              alt="Full View" 
                              className="w-full h-auto rounded-lg shadow-2xl"
                            />
                          )}
                      </div>
                    )}
                </div>
            </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function ServicesCarousel({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <div className="flex flex-col bg-black">
      {services.map((service, index) => (
        <ServiceCategory 
          key={index} 
          title={service.title} 
          slides={service.slides} 
        />
      ))}
    </div>
  );
}
