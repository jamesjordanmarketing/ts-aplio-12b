'use client'

import { type FC, type ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'

interface AnimatedHeadingProps {
  tagline?: string
  children: ReactNode
  className?: string
}

const AnimatedHeading: FC<AnimatedHeadingProps> = ({ tagline, children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <motion.div
      className={`mx-auto text-center ${className}`}
      initial="initial"
      animate={controlAnimation}
      ref={ref}
      variants={fadeUpAnimation}>
      {tagline && <p className="section-tagline">{tagline}</p>}
      <h2 className="mb-8">{children}</h2>
    </motion.div>
  )
}

export default AnimatedHeading
