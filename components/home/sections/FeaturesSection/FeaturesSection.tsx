'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { Feature } from '@/types/feature'

interface FeaturesSectionProps {
  features: Feature[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controlAnimation}
        variants={fadeUpAnimation}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
        data-testid="features-container">
        {features.map((feature) => (
          <div
            key={feature.id}
            data-testid="feature-card"
            className="transform rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-dark-200 dark:hover:bg-dark-300">
            <div className="text-primary-500 mb-4 text-2xl">{feature.icon}</div>
            <h3 className="mb-3 text-xl font-bold sm:mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
