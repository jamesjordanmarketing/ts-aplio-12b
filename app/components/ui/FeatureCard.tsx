import { type FC } from 'react'
import Image from 'next/image'
import { type FeatureCard as FeatureCardType } from '@/app/data/featureData'

type FeatureCardProps = Omit<FeatureCardType, 'id'>

const FeatureCard: FC<FeatureCardProps> = ({ img, darkImg, title, description }) => {
  return (
    <div className="hover:dark:border-borderColour-dark relative max-w-[402px] rounded-medium border border-solid border-transparent bg-white p-8 shadow-nav transition-colors hover:transition-colors dark:bg-dark-200 max-lg:p-5">
      <figure>
        <Image src={img} alt={`${title} illustration`} className="inline-block h-full w-full dark:hidden" />
        <Image
          src={darkImg}
          alt={`${title} illustration - dark theme`}
          className="hidden h-full w-full dark:inline-block"
        />
      </figure>
      <figcaption>
        <h3 className="mb-2.5 mt-10 max-w-[70%] leading-8">{title}</h3>
        <p>{description}</p>
      </figcaption>
    </div>
  )
}

export default FeatureCard
