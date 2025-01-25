import { type StaticImageData } from 'next/image'

// Import images with relative paths
import dataDark1 from '../../public/images/home-4-img/data1-dark.png'
import data1 from '../../public/images/home-4-img/data1.png'
import dataDark2 from '../../public/images/home-4-img/data2-dark.png'
import data2 from '../../public/images/home-4-img/data2.png'
import dataDark3 from '../../public/images/home-4-img/data3-dark.png'
import data3 from '../../public/images/home-4-img/data3.png'

export interface FeatureCard {
  id: number
  img: StaticImageData
  darkImg: StaticImageData
  title: string
  description: string
}

export const featureCards: FeatureCard[] = [
  {
    id: 1,
    img: data1,
    darkImg: dataDark1,
    title: 'Manage Project Finances',
    description:
      'Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus nibh tristique sit felis.',
  },
  {
    id: 2,
    img: data2,
    darkImg: dataDark2,
    title: 'Streamlined Data Processes',
    description:
      'Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus nibh tristique sit felis.',
  },
  {
    id: 3,
    img: data3,
    darkImg: dataDark3,
    title: 'Understand User Behavior',
    description:
      'Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus nibh tristique sit felis.',
  },
]
