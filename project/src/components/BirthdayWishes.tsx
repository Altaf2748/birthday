import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const BirthdayWishes: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blush/20 to-lilac/30 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Birthday Wishes & Advice
          </h2>
          <div className="text-4xl mb-4">
            🕯️🌷🕯️
          </div>
        </div>

        <div className="space-y-16">
          {/* Wishes Poem */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/20 animate-slide-in-left">
            <div className="text-center">
              <Gift className="w-12 h-12 text-gold mx-auto mb-6" />
              <div className="font-lora text-lg md:text-xl leading-relaxed text-gray-700 space-y-4">
                <p>May every candle you blow</p>
                <p>Light a dream you'll come to know.</p>
                <p>May every wish you hold so dear</p>
                <p className="text-lilac font-semibold text-xl">Find its way to blossom here.</p>
              </div>
              <div className="text-3xl mt-6">🕯️🌷</div>
            </div>
          </div>

          {/* Personal Message */}
          <div className="bg-gradient-to-r from-gold/10 to-lilac/10 rounded-3xl p-8 md:p-12 border-2 border-gold/30 animate-slide-in-right">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-lilac mx-auto mb-6" />
              <p className="font-lora text-xl md:text-2xl text-gray-700 leading-relaxed">
                Sis, you are <span className="text-gold font-semibold">fearlessly you</span>—never doubt that. 
                Your strength, your kindness, your laughter make this world infinitely better. 
                <span className="block mt-4 text-lilac font-playfair text-2xl italic">
                  Happy 26st! 🎉
                </span>
              </p>
            </div>
          </div>

          {/* Tomorrow's Queen Poem */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blush/30 animate-fade-in-up">
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-8">
                Tomorrow's Queen
              </h3>
              <div className="text-4xl mb-6">👑🌅</div>
              <div className="font-lora text-lg md:text-xl leading-relaxed text-gray-700 space-y-4 max-w-2xl mx-auto">
                <p>At 26, you rise like dawn—</p>
                <p>A queen with wings you've never worn.</p>
                <p>Rule your world with gentle grace,</p>
                <p className="text-lilac font-semibold text-xl">And know my love lights every place.</p>
              </div>
              <div className="text-3xl mt-6">👑🌅</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishes;