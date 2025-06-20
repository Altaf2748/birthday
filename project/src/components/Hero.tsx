import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('poem-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-pearl via-blush/20 to-lilac/30 flex items-center justify-center overflow-hidden">
      {/* Watercolor Floral Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blush to-lilac blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-40 h-40 opacity-25">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-lilac to-gold blur-xl"></div>
        </div>
        <div className="absolute top-1/3 right-10 w-24 h-24 opacity-40">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gold to-blush blur-lg"></div>
        </div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl animate-fade-in-up">
        {/* Floral Wreath Decoration */}
        <div className="text-6xl mb-6 animate-float">
          🌸✨🌸
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          Happy Birthday,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lilac to-gold">
            Dearest Sis!
          </span>
        </h1>
        
        <div className="text-4xl mb-8">
          🎂🌸
        </div>
        
        <p className="font-lora text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          From the little girl you taught to dream—
          <span className="block italic text-lilac">
            to the sister I'll love forever.
          </span>
        </p>
        
        <button
          onClick={scrollToNext}
          className="group bg-gradient-to-r from-lilac to-gold hover:from-gold hover:to-lilac text-white px-8 py-4 rounded-full font-lora text-lg font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          Scroll to reminisce
          <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-lilac opacity-60" />
      </div>
    </section>
  );
};

export default Hero;