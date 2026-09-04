import useCountUp from '../../hooks/useCountUp.js'

/**
 * Displays an animated metric. `value` is the raw number to count up to.
 * `suffix` is appended after the counted number (e.g. "+"), `prefix` before it.
 */
export default function MetricCard({
  icon: Icon,
  value,
  suffix = '',
  prefix = '',
  description,
  color = '#2563eb',
  bgColor = 'rgba(37, 99, 235, 0.1)',
  animate = false,
}) {
  const count = useCountUp(value, { start: animate })
  const display = `${prefix}${count.toLocaleString('en-IN')}${suffix}`

  return (
    <div
      className="rounded-xl p-8 text-center transition-transform duration-200 ease-out hover:-translate-y-1"
      style={{ backgroundColor: bgColor }}
    >
      {Icon && (
        <Icon size={48} color={color} className="mx-auto mb-4" aria-hidden="true" />
      )}
      <div className="text-4xl md:text-[48px] font-bold leading-none mb-2" style={{ color }}>
        {display}
      </div>
      <p className="text-slate-200 text-sm md:text-base">{description}</p>
    </div>
  )
}
