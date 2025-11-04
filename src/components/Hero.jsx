import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section aria-label="TrendSpot Arcade hero" className="relative w-full min-h-[80vh] sm:min-h-[90vh]">
      <div className="absolute inset-0">        
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient overlays that don't block interaction with the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-900/40 via-teal-900/20 to-gray-950/60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-3 py-1 text-teal-100 ring-1 ring-teal-300/30">
          <Rocket className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs font-medium tracking-wide">Playful. Viral. Competitive.</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          TrendSpot Arcade
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-teal-50/90">
          Short, snackable challenges inspired by trending clips and pop culture. Compete on speed and accuracy, duel friends, and climb the leaderboards.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#quick-play"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-gray-900 font-semibold shadow-lg shadow-teal-900/20 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300"
            aria-label="Start a Quick Play session"
            role="button"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Quick Play
          </a>
          <a
            href="#leaderboard"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900/70 px-5 py-3 text-white font-semibold ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300"
            aria-label="View leaderboards"
            role="button"
          >
            <Trophy className="h-5 w-5 text-amber-300" aria-hidden="true" />
            View Leaderboards
          </a>
        </div>
      </div>
    </section>
  );
}
