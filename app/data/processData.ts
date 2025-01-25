import { type StaticImageData } from 'next/image'

// Import images with relative paths
import accountDark from '../../public/images/home-4-img/account-dark.png'
import accountProcessDark from '../../public/images/home-4-img/account-process-dark.png'
import accountProcess from '../../public/images/home-4-img/account-process.png'
import rightArrowDark from '../../public/images/home-4-img/account-right-arrow-dark.png'
import rightArrow from '../../public/images/home-4-img/account-right-arrow.png'
import accountSolutionsDark from '../../public/images/home-4-img/account-solutions-dark.png'
import accountSolutions from '../../public/images/home-4-img/account-solutions.png'
import account from '../../public/images/home-4-img/account.png'

export interface ProcessItem {
  id: number
  lightImg: StaticImageData
  darkImg: StaticImageData
  title: string
  arrow?: StaticImageData
  darkArrow?: StaticImageData
}

export const processItems: ProcessItem[] = [
  {
    id: 1,
    lightImg: account,
    darkImg: accountDark,
    title: 'Create Account to Install',
    arrow: rightArrow,
    darkArrow: rightArrowDark,
  },
  {
    id: 2,
    lightImg: accountProcess,
    darkImg: accountProcessDark,
    title: 'Set Up Analytic Process',
    arrow: rightArrow,
    darkArrow: rightArrowDark,
  },
  {
    id: 3,
    lightImg: accountSolutions,
    darkImg: accountSolutionsDark,
    title: 'Reset Data After Solutions',
  },
]
