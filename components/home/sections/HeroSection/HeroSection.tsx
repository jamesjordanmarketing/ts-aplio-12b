'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <section className="container mx-auto py-20" data-testid="hero-container">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controlAnimation}
        variants={fadeUpAnimation}
        className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Next-Gen Data Solutions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Transform your business with our advanced analytics and data integration solutions
        </p>
      </motion.div>
    </section>
  )
}
