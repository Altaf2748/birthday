import React from 'react';

const Confetti: React.FC = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => i);
  const colors = ['#B39BC8', '#F8C4CF', '#E4B169'];
  const shapes = ['🎉', '🎊', '✨', '💖', '🌟'];

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece}
          className="absolute animate-confetti text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {shapes[Math.floor(Math.random() * shapes.length)]}
        </div>
      ))}
    </div>
  );
};

export default Confetti;