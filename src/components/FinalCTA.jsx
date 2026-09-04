import Button from './shared/Button.jsx'

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-brand-blue to-blue-900 px-6 py-16 text-center text-white md:px-12 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-[36px]">
          Ready to Make a Difference?
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-white/90">
          Join the movement to solve Jharkhand's most critical challenges.
          Whether you're a student, researcher, industry professional, or
          citizen—your contribution matters.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary-inverse" size="lg" to="/auth" className="w-full sm:w-auto">
            Get Started Now
          </Button>
          <Button
            variant="secondary-inverse"
            size="lg"
            href="#how-it-works"
            className="w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
