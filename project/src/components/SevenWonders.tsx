import React, { useState } from 'react';
import { Star, BookOpen } from 'lucide-react';

const SevenWonders: React.FC = () => {
  const [expandedWonder, setExpandedWonder] = useState<number | null>(null);

  const wonders = [
    {
      number: 1,
      text: "Our laughter—louder than any storm.",
      icon: "😂",
      poem: "When thunder roars and lightning strikes,\nYour giggles chase away my frights.\nIn every joke and silly face,\nYou fill my world with joy and grace."
    },
    {
      number: 2,
      text: "Your shoulder—where I first learned to lean.",
      icon: "🤗",
      poem: "A pillow soft when tears would fall,\nYour strength became my shelter wall.\nIn moments when I felt so small,\nYour shoulder caught me through it all."
    },
    {
      number: 3,
      text: "Our secrets—safer than any vault.",
      icon: "🗝️",
      poem: "Whispered dreams in midnight hours,\nShared like precious, hidden flowers.\nEvery secret, every fear,\nKept with love and held so dear."
    },
    {
      number: 4,
      text: "Your dreams—my guiding stars at night.",
      icon: "⭐",
      poem: "When darkness falls and hope seems lost,\nYour dreams shine bright, no matter the cost.\nLike constellations in the sky,\nThey lift my spirit, help me fly."
    },
    {
      number: 5,
      text: "My tears—melted away by your light.",
      icon: "💧",
      poem: "Salt and sorrow, pain and strife,\nYou've been the sunshine in my life.\nEvery teardrop kissed away,\nBy your love that saves the day."
    },
    {
      number: 6,
      text: "Our adventures—etched in golden time.",
      icon: "🌟",
      poem: "From backyard quests to city streets,\nEvery journey felt complete.\nMemories carved in hearts so true,\nEvery adventure shared with you."
    },
    {
      number: 7,
      text: "Our hearts—forever and always entwined.",
      icon: "💕",
      poem: "Two souls that dance in perfect rhyme,\nBound together beyond all time.\nNo distance far, no years can part,\nThe love that lives within each heart."
    }
  ];

  const toggleWonder = (index: number) => {
    setExpandedWonder(expandedWonder === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-pearl to-blush/20 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Seven Wonders of Our Sisterhood
          </h2>
          <div className="text-3xl mb-4">
            ✨7️⃣✨
          </div>
          <p className="font-lora text-xl text-gray-600">
            The magical moments that define us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wonders.map((wonder, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleWonder(index)}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-lilac/20 to-transparent rounded-tr-full"></div>

              {/* Wonder number */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-lilac to-gold rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{wonder.number}</span>
                </div>
                <div className="text-3xl">{wonder.icon}</div>
              </div>

              {/* Wonder text */}
              <p className="font-lora text-gray-700 text-lg leading-relaxed mb-4">
                {wonder.text}
              </p>

              {/* Poem section */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedWonder === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="mt-4 p-4 bg-gradient-to-r from-blush/20 to-lilac/20 rounded-xl border-l-4 border-gold">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-4 h-4 text-gold mr-2" />
                    <span className="font-playfair text-sm font-semibold text-gold">Poem</span>
                  </div>
                  <p className="font-lora italic text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {wonder.poem}
                  </p>
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute bottom-4 right-4 flex items-center">
                <BookOpen className={`w-5 h-5 transition-colors duration-300 ${
                  expandedWonder === index ? 'text-gold' : 'text-gray-300 group-hover:text-gold'
                }`} />
                <Star className="w-6 h-6 text-gold/30 group-hover:text-gold group-hover:animate-pulse transition-colors duration-300 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Final flourish */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-4xl mb-4">💫👭</div>
          <p className="font-playfair text-2xl text-lilac italic">
            These seven wonders make our bond eternal
          </p>
          <p className="font-lora text-lg text-gray-600 mt-2">
            Click each wonder to reveal its poem
          </p>
        </div>
      </div>
    </section>
  );
};

export default SevenWonders;