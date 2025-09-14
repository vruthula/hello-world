import { MoodType } from '@/types/mood';
import { useEffect, useState } from 'react';

interface MoodBackgroundProps {
  mood: MoodType | null;
  children: React.ReactNode;
}

const MoodBackground = ({ mood, children }: MoodBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      },
    }));
    setParticles(newParticles);
  }, [mood]);

  const getMoodBackgroundClass = (mood: MoodType | null) => {
    if (!mood) return 'bg-background';
    return `mood-bg-${mood}`;
  };

  const getParticleColor = (mood: MoodType | null) => {
    switch (mood) {
      case 'happy':
        return 'bg-yellow-300/30';
      case 'calm':
        return 'bg-blue-300/30';
      case 'energetic':
        return 'bg-purple-400/30';
      case 'relaxed':
        return 'bg-green-300/30';
      case 'sad':
        return 'bg-blue-400/20';
      case 'excited':
        return 'bg-pink-400/30';
      case 'anxious':
        return 'bg-orange-300/20';
      default:
        return 'bg-primary/20';
    }
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-1000 ease-out relative overflow-hidden ${getMoodBackgroundClass(mood)}`}
    >
      {/* Floating Particles */}
      {mood && particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-3 h-3 rounded-full ${getParticleColor(mood)} floating opacity-60`}
          style={particle.style}
        />
      ))}
      
      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MoodBackground;