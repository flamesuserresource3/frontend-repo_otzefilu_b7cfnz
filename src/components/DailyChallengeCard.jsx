import React from 'react';
import { CalendarDays, Sparkles } from 'lucide-react';

function formatCountdown(target) {
  const diff = Math.max(0, target - Date.now());
  const hrs = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hrs}h ${mins}m`;
}

export default function DailyChallengeCard() {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const [left, setLeft] = React.useState(formatCountdown(midnight.getTime()));

  React.useEffect(() => {
    const id = setInterval(() => setLeft(formatCountdown(midnight.getTime())), 60 * 1000);
    return () => clearInterval(id);
  }, [midnight]);

  return (
    <section aria-label="Daily challenge" className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 via-teal-400/10 to-amber-400/10 p-5 ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-teal-300">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide">Daily Challenge</span>
            </div>
            <div className="text-xs text-white/70">Resets in {left}</div>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold text-white">Trend Mash: Meme or Scene?</h3>
            <p className="mt-1 text-sm text-gray-300">Identify the reference faster than your friends. Two hints max. Scored on speed + accuracy.</p>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-2 text-gray-900 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-teal-300" aria-label="Play daily challenge">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Play now
            </button>
            <p className="text-xs text-white/70">Best of 1 • 60–90s • Global leaderboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}
