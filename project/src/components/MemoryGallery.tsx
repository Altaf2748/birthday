import React from 'react';

const MemoryGallery: React.FC = () => {
  const memories = [
    {
      image: "/images/guiding.jpg",
      caption: "The Guiding starlight 🌟"
    },
    {
      image: "/images/smile.jpg",
      caption: "The day we conquered the world—together 🚀"
    },
    {
      image: "/images/strong.jpg",
      caption: "Learning how to become Chikki! 🌺"
    },
    {
      image: "/images/youth.jpg",
      caption: "Just us being a mirror reflection of each-other🌺"
    },
    {
      image: "/images/crazy.jpg",
      caption: "Crazy Days of memories and fun, hearts so free 💃"
    },
    {
      image: "/images/cuties.jpg",
      caption: "Building dreams with blocks and hope 🏰"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blush/10 to-lilac/20 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Shared Memories Gallery
          </h2>
          <div className="text-3xl mb-4">
            📸✨📸
          </div>
          <p className="font-lora text-xl text-gray-600">
            Every picture tells our story of sisterhood
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <p className="font-lora text-gray-700 text-center leading-relaxed">
                  {memory.caption}
                </p>
              </div>

              {/* Watercolor Overlay Effect */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-gold/40 to-blush/40 blur-sm opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-lilac/40 to-gold/40 blur-sm opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;