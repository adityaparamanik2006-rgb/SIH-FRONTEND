import { Users, BookOpen, Factory, Shield } from 'lucide-react'
import Section from './shared/Section.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const NODES = [
  {
    label: 'Citizens',
    Icon: Users,
    color: '#0ea5e9',
    pos: 'top-0 left-0',
    copy: 'Report real problems from their communities. Share ground-level insights. Contribute solutions. Be heard by decision-makers.',
  },
  {
    label: 'Universities',
    Icon: BookOpen,
    color: '#2563eb',
    pos: 'top-0 right-0',
    copy: 'Access real-world challenges for research and innovation. Student teams solve problems and build portfolios. Direct partnership with government.',
  },
  {
    label: 'Industry',
    Icon: Factory,
    color: '#10b981',
    pos: 'bottom-0 right-0',
    copy: 'Find meaningful CSR opportunities aligned with government goals. Access pre-vetted challenges. Scale social impact while building brand reputation.',
  },
  {
    label: 'Government',
    Icon: Shield,
    color: '#7c3aed',
    pos: 'bottom-0 left-0',
    copy: 'Crowdsource solutions for critical challenges. Reduce response time. Ensure quality solutions through collaborative vetting. Maintain accountability.',
  },
]

export default function EcosystemSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <Section title="The Collaborative Ecosystem" background="dark-gradient">
      <div
        ref={ref}
        className="relative mx-auto mb-16 aspect-square w-full max-w-sm md:max-w-md"
      >
        <svg
          viewBox="0 0 300 300"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <title>Connections between stakeholders and the central challenge</title>
          {[
            [70, 70],
            [230, 70],
            [230, 230],
            [70, 230],
          ].map(([x, y], i) => (
            <line
              key={i}
              x1="150"
              y1="150"
              x2={x}
              y2={y}
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-flow-dash"
            />
          ))}
        </svg>

        <div
          className={`absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-amber text-center text-white shadow-lg transition-all duration-500 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        >
          <span className="px-2 text-xs font-semibold leading-tight">
            Disaster
            <br />
            Challenge
          </span>
        </div>

        {NODES.map(({ label, Icon, color, pos }, i) => (
          <div
            key={label}
            className={`absolute ${pos} flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-brand-navy text-center shadow-md transition-all duration-500`}
            style={{
              border: `2px solid ${color}`,
              transitionDelay: `${(i + 1) * 150}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.75)',
            }}
          >
            <Icon size={24} color={color} aria-hidden="true" />
            <span className="mt-1 text-xs font-semibold text-white">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {NODES.map(({ label, copy }) => (
          <div key={label}>
            <h3 className="mb-2 text-lg font-semibold text-white">{label}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
