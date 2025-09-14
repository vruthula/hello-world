import { useState } from 'react';
import { MoodType } from '@/types/mood';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Heart, Plus } from 'lucide-react';

interface MoodInputProps {
  selectedMood: MoodType;
  onSubmit: (mood: MoodType, note?: string) => void;
  onCancel: () => void;
}

const MoodInput = ({ selectedMood, onSubmit, onCancel }: MoodInputProps) => {
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    onSubmit(selectedMood, note.trim() || undefined);
  };

  return (
    <Card className="glass-card p-6 animate-scale-in">
      <div className="space-y-6">
        <div className="text-center">
          <Heart className="w-8 h-8 mx-auto text-primary mb-3 animate-gentle-bounce" />
          <h3 className="text-xl font-bold text-foreground/90">
            Add a Personal Note
          </h3>
          <p className="text-foreground/60 mt-1">
            Optional: What's on your mind today?
          </p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="mood-note" className="text-foreground/80">
            Your thoughts (optional)
          </Label>
          <Textarea
            id="mood-note"
            placeholder="What made you feel this way? Any thoughts to remember..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/40 focus:bg-white/15"
            rows={3}
          />
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            Save Mood
          </Button>
          <Button
            onClick={onCancel}
            variant="outline"
            className="bg-white/10 border-white/20 text-foreground hover:bg-white/15"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MoodInput;