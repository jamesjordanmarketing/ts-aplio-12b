import { Metadata } from 'next'
import HeroSection from '@/components/home/sections/HeroSection/HeroSection'
import FeaturesSection from '@/components/home/sections/FeaturesSection/FeaturesSection'
import DataIntegration from '@/components/home/sections/DataIntegration/DataIntegration'

const features = [
  {
    id: '1',
    title: 'Real-time Analytics',
    description: 'Get instant insights with our real-time data processing',
    icon: '📊',
  },
  {
    id: '2',
    title: 'Data Integration',
    description: 'Seamlessly connect all your data sources',
    icon: '🔗',
  },
  {
    id: '3',
    title: 'AI Predictions',
    description: 'Leverage AI for accurate business forecasts',
    icon: '🤖',
  },
]
import FinancialBlog from '@/components/shared/FinancialBlog'
import CallToAction from '@/components/shared/CallToAction'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'

export const metadata: Metadata = {
  title: 'Analytics | Next-Gen Data Solutions',
  description: 'Transform your business with our advanced analytics and data integration solutions.',
  keywords: 'analytics, data integration, business intelligence, data visualization',
}

export default async function HomePage4() {
  return (
    <>
      <SecondaryNavbar hideTopBar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection features={features} />
        <DataIntegration />
        <FinancialBlog className="py-20 dark:bg-dark-300 lg:py-40" />
        <CallToAction title="Boost Your Revenue Using Our Data Analytics Solutions" />
      </main>
      <Footer />
    </>
  )
}
