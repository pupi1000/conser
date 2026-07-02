import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '../data/links';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 6000); 
    return () => clearInterval(slideInterval); 
  }, [currentIndex, images.length]);

  return (
    <div className="w-full h-full relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white transition-all duration-500">
      <div 
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        className="w-full h-full bg-center bg-cover duration-700 transition-all scale-100 group-hover:scale-[1.01]"
      ></div>
      
      {/* Overlay gradiente inferior para los indicadores */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

      {/* Flecha izquierda */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-6 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button 
          onClick={prevSlide} 
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Flecha derecha */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button 
          onClick={nextSlide} 
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Indicadores en barra inferior */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-20">
        {images.map((_, slideIndex) => (
          <button 
            key={slideIndex} 
            onClick={() => setCurrentIndex(slideIndex)} 
            className={`cursor-pointer rounded-full h-2 transition-all duration-300 ${currentIndex === slideIndex ? 'w-8 bg-amber-400 shadow-md' : 'w-2 bg-white/60 hover:bg-white'}`}
            style={currentIndex === slideIndex ? { backgroundColor: colors.accent } : {}}
            aria-label={`Ir a slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}