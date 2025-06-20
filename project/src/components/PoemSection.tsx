import React from 'react';

const PoemSection: React.FC = () => {
  return (
    <section id="poem-section" className="min-h-screen bg-gradient-to-b from-pearl to-blush/10 flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            A Sister's Heart
          </h2>
          
          <div className="text-3xl mb-8">
            💕✨💕
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blush/20">
            <div className="font-lora text-lg md:text-xl leading-relaxed text-gray-700 space-y-6">
              <p className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                In every laugh we ever shared,
              </p>
              <p className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                In every secret only we dared,
              </p>
              <p className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                I found a bond no time can sever—
              </p>
              <p className="animate-slide-in-right font-semibold text-xl text-lilac" style={{ animationDelay: '0.8s' }}>
                My sister, my friend, today and forever.
              </p>
              <div className="text-2xl mt-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                👭💖
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;