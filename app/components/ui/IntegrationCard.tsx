import { type FC } from 'react'
import Image from 'next/image'
import { type Integration } from '@/app/data/integrationData'

type IntegrationCardProps = Pick<Integration, 'image' | 'title' | 'details'>

const IntegrationCard: FC<IntegrationCardProps> = ({ image, title, details }) => {
  return (
    <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
      <div className="rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark">
        <Image
          src={image}
          alt={`${title} integration`}
          className="mb-8 inline-block h-auto w-auto"
          width={42}
          height={42}
          priority
        />
        <h3 className="mb-2.5">{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default IntegrationCard
