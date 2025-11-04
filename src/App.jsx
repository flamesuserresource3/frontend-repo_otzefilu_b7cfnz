import React from 'react';
import Hero from './components/Hero';
import QuickPlay from './components/QuickPlay';
import DailyChallengeCard from './components/DailyChallengeCard';
import InlineLeaderboard from './components/InlineLeaderboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 bg-gray-950/80 ring-1 ring-white/10">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2" aria-label="TrendSpot Arcade home">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-400 to-amber-300" aria-hidden="true" />
            <span className="font-extrabold tracking-tight">TrendSpot Arcade</span>
          </a>
          <nav aria-label="Primary" className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#quick-play" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 rounded">Quick Play</a>
            <a href="#leaderboard" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 rounded">Leaderboards</a>
            <a href="#" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 rounded">Store</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <QuickPlay />
        <DailyChallengeCard />
        <InlineLeaderboard />
      </main>

      <footer className="border-t border-white/10 py-8 bg-gray-950">
        <div className="container mx-auto px-4 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} TrendSpot Arcade. Play fair. Have fun.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
