import { type FC, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import AnimatedHeading from '@/app/components/ui/AnimatedHeading'
import ProcessItem from '@/app/components/ui/ProcessItem'
import { type ProcessItem as ProcessItemType, processItems } from '@/app/data/processData'

// Client component for animated process list
;('use client')
interface AnimatedProcessListProps {
  items: ProcessItemType[]
}

const AnimatedProcessList: FC<AnimatedProcessListProps> = ({ items }) => {
  const ref = useRef<HTMLDivElement>(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <motion.div
      className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-25 md:gap-5 lg:gap-12"
      initial="initial"
      animate={controlAnimation}
      ref={ref}
      variants={fadeUpAnimation}>
      {items?.map(({ id, ...process }) => <ProcessItem key={id} {...process} />)}
    </motion.div>
  )
}

// Server component for the main section
const ProcessSection: FC = () => {
  return (
    <section className="container">
      <AnimatedHeading tagline="Process" className="mb-25 max-w-[620px]">
        Follow the minimalistic steps
        <br />
        of installation
      </AnimatedHeading>

      <AnimatedProcessList items={processItems} />

      <button className="btn-outline mx-auto mt-15 flex">Try it for 30 days, no credit card required</button>
    </section>
  )
}

export default ProcessSection
