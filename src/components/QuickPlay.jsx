import React from 'react';
import { Play, Lightbulb, Timer } from 'lucide-react';

const games = [
  {
    key: 'spot-a-clip',
    title: 'Spot-a-Clip',
    desc: 'Watch a trendy clip. Tap when you spot the reference.',
    length: '30–90s',
    hints: '0–2 hints',
    color: 'bg-teal-400/10 text-teal-100 ring-teal-300/20',
  },
  {
    key: 'speed-differences',
    title: 'Speed Differences',
    desc: 'See two images. Find all differences before time runs out.',
    length: '60–120s',
    hints: '0–2 hints',
    color: 'bg-amber-400/10 text-amber-100 ring-amber-300/20',
  },
];

export default function QuickPlay() {
  return (
    <section id="quick-play" aria-label="Quick play game selection" className="relative py-10 sm:py-14 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Jump In</h2>
            <p className="text-sm text-gray-300 mt-1">Mobile‑first rounds. Score by speed and accuracy.</p>
          </div>
          <button
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 text-gray-900 font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-300"
            aria-label="Start quick play"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Start
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {games.map((g) => (
            <article
              key={g.key}
              role="button"
              tabIndex={0}
              aria-label={`Play ${g.title}`}
              className={`rounded-2xl ${g.color} ring-1 p-4 sm:p-5 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-teal-300`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-semibold">{g.title}</h3>
                <Play className="h-5 w-5 opacity-80" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm text-gray-200/90">{g.desc}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-200/80">
                <span className="inline-flex items-center gap-1"><Timer className="h-4 w-4" /> {g.length}</span>
                <span className="inline-flex items-center gap-1"><Lightbulb className="h-4 w-4" /> {g.hints}</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/80">
                Press Enter to start
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
