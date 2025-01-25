import { featureCards } from '@/app/data/featureData'
import FeatureCard from '@/app/components/ui/FeatureCard'

const FeatureSection = () => {
  return (
    <section className="container pb-[150px]">
      <div className="mx-auto grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards?.map((card) => (
          <FeatureCard
            key={card.id}
            img={card.img}
            darkImg={card.darkImg}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
