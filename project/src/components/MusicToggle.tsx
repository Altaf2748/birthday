import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay prevented by browser');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        className="bg-white/80 backdrop-blur-sm hover:bg-gold/20 transition-all duration-300 rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 group"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-gold group-hover:text-lilac transition-colors" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-400 group-hover:text-lilac transition-colors" />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Using a placeholder for background music - in production, add actual audio file */}
        <source src="/images/song.mp3" type="audio" />
      </audio>
    </div>
  );
};

export default MusicToggle;