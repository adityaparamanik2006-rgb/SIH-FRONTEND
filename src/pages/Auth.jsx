import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Auth() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="mb-2 text-sm font-semibold text-brand-blue">ChallengeHub</p>
      <h1 className="mb-4 text-2xl font-bold text-brand-navy md:text-3xl">
        Authentication page coming soon
      </h1>
      <p className="mb-8 max-w-md text-slate-600">
        Sign in and sign up are being built. Check back soon to create your
        account and start collaborating on Jharkhand's challenges.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to home
      </Link>
    </div>
  )
}
