import { ArrowRight, MapPin } from 'lucide-react'
import Section from './shared/Section.jsx'
import Button from './shared/Button.jsx'

const SEVERITY_STYLES = {
  High: 'bg-red-100 text-red-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-emerald-100 text-emerald-700',
}

const CHALLENGES = [
  {
    title: 'Flash Flood Warning System for Rural Areas',
    location: 'Pakur District, Jharkhand',
    severity: 'High',
    description:
      'Develop an early warning system for flash floods using weather data, satellite imagery, and local sensors. Target: 50 villages.',
    skills: ['Python', 'GIS', 'ML', 'IoT'],
    deadline: 'Submissions by Dec 31, 2026',
  },
  {
    title: 'Landslide Risk Mapping for Mining Belts',
    location: 'West Singhbhum, Jharkhand',
    severity: 'High',
    description:
      'Build a predictive risk map for landslide-prone mining regions using terrain data and rainfall patterns to guide evacuation planning.',
    skills: ['GIS', 'Data Science', 'Remote Sensing'],
    deadline: 'Submissions by Jan 15, 2027',
  },
  {
    title: 'Community Alert Network for Heatwaves',
    location: 'Dhanbad District, Jharkhand',
    severity: 'Medium',
    description:
      'Design a low-bandwidth SMS and IVR alert network to warn outdoor workers and elderly residents ahead of extreme heat events.',
    skills: ['Mobile', 'UX Research', 'Telecom APIs'],
    deadline: 'Submissions by Feb 5, 2027',
  },
]

export default function ChallengeDiscovery() {
  return (
    <Section id="challenges" background="light">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-brand-navy md:text-[32px]">
            Browse Real Challenges
          </h2>
          <p className="mb-8 leading-relaxed text-slate-600">
            Explore active challenges from across Jharkhand. Filter by
            category, region, and urgency. See problem details, required
            expertise, and potential impact.
          </p>
          <Button variant="primary" size="md" to="/auth" icon={ArrowRight} iconPosition="right">
            Browse Challenges
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          {CHALLENGES.map((challenge) => (
            <article
              key={challenge.title}
              tabIndex={0}
              className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-brand-navy">{challenge.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${SEVERITY_STYLES[challenge.severity]}`}
                >
                  {challenge.severity}
                </span>
              </div>
              <p className="mb-3 flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={14} aria-hidden="true" />
                {challenge.location}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {challenge.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {challenge.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{challenge.deadline}</span>
                <span className="text-sm font-semibold text-brand-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
                  View Details →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
