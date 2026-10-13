import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'agents' && (
          <g fill="none" stroke={a}>
            {/* central orchestrator + five agents (Research, Competitor, SWOT, Financial, Report) */}
            {[
              [250, 50], [340, 80], [345, 170], [250, 215], [185, 130],
            ].map(([x, y], i) => (
              <g key={i}>
                <line x1="270" y1="132" x2={x} y2={y} strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 5" />
                <circle cx={x} cy={y} r="16" strokeWidth="2" strokeOpacity={0.55 + i * 0.09} />
                <circle cx={x} cy={y} r="5" fill={a} fillOpacity="0.8" stroke="none" />
              </g>
            ))}
            <circle cx="270" cy="132" r="30" strokeWidth="2.4" strokeOpacity="0.9" />
            <circle cx="270" cy="132" r="42" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="270" cy="132" r="9" fill={a} fillOpacity="0.9" stroke="none" />
          </g>
        )}
        {project.motif === 'dashboard' && (
          <g fill="none" stroke={a}>
            <rect x="196" y="50" width="176" height="150" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={i} x={212 + i * 26} y={180 - (30 + ((i * 37) % 70))} width="16" height={30 + ((i * 37) % 70)} rx="3" fill={a} fillOpacity={0.2 + i * 0.07} strokeOpacity="0.6" />
            ))}
            <path d="M212 120 L238 98 L264 110 L290 78 L316 88 L356 64" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
            <path d="M196 224 h176" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M196 238 h110" strokeWidth="1" strokeOpacity="0.3" />
          </g>
        )}
        {project.motif === 'candles' && (
          <g fill="none" stroke={a}>
            {[
              [204, 150, 190, 90, 120], [232, 160, 140, 70, 110], [260, 120, 100, 60, 90], [288, 135, 95, 55, 80], [316, 100, 70, 40, 60], [344, 90, 55, 30, 45],
            ].map(([x, top, bot, hi, lo], i) => (
              <g key={i}>
                <line x1={x} x2={x} y1={hi} y2={lo + 100} strokeWidth="1.6" strokeOpacity="0.6" />
                <rect x={x - 8} y={Math.min(top, bot) - 20} width="16" height={Math.abs(top - bot) * 0.6 + 14} rx="2" strokeWidth="1.6" fill={i % 3 === 1 ? 'none' : a} fillOpacity="0.35" />
              </g>
            ))}
            <path d="M196 210 C230 160, 262 190, 296 130 S340 90, 372 60" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85" />
            <path d="M196 232 h176" strokeWidth="1" strokeOpacity="0.3" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
