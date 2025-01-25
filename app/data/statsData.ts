interface StatLabel {
  line1: string
  line2: string
}

interface StatItem {
  id: number
  number: number
  suffix: string
  label: StatLabel
}

interface BorderConfig {
  border: string
}

interface StatsBorders {
  light: BorderConfig
  dark: BorderConfig
}

export interface CounterStyles {
  base: string
}

export interface CounterConfig {
  threshold: number
  incrementBy: number
  interval: number
  styles: CounterStyles
}

interface CardConfig {
  outer: string
  inner: string
}

interface SectionConfig {
  base: string
  border: string
}

interface ContainerConfig {
  card: CardConfig
  section: SectionConfig
}

interface StatsConfig {
  counter: CounterConfig
  container: ContainerConfig
}

export const statsData: StatItem[] = [
  {
    id: 1,
    number: 95,
    suffix: '%',
    label: {
      line1: 'Trusted',
      line2: 'by companies',
    },
  },
  {
    id: 2,
    number: 85,
    suffix: 'M',
    label: {
      line1: 'People',
      line2: 'of aplio bank',
    },
  },
]

export const statsBorders: StatsBorders = {
  light: {
    border: '/images/payment/member-border.svg',
  },
  dark: {
    border: '/images/payment/member-border-dark.svg',
  },
}

export const statsConfig: StatsConfig = {
  counter: {
    threshold: 0.5,
    incrementBy: 2,
    interval: 10, // milliseconds
    styles: {
      base: 'text-[28px] leading-none text-primary dark:text-primary',
    },
  },
  container: {
    card: {
      outer: 'mr-6 h-[110px] w-[110px] rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200',
      inner:
        'flex h-[90px] w-[90px] items-center justify-center rounded-full border border-dashed border-gray-100 dark:border-borderColor-dark',
    },
    section: {
      base: 'relative grid grid-cols-12 gap-x-5 gap-y-5 py-10',
      border: `after:cover
        before:absolute before:left-1/2 before:top-0 before:h-0.5 before:w-full
        before:-translate-x-1/2 before:bg-[url('/images/payment/member-border.svg')] before:bg-cover
        before:bg-center before:bg-no-repeat
        after:absolute after:bottom-0 after:left-1/2
        after:h-0.5 after:w-full after:-translate-x-1/2 after:bg-[url('/images/payment/member-border.svg')]
        after:bg-center after:bg-no-repeat
        dark:before:bg-[url('/images/payment/member-border-dark.svg')]
        dark:after:bg-[url('/images/payment/member-border-dark.svg')]
        max-md:before:hidden`,
    },
  },
}
