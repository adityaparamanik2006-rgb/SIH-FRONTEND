import { ArrowRight, MapPin, Users, BookOpen, Factory, Shield } from 'lucide-react'
import Button from './shared/Button.jsx'

const NODES = [
  { label: 'Citizens', Icon: Users, color: '#0ea5e9', pos: 'top-0 left-0' },
  { label: 'Universities', Icon: BookOpen, color: '#2563eb', pos: 'top-0 right-0' },
  { label: 'Industry', Icon: Factory, color: '#10b981', pos: 'bottom-0 right-0' },
  { label: 'Government', Icon: Shield, color: '#7c3aed', pos: 'bottom-0 left-0' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-gradient-to-br from-slate-50 to-sky-100 pt-[72px]">
      {/* Subtle dot pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-12">
        {/* Left column */}
        <div className="animate-fade-in">
          <h1 className="mb-6 text-[32px] font-bold leading-tight tracking-[-0.02em] text-brand-navy md:text-[48px]">
            Collaborate. Innovate. Solve Disasters.
          </h1>
          <p className="mb-8 max-w-[500px] text-base leading-relaxed text-slate-600 md:text-xl">
            Bring together citizens, universities, and industry to crowdsource
            solutions for Jharkhand's most critical challenges.
          </p>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button variant="primary" size="lg" to="/auth" icon={ArrowRight} iconPosition="right">
              Get Started
            </Button>
            <Button variant="secondary" size="lg" href="#challenges" icon={MapPin} iconPosition="left">
              View Challenges
            </Button>
          </div>

          <p className="text-sm text-slate-500">Powered by Government of Jharkhand</p>
        </div>

        {/* Right column — collaboration visual (desktop only) */}
        <div
          className="relative hidden aspect-square w-full max-w-md justify-self-center lg:flex lg:items-center lg:justify-center animate-slide-in-right"
          aria-hidden="true"
        >
          <div className="relative h-full w-full">
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-amber text-center text-white shadow-lg">
              <span className="text-xs font-semibold leading-tight px-2">
                Disaster
                <br />
                Challenge
              </span>
            </div>
            {NODES.map(({ label, Icon, color, pos }) => (
              <div
                key={label}
                className={`absolute ${pos} flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white text-center shadow-md`}
                style={{ border: `2px solid ${color}` }}
              >
                <Icon size={22} color={color} />
                <span className="mt-1 text-[11px] font-semibold text-brand-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
