export type MoodType = 'happy' | 'calm' | 'energetic' | 'relaxed' | 'sad' | 'excited' | 'anxious';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  note?: string;
  timestamp: Date;
}

export interface MoodConfig {
  emoji: string;
  label: string;
  description: string;
  color: string;
  quotes: string[];
  musicSuggestions: {
    artist: string;
    song: string;
    genre: string;
    spotifyUrl?: string;
  }[];
}