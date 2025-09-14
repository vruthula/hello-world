import { useState, useEffect } from 'react';
import { MoodEntry, MoodType } from '@/types/mood';

const STORAGE_KEY = 'moodvibe-entries';

export const useMoodStorage = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored).map((entry: any) => ({
          ...entry,
          timestamp: new Date(entry.timestamp)
        }));
        setEntries(parsed);
      } catch (error) {
        console.error('Error parsing mood entries:', error);
      }
    }
  }, []);

  const addEntry = (mood: MoodType, note?: string) => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      mood,
      note,
      timestamp: new Date()
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    return newEntry;
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
  };

  const getTodaysEntry = () => {
    const today = new Date().toDateString();
    return entries.find(entry => entry.timestamp.toDateString() === today);
  };

  return {
    entries,
    addEntry,
    deleteEntry,
    getTodaysEntry
  };
};