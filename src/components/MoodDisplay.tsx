import { MoodType } from '@/types/mood';
import { moodConfigs, getRandomQuote, getRandomMusicSuggestion } from '@/data/moodData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Music, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface MoodDisplayProps {
  mood: MoodType;
  note?: string;
}

const MoodDisplay = ({ mood, note }: MoodDisplayProps) => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote(mood));
  const [currentMusic, setCurrentMusic] = useState(getRandomMusicSuggestion(mood));
  const config = moodConfigs[mood];

  const refreshQuote = () => {
    setCurrentQuote(getRandomQuote(mood));
  };

  const refreshMusic = () => {
    setCurrentMusic(getRandomMusicSuggestion(mood));
  };

  return (
    <Card className="glass-card p-8 animate-scale-in">
      <div className="text-center space-y-6">
        {/* Mood Display */}
        <div className="space-y-4">
          <div className="text-6xl animate-gentle-bounce">
            {config.emoji}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground/90">
              Feeling {config.label}
            </h2>
            <p className="text-lg text-foreground/70 mt-2">
              {config.description}
            </p>
          </div>
        </div>

        {/* User Note */}
        {note && (
          <div className="bg-white/10 rounded-xl p-4 border border-white/20">
            <h3 className="font-semibold text-foreground/80 mb-2">Your Note:</h3>
            <p className="text-foreground/70 italic">"{note}"</p>
          </div>
        )}

        {/* Inspirational Quote */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground/80">Daily Inspiration</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshQuote}
              className="text-foreground/60 hover:text-foreground/80 hover:bg-white/10"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
          <blockquote className="text-foreground/80 italic leading-relaxed">
            "{currentQuote}"
          </blockquote>
        </div>

        {/* Music Suggestion */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground/80">Music for Your Mood</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshMusic}
              className="text-foreground/60 hover:text-foreground/80 hover:bg-white/10"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="space-y-2">
              <div className="font-medium text-foreground/90">
                {currentMusic.song}
              </div>
              <div className="text-sm text-foreground/70">
                by {currentMusic.artist}
              </div>
              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                {currentMusic.genre}
              </Badge>
            </div>
            
            {currentMusic.spotifyUrl && (
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-foreground hover:bg-white/15 ml-4"
                onClick={() => window.open(currentMusic.spotifyUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Listen
              </Button>
            )}
          </div>
        </div>

        {/* Timestamp */}
        <p className="text-sm text-foreground/50">
          Recorded at {new Date().toLocaleTimeString()}
        </p>
      </div>
    </Card>
  );
};

export default MoodDisplay;