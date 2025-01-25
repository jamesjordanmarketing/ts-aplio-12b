export interface Integration {
  id: number
  image: string
  title: string
  details: string
}

interface BlurEffect {
  base: string
  sizes: {
    default: string
  }
  colors: {
    primary: string
    accent: string
  }
}

interface Effects {
  blur: BlurEffect
}

interface MobileConfig {
  gradient: string
}

interface IntegrationBackground {
  mobile: MobileConfig
  effects: Effects
}

export const integrationData: Integration[] = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details: 'The prevailing view assumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details: 'The prevailing view assumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details: 'The prevailing view assumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details: 'The prevailing view assumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details: 'The prevailing view assumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details: 'The prevailing view assumed lorem ipsum was born as nonsense text.',
  },
]

export const integrationBackground: IntegrationBackground = {
  mobile: {
    gradient: '/images/hero-gradient.png',
  },
  effects: {
    blur: {
      base: 'rounded-full blur-[145px]',
      sizes: {
        default: 'max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]',
      },
      colors: {
        primary: 'bg-primary-200/20',
        accent: 'bg-primary-200/25',
      },
    },
  },
}
