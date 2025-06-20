import React, { useState } from 'react';
import { Check, Coffee, Moon, Music, Heart, Sparkles } from 'lucide-react';

const SisterPromise: React.FC = () => {
  const [checkedPromises, setCheckedPromises] = useState<boolean[]>(new Array(5).fill(false));

  const promises = [
    {
      text: "Monthly sister dates—coffee or cinema",
      icon: Coffee,
      emoji: "☕🎬"
    },
    {
      text: "Late-night heart-to-hearts under the moon",
      icon: Moon,
      emoji: "🌙"
    },
    {
      text: "Spontaneous dance-parties in the living room",
      icon: Music,
      emoji: "💃"
    },
    {
      text: "A shoulder whenever life weighs you down",
      icon: Heart,
      emoji: "🤗"
    },
    {
      text: "Celebrating every dream, big or small",
      icon: Sparkles,
      emoji: "✨"
    }
  ];

  const togglePromise = (index: number) => {
    const newChecked = [...checkedPromises];
    newChecked[index] = !newChecked[index];
    setCheckedPromises(newChecked);
  };

  const checkedCount = checkedPromises.filter(Boolean).length;

  return (
    <section className="min-h-screen bg-gradient-to-b from-lilac/30 to-pearl py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sister's Promise
          </h2>
          <div className="text-3xl mb-4">
            🤝💖🤝
          </div>
          <p className="font-lora text-xl text-gray-600">
            Interactive pledges for our year ahead
          </p>
          {checkedCount > 0 && (
            <div className="mt-4 text-gold font-semibold">
              {checkedCount} of 5 promises sealed! ✨
            </div>
          )}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/20">
          <div className="space-y-6">
            {promises.map((promise, index) => {
              const IconComponent = promise.icon;
              const isChecked = checkedPromises[index];
              
              return (
                <div
                  key={index}
                  className={`group relative flex items-center p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    isChecked
                      ? 'bg-gradient-to-r from-gold/20 to-lilac/20 border-gold/50 shadow-lg'
                      : 'bg-white/50 border-gray-200 hover:border-gold/30 hover:shadow-md'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => togglePromise(index)}
                >
                  {/* Checkbox */}
                  <div className={`mr-6 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isChecked
                      ? 'bg-gradient-to-r from-gold to-lilac border-gold'
                      : 'border-gray-300 group-hover:border-gold'
                  }`}>
                    {isChecked && (
                      <Check className="w-5 h-5 text-white animate-heart-burst" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mr-4">
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      isChecked ? 'text-gold' : 'text-gray-400 group-hover:text-lilac'
                    }`} />
                  </div>

                  {/* Promise text */}
                  <div className="flex-1">
                    <p className={`font-lora text-lg transition-colors duration-300 ${
                      isChecked ? 'text-gray-800 font-medium' : 'text-gray-600'
                    }`}>
                      {promise.text}
                    </p>
                  </div>

                  {/* Emoji */}
                  <div className="text-2xl ml-4">
                    {promise.emoji}
                  </div>

                  {/* Decorative sparkle for checked items */}
                  {isChecked && (
                    <div className="absolute -top-1 -right-1 text-2xl animate-pulse">
                      ✨
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {checkedCount === 5 && (
            <div className="mt-8 text-center animate-fade-in-up">
              <div className="text-4xl mb-4">🎉💕🎉</div>
              <p className="font-playfair text-2xl text-gold font-bold">
                All promises sealed with love!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SisterPromise;