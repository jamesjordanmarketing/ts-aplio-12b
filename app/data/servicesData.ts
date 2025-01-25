import { type FC, type SVGProps } from 'react'

// Import SVG images with relative paths
import financeDarkSVG from '../../public/images/home-4-img/finance-dark.svg'
import financeSVG from '../../public/images/home-4-img/finance.svg'
import investmentDarkSVG from '../../public/images/home-4-img/investment-dark.svg'
import investmentSVG from '../../public/images/home-4-img/investment.svg'
import salesDarkSVG from '../../public/images/home-4-img/sales-dark.svg'
import salesSVG from '../../public/images/home-4-img/sales.svg'
import trackDarkSVG from '../../public/images/home-4-img/track-dark.svg'
import trackSVG from '../../public/images/home-4-img/track.svg'

export interface ServiceCard {
  id: number
  svg: FC<SVGProps<SVGSVGElement>>
  slug: string
  darkSvg: FC<SVGProps<SVGSVGElement>>
  title: string
  description: string
  button: string
}

export const servicesCards: ServiceCard[] = [
  {
    id: 1,
    svg: investmentSVG,
    slug: 'finance-analyse',
    darkSvg: investmentDarkSVG,
    title: 'Real-Time Analytics',
    description:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
    button: 'See More',
  },
  {
    id: 2,
    svg: financeSVG,
    slug: 'effeciency',
    darkSvg: financeDarkSVG,
    title: 'Risk Management',
    description:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
    button: 'See More',
  },
  {
    id: 3,
    svg: salesSVG,
    slug: 'sales',
    darkSvg: salesDarkSVG,
    title: 'Sales Management',
    description:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
    button: 'See More',
  },
  {
    id: 4,
    svg: trackSVG,
    slug: 'finance-analyse',
    darkSvg: trackDarkSVG,
    title: 'Track Conversions',
    description:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
    button: 'See More',
  },
]
