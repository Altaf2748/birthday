import React, { useState } from 'react';
import Confetti from './Confetti';

const FinalCelebration: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const celebrateWithConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gold/20 via-lilac/30 to-blush/20 flex items-center justify-center py-20 relative">
      {showConfetti && <Confetti />}
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Main celebration */}
          <div className="mb-12">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Happy 26th Birthday,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-lilac animate-pulse">
                Sis! 🎉
              </span>
            </h1>
            
            <div className="text-6xl mb-8 animate-float">
              🎂✨🎂
            </div>
            
            <p className="font-lora text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              May this new chapter of your life be filled with endless joy, beautiful adventures, 
              and all the love your heart can hold. You deserve the world and more! 💖
            </p>
          </div>

          {/* Celebration button */}
          <button
            onClick={celebrateWithConfetti}
            className="group bg-gradient-to-r from-gold to-lilac hover:from-lilac hover:to-gold text-white px-12 py-6 rounded-full font-lora text-xl font-medium transition-all duration-500 hover:scale-110 hover:shadow-2xl mb-12"
          >
            🎉 Celebrate with Confetti! 🎉
          </button>

          {/* Final message */}
          <div className="mt-12 animate-slide-in-up">
            <p className="font-playfair text-2xl text-lilac italic mb-4">
              "A sister is both your mirror—and your opposite."
            </p>
            <p className="font-lora text-lg text-gray-600">
              Hey Darling... 💖
            </p>
            <p className="font-lora text-lg text-gray-600">
              I always call you darling because you're my first love, my forever best friend, my second mother, my spoiler, and yes... my ATM too! 😜

              You thought life was going to be calm and peaceful... until I was born and made it a rollercoaster of love, laughter, and a few headaches along the way! 😅

              Even though we spent most of our childhood in different places, every time you came home, I was the happiest, the most excited, and the craziest little soul waiting for you. Every new adventure in my life had you in it. I barely even remember the fight, we probably had a few but all I remember clearly is your love.

              You are my inspiration, my strength, my softest place to land. You’ve loved me like your own child, protected me like a lioness, cared for me like a mother, and supported me even through all my nonsense! 💕

              Thank you for standing by me every single day.

              The happiest moment in my life was when you married your love. I was genuinely overjoyed watching you live the beautiful moments you truly deserved.

              You’ve always given me the purest love, and hidden all your sorrows behind that beautiful smile. And now… you’re giving me the biggest gift of all you’re promoting me to the most responsible, adorable title of my life...

              "Chikki." 🍼💞

              I promise to take care of our little one like my own child. I swear I’ll be the best Chikki in the world, full of love, laughter, cuddles... and yes, maximum spoiling! 😇💕

              Thank you for every drop of love you’ve poured into me... and for trusting me with this new blessing.

              With all my heart,
              Your loving Miss Engineer 👷‍♀❤
            </p>
            <p className="font-lora text-lg text-gray-600">
              Here's to many more years of laughter, love, and sisterhood! 👭✨
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-lilac/30 to-transparent rounded-full blur-xl"></div>
    </section>
  );
};

export default FinalCelebration;