import { CheckCircle, Users, Building2, Heart } from 'lucide-react'
import Section from './shared/Section.jsx'
import MetricCard from './shared/MetricCard.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const METRICS = [
  {
    Icon: CheckCircle,
    value: 48,
    description: 'Problems identified and solved',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
  },
  {
    Icon: Users,
    value: 156,
    description: 'Students and professionals collaborating',
    color: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.1)',
  },
  {
    Icon: Building2,
    value: 23,
    description: 'Companies contributing resources',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    Icon: Heart,
    value: 85000,
    suffix: '+',
    description: 'People benefiting from solutions',
    color: '#2563eb',
    bgColor: 'rgba(37, 99, 235, 0.1)',
  },
]

export default function ImpactMetrics() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <Section id="impact" title="Our Impact" background="dark">
      <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric) => (
          <MetricCard key={metric.description} {...metric} animate={isVisible} />
        ))}
      </div>
    </Section>
  )
}
