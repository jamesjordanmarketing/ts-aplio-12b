import AnimatedHeading from '@/app/components/ui/AnimatedHeading'
import ProcessItem from '@/app/components/ui/ProcessItem'
import { processItems } from '@/app/data/processData'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'

// Client component for animated process list
;('use client')
const AnimatedProcessList = ({ items }) => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <motion.div
      className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-25 md:gap-5 lg:gap-12"
      initial="initial"
      animate={controlAnimation}
      ref={ref}
      variants={fadeUpAnimation}>
      {items?.map((process) => (
        <ProcessItem
          key={process.id}
          lightImg={process.lightImg}
          darkImg={process.darkImg}
          title={process.title}
          arrow={process.arrow}
          darkArrow={process.darkArrow}
        />
      ))}
    </motion.div>
  )
}

// Server component for the main section
const ProcessSection = () => {
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
