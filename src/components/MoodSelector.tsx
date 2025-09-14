import { MoodType } from '@/types/mood';
import { moodConfigs } from '@/data/moodData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MoodSelectorProps {
  selectedMood: MoodType | null;
  onMoodSelect: (mood: MoodType) => void;
}

const MoodSelector = ({ selectedMood, onMoodSelect }: MoodSelectorProps) => {
  return (
    <Card className="glass-card p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground/90">
        How are you feeling today?
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(Object.keys(moodConfigs) as MoodType[]).map((mood) => {
          const config = moodConfigs[mood];
          const isSelected = selectedMood === mood;
          
          return (
            <Button
              key={mood}
              variant={isSelected ? "default" : "secondary"}
              className={`
                h-20 flex flex-col gap-2 transition-all duration-300 transform
                ${isSelected 
                  ? 'scale-105 animate-pulse-glow ring-2 ring-primary/50' 
                  : 'hover:scale-105 hover:shadow-lg'
                }
                bg-white/20 backdrop-blur-sm border-white/30 text-foreground
                hover:bg-white/30
              `}
              onClick={() => onMoodSelect(mood)}
            >
              <span className="text-2xl">{config.emoji}</span>
              <span className="text-sm font-medium">{config.label}</span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};

export default MoodSelector;