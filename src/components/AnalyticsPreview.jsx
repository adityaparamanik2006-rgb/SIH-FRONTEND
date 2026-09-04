import { RefreshCw } from 'lucide-react'
import Section from './shared/Section.jsx'
import Button from './shared/Button.jsx'

const FILTERS = ['All', 'Active', 'Under Review', 'Deployed']

// Static mock data: [reported, inProgress, deployed] per month
const CHART_DATA = [
  { month: 'Oct', reported: 22, inProgress: 14, deployed: 6 },
  { month: 'Nov', reported: 30, inProgress: 20, deployed: 9 },
  { month: 'Dec', reported: 26, inProgress: 24, deployed: 12 },
  { month: 'Jan', reported: 34, inProgress: 21, deployed: 15 },
]

const TABLE_ROWS = [
  { challenge: 'Flash Flood Warning System', status: 'Deployed', team: 'IIT (ISM) Dhanbad' },
  { challenge: 'Landslide Risk Mapping', status: 'In Progress', team: 'BIT Sindri' },
  { challenge: 'Heatwave Alert Network', status: 'Under Review', team: 'XLRI Jamshedpur' },
  { challenge: 'Groundwater Monitoring Grid', status: 'In Progress', team: 'NIT Jamshedpur' },
]

const STATUS_STYLES = {
  Deployed: 'bg-emerald-100 text-emerald-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  'Under Review': 'bg-amber-100 text-amber-700',
}

const MAX_VALUE = 50
const CHART_HEIGHT = 160

function Bar({ value, color, x, width }) {
  const height = (value / MAX_VALUE) * CHART_HEIGHT
  return (
    <rect
      x={x}
      y={CHART_HEIGHT - height}
      width={width}
      height={height}
      fill={color}
      rx="2"
    />
  )
}

export default function AnalyticsPreview() {
  return (
    <Section
      title="Real-Time Dashboard Insights"
      description="Government officials, universities, and industry partners get real-time insights into challenge status, team progress, and solution deployment metrics."
      background="offwhite"
    >
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-brand-navy">Challenge Dashboard</h3>
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter, i) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === 0
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
            <button
              type="button"
              aria-label="Refresh dashboard data"
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
            >
              <RefreshCw size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-8 overflow-x-auto">
          <svg
            viewBox={`0 0 340 ${CHART_HEIGHT + 30}`}
            className="h-48 w-full min-w-[320px]"
            role="img"
            aria-label="Bar chart showing reported, in-progress, and deployed challenges from October to January"
          >
            <title>Monthly challenge status (illustrative data)</title>
            {CHART_DATA.map((d, i) => {
              const groupX = i * 85 + 10
              return (
                <g key={d.month}>
                  <Bar value={d.reported} color="#2563eb" x={groupX} width={18} />
                  <Bar value={d.inProgress} color="#f59e0b" x={groupX + 20} width={18} />
                  <Bar value={d.deployed} color="#10b981" x={groupX + 40} width={18} />
                  <text
                    x={groupX + 29}
                    y={CHART_HEIGHT + 18}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748b"
                  >
                    {d.month}
                  </text>
                </g>
              )
            })}
          </svg>
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-blue" /> Reported
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-amber" /> In Progress
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-green" /> Deployed
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <th scope="col" className="pb-2 pr-4 font-medium">Challenge</th>
                <th scope="col" className="pb-2 pr-4 font-medium">Status</th>
                <th scope="col" className="pb-2 font-medium">Team</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row) => (
                <tr key={row.challenge} className="border-b border-slate-100 last:border-0">
                  <td className="py-3 pr-4 font-medium text-brand-navy">{row.challenge}</td>
                  <td className="py-3 pr-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 text-slate-600">{row.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button variant="primary" size="md" to="/auth">
          Sign In to Access Dashboard
        </Button>
      </div>
    </Section>
  )
}
