const STATUS_STYLES = {
  active: 'bg-amber-100 text-amber-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  approved: 'bg-emerald-100 text-emerald-800',
  live: 'bg-emerald-100 text-emerald-800',
}

export default function TimelineItem({
  icon: Icon,
  iconColor = '#2563eb',
  title,
  description,
  timestamp,
  statusLabel,
  statusKey = 'in-progress',
  isLast = false,
  isVisible = true,
  delayMs = 0,
}) {
  return (
    <li
      className={`relative pl-14 ${isLast ? 'pb-0' : 'pb-10'} transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-brand-blue/30"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white shadow-md"
        style={{ backgroundColor: `${iconColor}1a` }}
      >
        {Icon && <Icon size={18} color={iconColor} />}
      </span>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {timestamp}
          </span>
          {statusLabel && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[statusKey] || STATUS_STYLES['in-progress']}`}
            >
              {statusLabel}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-brand-navy mb-1">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </li>
  )
}
