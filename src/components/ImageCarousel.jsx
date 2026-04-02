import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '../data/links';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval); 
  }, [currentIndex, images.length]);

  return (
    <div className="w-full h-full relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white">
      <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className="w-full h-full bg-center bg-cover duration-500 transition-all"></div>
      <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-colors">
        <ChevronLeft onClick={prevSlide} size={28} />
      </div>
      <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-colors">
        <ChevronRight onClick={nextSlide} size={28} />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className={`cursor-pointer rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'w-6 h-2' : 'w-2 h-2'}`} style={{ backgroundColor: currentIndex === slideIndex ? colors.accent : 'rgba(255,255,255,0.6)' }}></div>
        ))}
      </div>
    </div>
  );
}