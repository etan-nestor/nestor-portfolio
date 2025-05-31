'use client'

import HeroSection from '@/components/client/Home/HeroSection'
import StatsSection from '@/components/client/Home/StatsSection'
import ServicesSection from '@/components/client/Home/ServicesSection'
import TechnologiesSection from '@/components/client/Home/TechnologiesSection'
import CtaSection from '@/components/client/Home/CtaSection'
import CurrentJobModal from '@/components/client/Home/CurrentJobModal'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TechnologiesSection />
      <CtaSection />
      <CurrentJobModal />
    </main>
  )
}