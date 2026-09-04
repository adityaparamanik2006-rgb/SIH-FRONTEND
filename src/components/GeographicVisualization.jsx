import { useState } from 'react'
import Section from './shared/Section.jsx'

const DISASTER_COLORS = {
  flood: '#ef4444',
  landslide: '#f97316',
  other: '#eab308',
}

// Approximate relative positions on a simplified/illustrative outline (not to scale)
const DISTRICTS = [
  { name: 'Pakur', type: 'flood', x: 82, y: 22, challenges: 9 },
  { name: 'Dhanbad', type: 'other', x: 68, y: 46, challenges: 6 },
  { name: 'Giridih', type: 'landslide', x: 58, y: 30, challenges: 5 },
  { name: 'Bokaro', type: 'landslide', x: 55, y: 50, challenges: 4 },
  { name: 'West Singhbhum', type: 'landslide', x: 40, y: 78, challenges: 8 },
  { name: 'Ranchi', type: 'other', x: 42, y: 55, challenges: 7 },
  { name: 'Hazaribagh', type: 'flood', x: 48, y: 34, challenges: 3 },
]

const STATS = [
  { label: 'Total Active Challenges', value: '42' },
  { label: 'Districts Covered', value: '8' },
  { label: 'Teams Participating', value: '127' },
  { label: 'Solutions in Deployment', value: '12' },
  { label: 'Lives Impacted', value: '50,000+' },
]

export default function GeographicVisualization() {
  const [selected, setSelected] = useState(null)

  return (
    <Section title="Jharkhand Disaster Hotspots" background="light">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Map */}
        <div className="lg:col-span-3">
          <div className="relative aspect-[4/3] w-full rounded-xl border border-slate-200 bg-slate-50 p-4">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              role="img"
              aria-label="Simplified illustrative map of Jharkhand showing disaster hotspot markers by district"
            >
              <title>Jharkhand disaster hotspots (illustrative)</title>
              <polygon
                points="30,10 70,8 90,25 88,55 75,80 55,92 35,88 15,65 12,35"
                fill="#e0f2fe"
                stroke="#94a3b8"
                strokeWidth="1"
              />
              {DISTRICTS.map((d) => {
                const r = 2 + d.challenges * 0.35
                return (
                  <g key={d.name}>
                    <circle
                      cx={d.x}
                      cy={d.y}
                      r={r}
                      fill={DISASTER_COLORS[d.type]}
                      opacity="0.85"
                      className="pointer-events-none md:pointer-events-auto animate-pulse-marker"
                      style={{ transformOrigin: `${d.x}px ${d.y}px` }}
                    />
                    <circle
                      cx={d.x}
                      cy={d.y}
                      r={r + 3}
                      fill="transparent"
                      className="hidden cursor-pointer md:block"
                      onClick={() => setSelected(d)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${d.name}: ${d.challenges} active challenges`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setSelected(d)
                      }}
                    />
                  </g>
                )
              })}
            </svg>

            {selected && (
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-slate-200 bg-white p-3 shadow-md">
                <p className="text-sm font-semibold text-brand-navy">{selected.name}</p>
                <p className="text-xs text-slate-500">
                  {selected.challenges} active challenges · {selected.type} risk
                </p>
              </div>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: DISASTER_COLORS.flood }} />
              Floods
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: DISASTER_COLORS.landslide }} />
              Landslides
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: DISASTER_COLORS.other }} />
              Other
            </span>
            <span className="ml-auto hidden sm:inline">Tap a marker for details</span>
          </div>
        </div>

        {/* Stats sidebar */}
        <div className="lg:col-span-2">
          <div className="flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[180px] shrink-0 rounded-xl border border-slate-200 bg-white p-5 lg:min-w-0"
              >
                <div className="text-2xl font-bold text-brand-navy md:text-3xl">{stat.value}</div>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
