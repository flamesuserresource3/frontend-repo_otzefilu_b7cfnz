import React from 'react';
import { Trophy } from 'lucide-react';

const sample = [
  { rank: 1, name: 'Nova', score: 9820 },
  { rank: 2, name: 'Echo', score: 9510 },
  { rank: 3, name: 'Blitz', score: 9260 },
  { rank: 4, name: 'Mira', score: 9015 },
  { rank: 5, name: 'Zed', score: 8870 },
];

export default function InlineLeaderboard() {
  return (
    <section id="leaderboard" aria-label="Inline leaderboards" className="bg-gray-950 py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-300" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-white">Leaderboards</h2>
          </div>
          <a href="#" className="text-sm text-teal-300 hover:underline">See all</a>
        </div>
        <div className="mt-4 divide-y divide-white/5 rounded-2xl ring-1 ring-white/10 bg-gray-900/60 backdrop-blur">
          {sample.map((row) => (
            <div key={row.rank} className="flex items-center justify-between p-3 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 text-right text-sm font-semibold text-white/90">{row.rank}</div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-amber-300" aria-hidden="true" />
                <div className="text-white font-medium">{row.name}</div>
              </div>
              <div className="text-amber-200 font-semibold tabular-nums">{row.score.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
