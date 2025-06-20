import React, { useState } from 'react';
import { Clock, Heart } from 'lucide-react';

const Timeline: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const timelineData = [
    {
      age: 5,
      title: "Little Hands, Big Hearts",
      poem: "You held my hand when I was small…\nyour courage made me tall.",
      memory: "Teaching me to do my homework with endless patience",
      icon: "👶"
    },
    {
      age: 10,
      title: "Inspiration towards success",
      poem: "Side by side through every game,\nnothing was ever quite the same.",
      memory: "As a 10 year old kid, I always looked up on you, looked up and decided how my inspiration should look like!",
      icon: "🏰"
    },
    {
      age: 15,
      title: "Secret Keepers",
      poem: "We whispered secrets through the night—\nour dreams took flight in whispered light.",
      memory: "Late-night talks about everything and nothing, not to forget your wonder-full cooking classes",
      icon: "🌙"
    },
    {
      age: 21,
      title: "Forever Friends",
      poem: "Now you stand on life's bright stage,\nturning a beautiful new page.",
      memory: "Celebrating the amazing woman you've become",
      icon: "👑"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-lilac/20 to-pearl py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Journey Together
          </h2>
          <div className="text-3xl mb-4">
            ⏰💖⏰
          </div>
          <p className="font-lora text-xl text-gray-600">
            Interactive timeline of our sisterhood
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lilac to-gold"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                      activeNode === index ? 'scale-105 ring-4 ring-gold/30' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveNode(activeNode === index ? null : index)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{item.icon}</div>
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-gray-800">
                          Age {item.age}
                        </h3>
                        <h4 className="font-lora text-lg text-lilac font-medium">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className={`transition-all duration-500 ${
                      activeNode === index ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
                    }`}>
                      <p className="font-lora text-gray-600 mb-3">
                        {item.memory}
                      </p>
                      
                      {activeNode === index && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-blush/20 to-lilac/20 rounded-xl animate-fade-in-up">
                          <p className="font-lora italic text-gray-700 whitespace-pre-line">
                            "{item.poem}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-gold to-lilac rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  {activeNode === index ? (
                    <Heart className="w-6 h-6 text-white animate-heart-burst" />
                  ) : (
                    <Clock className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Spacer for opposite side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;