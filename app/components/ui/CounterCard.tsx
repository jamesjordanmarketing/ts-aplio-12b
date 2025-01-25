import { type FC } from 'react'
import AnimatedCounter from './AnimatedCounter'
import { statsConfig } from '@/app/data/statsData'

interface CounterCardProps {
  number: number
  suffix: string
  label: {
    line1: string
    line2: string
  }
}

const CounterCard: FC<CounterCardProps> = ({ number, suffix, label }) => {
  return (
    <div className="flex items-center">
      <div className={statsConfig.container.card.outer}>
        <div className={statsConfig.container.card.inner}>
          <h3 className={statsConfig.counter.styles.base}>
            <AnimatedCounter number={number} />
            {suffix}
          </h3>
        </div>
      </div>
      <h3 className="leading-8">
        {label.line1} <br />
        {label.line2}
      </h3>
    </div>
  )
}

export default CounterCard
