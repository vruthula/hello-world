import { useState, useEffect } from 'react';
import { MoodType } from '@/types/mood';
import { useMoodStorage } from '@/hooks/useMoodStorage';
import { useToast } from '@/hooks/use-toast';
import MoodBackground from '@/components/MoodBackground';
import MoodSelector from '@/components/MoodSelector';
import MoodInput from '@/components/MoodInput';
import MoodDisplay from '@/components/MoodDisplay';
import MoodJournal from '@/components/MoodJournal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Plus, Home } from 'lucide-react';

type AppState = 'home' | 'selecting' | 'inputting' | 'displaying' | 'journal';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [currentEntry, setCurrentEntry] = useState<{ mood: MoodType; note?: string } | null>(null);
  const { entries, addEntry, deleteEntry, getTodaysEntry } = useMoodStorage();
  const { toast } = useToast();

  // Check if user already logged mood today
  useEffect(() => {
    const todaysEntry = getTodaysEntry();
    if (todaysEntry) {
      setCurrentEntry({ mood: todaysEntry.mood, note: todaysEntry.note });
      setSelectedMood(todaysEntry.mood);
      setAppState('displaying');
    }
  }, []);

  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood);
    setAppState('inputting');
  };

  const handleMoodSubmit = (mood: MoodType, note?: string) => {
    addEntry(mood, note);
    setCurrentEntry({ mood, note });
    setAppState('displaying');
    
    toast({
      title: "Mood saved! ✨",
      description: "Your vibe has been recorded in your journal.",
    });
  };

  const handleStartNewEntry = () => {
    setSelectedMood(null);
    setCurrentEntry(null);
    setAppState('selecting');
  };

  const handleShowJournal = () => {
    setAppState('journal');
  };

  const handleBackToHome = () => {
    setAppState(currentEntry ? 'displaying' : 'home');
  };

  const renderContent = () => {
    switch (appState) {
      case 'home':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <Card className="glass-card p-12 animate-fade-in">
                <div className="space-y-6">
                  <div className="text-6xl animate-gentle-bounce">🌟</div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground/90 mb-4">
                      MoodVibe Journal
                    </h1>
                    <p className="text-xl text-foreground/70 leading-relaxed">
                      Track your daily emotions, discover beautiful animated backgrounds, 
                      and get inspired by mood-matching quotes.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setAppState('selecting')}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Log Today's Mood
                    </Button>
                    
                    {entries.length > 0 && (
                      <Button
                        onClick={handleShowJournal}
                        variant="outline"
                        className="bg-white/10 border-white/20 text-foreground hover:bg-white/15 text-lg px-8 py-3"
                      >
                        <BookOpen className="w-5 h-5 mr-2" />
                        View Journal ({entries.length})
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'selecting':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <Button
                  onClick={handleBackToHome}
                  variant="ghost"
                  className="text-foreground/60 hover:text-foreground/80 hover:bg-white/10 mb-6"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>
              <MoodSelector
                selectedMood={selectedMood}
                onMoodSelect={handleMoodSelect}
              />
            </div>
          </div>
        );

      case 'inputting':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto">
              <MoodInput
                selectedMood={selectedMood!}
                onSubmit={handleMoodSubmit}
                onCancel={() => setAppState('selecting')}
              />
            </div>
          </div>
        );

      case 'displaying':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto space-y-8">
              <MoodDisplay
                mood={currentEntry!.mood}
                note={currentEntry!.note}
              />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleStartNewEntry}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-foreground hover:bg-white/15"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Entry
                </Button>
                <Button
                  onClick={handleShowJournal}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-foreground hover:bg-white/15"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Journal
                </Button>
              </div>
            </div>
          </div>
        );

      case 'journal':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <Button
                  onClick={handleBackToHome}
                  variant="ghost"
                  className="text-foreground/60 hover:text-foreground/80 hover:bg-white/10 mb-6"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>
              
              <MoodJournal
                entries={entries}
                onDeleteEntry={deleteEntry}
              />
              
              <div className="text-center">
                <Button
                  onClick={handleStartNewEntry}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Mood
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MoodBackground mood={selectedMood}>
      {renderContent()}
    </MoodBackground>
  );
};

export default Index;