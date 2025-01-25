import { type FC } from 'react'
import { featureCards } from '@/app/data/featureData'
import FeatureCard from '@/app/components/ui/FeatureCard'

const FeatureSection: FC = () => {
  return (
    <section className="container pb-[150px]">
      <div className="mx-auto grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards?.map(({ id, ...card }) => <FeatureCard key={id} {...card} />)}
      </div>
    </section>
  )
}

export default FeatureSection
