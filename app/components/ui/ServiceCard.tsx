import { type FC } from 'react'
import Link from 'next/link'
import { type ServiceCard as ServiceCardType } from '@/app/data/servicesData'

type ServiceCardProps = Omit<ServiceCardType, 'id'>

const ServiceCard: FC<ServiceCardProps> = ({
  svg: SvgIcon,
  darkSvg: DarkSvgIcon,
  title,
  description,
  slug,
  button,
}) => {
  return (
    <div className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200">
      <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-10 dark:border-opacity-15 max-lg:p-5">
        <SvgIcon className="mb-6 inline-block dark:hidden" />
        <DarkSvgIcon className="mb-6 hidden dark:inline-block" />

        <Link href={`/services/${slug}`} className="block">
          <h3 className="mb-2.5">{title}</h3>
        </Link>
        <p className="mb-6">{description}</p>
        <Link href={`/services/${slug}`} className="btn-outline btn-sm">
          {button}
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
