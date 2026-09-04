import { AlertCircle, Search, Users, Zap, CheckCircle, Rocket } from 'lucide-react'
import Section from './shared/Section.jsx'
import TimelineItem from './shared/TimelineItem.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const STAGES = [
  {
    timestamp: 'Day 1',
    title: 'Problem Reported',
    description:
      'Citizen identifies and reports a challenge on the platform with details, photos, and impact assessment.',
    Icon: AlertCircle,
    iconColor: '#f59e0b',
    statusLabel: 'Active',
    statusKey: 'active',
  },
  {
    timestamp: 'Days 2–3',
    title: 'Under Review',
    description:
      'Government officials verify the problem. Details are refined. Solution requirements are defined.',
    Icon: Search,
    iconColor: '#0ea5e9',
    statusLabel: 'In Progress',
    statusKey: 'in-progress',
  },
  {
    timestamp: 'Days 4–7',
    title: 'Teams Formed',
    description:
      'University teams and industry partners express interest. The most promising teams are selected.',
    Icon: Users,
    iconColor: '#2563eb',
    statusLabel: 'In Progress',
    statusKey: 'in-progress',
  },
  {
    timestamp: 'Days 8–30',
    title: 'Solution Developed',
    description: 'Selected teams build prototypes. Feasibility is tested. Feedback is gathered.',
    Icon: Zap,
    iconColor: '#10b981',
    statusLabel: 'In Progress',
    statusKey: 'in-progress',
  },
  {
    timestamp: 'Days 31–35',
    title: 'Approved & Funded',
    description:
      'Government approves the solution and allocates budget. Implementation begins.',
    Icon: CheckCircle,
    iconColor: '#10b981',
    statusLabel: 'Approved',
    statusKey: 'approved',
  },
  {
    timestamp: 'Days 36+',
    title: 'Deployed',
    description:
      'Solution is implemented in the field. Real-world impact is measured. Stories are documented.',
    Icon: Rocket,
    iconColor: '#10b981',
    statusLabel: 'Live',
    statusKey: 'live',
  },
]

export default function SolutionLifecycle() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <Section title="From Problem to Solution: The Journey" background="gradient" maxWidth="max-w-narrow">
      <ol ref={ref} className="relative">
        {STAGES.map((stage, i) => (
          <TimelineItem
            key={stage.title}
            {...stage}
            isLast={i === STAGES.length - 1}
            isVisible={isVisible}
            delayMs={i * 100}
          />
        ))}
      </ol>
    </Section>
  )
}
