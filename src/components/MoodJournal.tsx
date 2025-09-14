import { MoodEntry } from '@/types/mood';
import { moodConfigs } from '@/data/moodData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface MoodJournalProps {
  entries: MoodEntry[];
  onDeleteEntry: (id: string) => void;
}

const MoodJournal = ({ entries, onDeleteEntry }: MoodJournalProps) => {
  if (entries.length === 0) {
    return (
      <Card className="glass-card p-8 text-center animate-fade-in">
        <Calendar className="w-12 h-12 mx-auto text-foreground/40 mb-4" />
        <h3 className="text-xl font-semibold text-foreground/70 mb-2">
          Your Journal is Empty
        </h3>
        <p className="text-foreground/50">
          Start tracking your moods to see your emotional journey!
        </p>
      </Card>
    );
  }

  return (
    <Card className="glass-card p-6 animate-fade-in">
      <h3 className="text-xl font-bold text-foreground/90 mb-6 flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        Your Mood Journey
      </h3>
      
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {entries.map((entry) => {
          const config = moodConfigs[entry.mood];
          
          return (
            <div
              key={entry.id}
              className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{config.emoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground/90">
                      {config.label}
                    </span>
                    <span className="text-sm text-foreground/60">
                      {format(entry.timestamp, 'MMM d, h:mm a')}
                    </span>
                  </div>
                  {entry.note && (
                    <p className="text-sm text-foreground/70 mt-1 italic">
                      "{entry.note}"
                    </p>
                  )}
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDeleteEntry(entry.id)}
                className="text-foreground/40 hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default MoodJournal;