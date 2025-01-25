'use client'

import { type FC, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'

interface FadeUpOneByOneAnimationProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  i?: number
}

const FadeUpOneByOneAnimation: FC<FadeUpOneByOneAnimationProps> = ({
  children,
  className,
  i = 0,
  ...props
}) => {
  return (
    <motion.div
      variants={fadeUpAnimation}
      initial="initial"
      animate="animate"
      custom={i}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeUpOneByOneAnimation