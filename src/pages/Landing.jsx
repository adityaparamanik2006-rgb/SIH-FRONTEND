import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import EcosystemSection from '../components/EcosystemSection';
import HowItWorks from '../components/HowItWorks';
import ChallengeDiscovery from '../components/ChallengeDiscovery';
import SolutionLifecycle from '../components/SolutionLifecycle';
import GeographicVisualization from '../components/GeographicVisualization';
import ImpactMetrics from '../components/ImpactMetrics';
import AnalyticsPreview from '../components/AnalyticsPreview';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <EcosystemSection />
        <HowItWorks />
        <ChallengeDiscovery />
        <SolutionLifecycle />
        <GeographicVisualization />
        <ImpactMetrics />
        <AnalyticsPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}