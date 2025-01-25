'use client'

import { type FC, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'

interface FadeUpAnimationProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

const FadeUpAnimation: FC<FadeUpAnimationProps> = ({ children, className, ...props }) => {
  return (
    <motion.div variants={fadeUpAnimation} initial="initial" animate="animate" className={className} {...props}>
      {children}
    </motion.div>
  )
}

export default FadeUpAnimation
