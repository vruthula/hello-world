import { MoodConfig, MoodType } from '@/types/mood';

export const moodConfigs: Record<MoodType, MoodConfig> = {
  happy: {
    emoji: '😊',
    label: 'Happy',
    description: 'Feeling joyful and bright',
    color: 'mood-happy',
    quotes: [
      "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
      "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain",
      "Every day is a good day when you paint. - Bob Ross",
      "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
      "Joy is what happens to us when we allow ourselves to recognize how good things really are. - Marianne Williamson"
    ],
    musicSuggestions: [
      { artist: "Pharrell Williams", song: "Happy", genre: "Pop", spotifyUrl: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH" },
      { artist: "Jason Mraz", song: "I'm Yours", genre: "Folk Pop", spotifyUrl: "https://open.spotify.com/track/1mCsF9Tw4AHaWWVqYKYkSh" },
      { artist: "Bob Marley", song: "Three Little Birds", genre: "Reggae", spotifyUrl: "https://open.spotify.com/track/6JGscWoP2xF835Sc8rKtfh" },
      { artist: "The Beatles", song: "Here Comes the Sun", genre: "Rock", spotifyUrl: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2" },
      { artist: "Bruno Mars", song: "Count on Me", genre: "Pop", spotifyUrl: "https://open.spotify.com/track/24Yi5OceqbFZkmTBdnGxfq" }
    ]
  },
  calm: {
    emoji: '😌',
    label: 'Calm',
    description: 'Peaceful and serene',
    color: 'mood-calm',
    quotes: [
      "Peace comes from within. Do not seek it without. - Buddha",
      "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
      "Calm mind brings inner strength and self-confidence. - Dalai Lama",
      "The quieter you become, the more you are able to hear. - Rumi",
      "Breathing in, I calm body and mind. Breathing out, I smile. - Thich Nhat Hanh"
    ],
    musicSuggestions: [
      { artist: "Ludovico Einaudi", song: "Nuvole Bianche", genre: "Classical", spotifyUrl: "https://open.spotify.com/track/6m5YEjzmkDwgmb9EzZdSrH" },
      { artist: "Max Richter", song: "On The Nature of Daylight", genre: "Ambient Classical", spotifyUrl: "https://open.spotify.com/track/7kBZ8iy6oDxCZ5l5gW4Q9r" },
      { artist: "Ólafur Arnalds", song: "Near Light", genre: "Ambient", spotifyUrl: "https://open.spotify.com/track/0dZgDpPQdVWGJR2KnP7UYN" },
      { artist: "Nils Frahm", song: "Says", genre: "Ambient Electronic", spotifyUrl: "https://open.spotify.com/track/7n5DUoLS4x55Y4X3RbNuQC" },
      { artist: "Agnes Obel", song: "Familiar", genre: "Indie Folk", spotifyUrl: "https://open.spotify.com/track/2XWVt4rkKC3MHbFGsNzRLd" }
    ]
  },
  energetic: {
    emoji: '⚡',
    label: 'Energetic',
    description: 'Full of vibrant energy',
    color: 'mood-energetic',
    quotes: [
      "Energy and persistence conquer all things. - Benjamin Franklin",
      "The energy of the mind is the essence of life. - Aristotle",
      "Life is energy, and energy is life's most precious gift. - David Wolfe",
      "Your energy introduces you before you even speak. - Unknown",
      "Be yourself and let your energy shine bright. - Unknown"
    ],
    musicSuggestions: [
      { artist: "Daft Punk", song: "One More Time", genre: "Electronic", spotifyUrl: "https://open.spotify.com/track/0DiWol3AO6WpXZgp0goxAV" },
      { artist: "The Chainsmokers", song: "Don't Let Me Down", genre: "Electronic Pop", spotifyUrl: "https://open.spotify.com/track/1i1fxkWeaMmKEB4T7zqbzK" },
      { artist: "Calvin Harris", song: "Feel So Close", genre: "Electronic Dance", spotifyUrl: "https://open.spotify.com/track/0SIAFU49FFHwR3QnT5Jx0k" },
      { artist: "Avicii", song: "Levels", genre: "Progressive House", spotifyUrl: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20" },
      { artist: "Swedish House Mafia", song: "Don't You Worry Child", genre: "Progressive House", spotifyUrl: "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC" }
    ]
  },
  relaxed: {
    emoji: '🌿',
    label: 'Relaxed',
    description: 'Easy-going and stress-free',
    color: 'mood-relaxed',
    quotes: [
      "Sometimes the most productive thing you can do is relax. - Mark Black",
      "Take time to rest, you have earned it. - Unknown",
      "Relax, refresh, renew. Play, pray, be present. - Anne Lamott",
      "Your calm mind is the ultimate weapon against your challenges. - Bryant McGill",
      "Nature does not hurry, yet everything is accomplished. - Lao Tzu"
    ],
    musicSuggestions: [
      { artist: "Bon Iver", song: "Holocene", genre: "Indie Folk", spotifyUrl: "https://open.spotify.com/track/1lLLj5Ap6vCpCh2xNKYdJ3" },
      { artist: "Iron & Wine", song: "Walking Far from Home", genre: "Folk", spotifyUrl: "https://open.spotify.com/track/5dMLOwZCpWGpkEQ7OoHMmY" },
      { artist: "Kings of Convenience", song: "I'd Rather Go Blind", genre: "Indie Pop", spotifyUrl: "https://open.spotify.com/track/5OxMhpJxFHI8uEw98EjJXb" },
      { artist: "Jack Johnson", song: "Better Together", genre: "Acoustic", spotifyUrl: "https://open.spotify.com/track/1JCmJZlCyPb6VaDF8V7iHG" },
      { artist: "Norah Jones", song: "Come Away With Me", genre: "Jazz", spotifyUrl: "https://open.spotify.com/track/1EW6ol1pNtg4g6SgdmvNVp" }
    ]
  },
  sad: {
    emoji: '😔',
    label: 'Sad',
    description: 'Feeling down but that\'s okay',
    color: 'mood-sad',
    quotes: [
      "It's okay to not be okay. It's okay to cry. - Unknown",
      "Tears are words that need to be written. - Paulo Coelho",
      "The way sadness works is one of the strange riddles of the world. - Lemony Snicket",
      "You are allowed to feel messed up and inside out. It doesn't mean you're defective. - David Mitchell",
      "Every tear is a water of life. - Unknown"
    ],
    musicSuggestions: [
      { artist: "Johnny Cash", song: "Hurt", genre: "Country", spotifyUrl: "https://open.spotify.com/track/3vQFYNJ2BgOF8h3nEvtdny" },
      { artist: "Mad World", song: "Gary Jules", genre: "Alternative", spotifyUrl: "https://open.spotify.com/track/3JOVTQ5h8HGFnDdp4VT3hN" },
      { artist: "Radiohead", song: "Creep", genre: "Alternative Rock", spotifyUrl: "https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r" },
      { artist: "Adele", song: "Someone Like You", genre: "Pop", spotifyUrl: "https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV" },
      { artist: "The National", song: "Skinny Love", genre: "Indie Rock", spotifyUrl: "https://open.spotify.com/track/5wfIjdlf3LRwn2JLRjQWRV" }
    ]
  },
  excited: {
    emoji: '🎉',
    label: 'Excited',
    description: 'Thrilled and enthusiastic',
    color: 'mood-excited',
    quotes: [
      "Excitement is the more practical synonym for happiness. - Alexandra Stoddard",
      "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
      "Your excitement is your gift to the world. - Marie Forleo",
      "Be excited about your life. - Karen Salmansohn",
      "Great things never come from comfort zones. - Unknown"
    ],
    musicSuggestions: [
      { artist: "Katy Perry", song: "Roar", genre: "Pop", spotifyUrl: "https://open.spotify.com/track/0kyTJqpLd8FoCLLVsRTfZu" },
      { artist: "Queen", song: "Don't Stop Me Now", genre: "Rock", spotifyUrl: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7" },
      { artist: "Dua Lipa", song: "Levitating", genre: "Pop", spotifyUrl: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9" },
      { artist: "The Killers", song: "Mr. Brightside", genre: "Alternative Rock", spotifyUrl: "https://open.spotify.com/track/003vvx7Niy0yvhvHt4a68B" },
      { artist: "Lizzo", song: "Good 4 U", genre: "Pop", spotifyUrl: "https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG" }
    ]
  },
  anxious: {
    emoji: '😰',
    label: 'Anxious',
    description: 'Feeling worried, but you\'re strong',
    color: 'mood-anxious',
    quotes: [
      "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne",
      "Anxiety is the dizziness of freedom. - Søren Kierkegaard",
      "Present moment awareness is the gift of anxiety. - Unknown",
      "You have been assigned this mountain to show others it can be moved. - Mel Robbins",
      "Breathe in courage, breathe out fear. - Unknown"
    ],
    musicSuggestions: [
      { artist: "Weightless", song: "Marconi Union", genre: "Ambient", spotifyUrl: "https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L" },
      { artist: "Explosions in the Sky", song: "Your Hand in Mine", genre: "Post Rock", spotifyUrl: "https://open.spotify.com/track/0cKaKP10qb4EDcA99y4NSc" },
      { artist: "Helios", song: "Halving the Compass", genre: "Ambient Electronic", spotifyUrl: "https://open.spotify.com/track/5KKHQTplqhKS1zD8Xev2zk" },
      { artist: "Brian Eno", song: "An Ending (Ascent)", genre: "Ambient", spotifyUrl: "https://open.spotify.com/track/0d2wBHSzOu70s2w4cp4nNI" },
      { artist: "Godspeed You! Black Emperor", song: "Hope Drone", genre: "Post Rock", spotifyUrl: "https://open.spotify.com/track/4Z9xwCqMXJhm5fZJn0IbTc" }
    ]
  }
};

export const getRandomQuote = (mood: MoodType): string => {
  const quotes = moodConfigs[mood].quotes;
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const getRandomMusicSuggestion = (mood: MoodType) => {
  const musicSuggestions = moodConfigs[mood].musicSuggestions;
  return musicSuggestions[Math.floor(Math.random() * musicSuggestions.length)];
};