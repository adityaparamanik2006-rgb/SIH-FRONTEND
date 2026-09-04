import { AlertTriangle, Zap } from 'lucide-react'
import Section from './shared/Section.jsx'
import Card from './shared/Card.jsx'

export default function ProblemStatement() {
  return (
    <Section id="about" title="What We're Solving" background="light">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-brand-amber">
          <AlertTriangle size={48} color="#f59e0b" aria-hidden="true" className="mb-4" />
          <h3 className="mb-2 text-xl font-semibold text-brand-navy">The Challenge</h3>
          <p className="leading-relaxed text-slate-600">
            Disasters in Jharkhand are managed in silos. Government agencies,
            universities, and industry don't have a structured way to
            collaborate. Problems are reported but solutions take too long.
            Resources are wasted.
          </p>
        </Card>

        <Card className="border-l-4 border-l-brand-green">
          <Zap size={48} color="#10b981" aria-hidden="true" className="mb-4" />
          <h3 className="mb-2 text-xl font-semibold text-brand-navy">The Solution</h3>
          <p className="leading-relaxed text-slate-600">
            Our platform brings together all stakeholders. Citizens report
            problems. Universities innovate solutions. Industry provides
            resources. Government ensures implementation. Real-time
            collaboration. Real-world impact.
          </p>
        </Card>
      </div>
    </Section>
  )
}
