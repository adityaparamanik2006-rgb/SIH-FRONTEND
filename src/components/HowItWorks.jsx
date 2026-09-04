import { MapPin, Users, Lightbulb, Rocket, CheckCircle } from 'lucide-react'
import Section from './shared/Section.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const STEPS = [
  {
    step: '1',
    Icon: MapPin,
    color: '#f59e0b',
    title: 'Identify',
    description:
      'A disaster occurs. A citizen reports the challenge. Provide details: location, severity, affected people, resources needed.',
  },
  {
    step: '2',
    Icon: Users,
    color: '#0ea5e9',
    title: 'Collaborate',
    description:
      'Universities and industry partners discover the challenge. Teams form. Students, researchers, and professionals brainstorm solutions.',
  },
  {
    step: '3',
    Icon: Lightbulb,
    color: '#10b981',
    title: 'Innovate',
    description:
      'Solutions are developed. Feasibility is verified. Budgets are estimated. Technical and social impact are evaluated.',
  },
  {
    step: '4',
    Icon: Rocket,
    color: '#2563eb',
    title: 'Implement',
    description:
      'Government approves and funds the solution. Industry provides resources. Implementation teams execute. Real-world testing begins.',
  },
  {
    step: '5',
    Icon: CheckCircle,
    color: '#10b981',
    title: 'Impact',
    description:
      'Solution deployed. Citizens benefit. Data collected. Success stories documented. Innovation added to knowledge base for future disasters.',
  },
]

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <Section id="how-it-works" title="How It Works" background="offwhite" maxWidth="max-w-narrow">
      <div ref={ref} className="relative">
        {/* Connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-6 top-6 hidden h-0.5 bg-brand-blue/20 md:block md:left-0 md:right-0 md:top-6 md:h-0.5"
        >
          <div
            className="h-full bg-brand-blue transition-all duration-[1200ms] ease-out"
            style={{ width: isVisible ? '100%' : '0%' }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute left-6 top-6 bottom-6 w-0.5 bg-brand-blue/20 md:hidden"
        >
          <div
            className="w-full bg-brand-blue transition-all duration-[1200ms] ease-out"
            style={{ height: isVisible ? '100%' : '0%' }}
          />
        </div>

        <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4">
          {STEPS.map(({ step, Icon, color, title, description }, i) => (
            <li
              key={step}
              className="relative pl-16 transition-all duration-500 ease-out md:pl-0 md:text-center"
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
              }}
            >
              <span
                className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md md:static md:mx-auto md:mb-4"
                style={{ border: `2px solid ${color}` }}
              >
                <Icon size={22} color={color} aria-hidden="true" />
              </span>
              <div>
                <span
                  className="mb-1 inline-block text-xs font-bold"
                  style={{ color }}
                >
                  Step {step}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
