'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { fadeUpAnimation } from '@/data/animation'
import integrationData from '@/data/integrationData.json'
import useWhileInView from '@/hooks/useWhileInView'

export default function DataIntegration() {
  const ref = useRef<HTMLDivElement>(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef<HTMLDivElement>(null)
  const controlAnimation2 = useWhileInView(ref2)

  return (
    <section
      data-testid="data-integration-container"
      className="container mx-auto my-10 flex items-center justify-center gap-5 dark:bg-dark-300 lg:my-0">
      <motion.div initial="initial" ref={ref} animate={controlAnimation} variants={fadeUpAnimation}>
        <div className="relative h-[400px] w-[400px] overflow-hidden rounded-medium bg-gray-100 dark:bg-gray-700">
          <Image
            src="/images/integration/analytics-hero-light.png"
            alt="Analytics Dashboard"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/images/integration/analytics-hero-dark.png"
            alt="Analytics Dashboard"
            fill
            className="hidden object-contain dark:inline-block"
          />
        </div>
      </motion.div>

      <div className="flex flex-col gap-y-5">
        {integrationData.IntegrationData.map((item) => (
          <motion.figure
            key={item.id}
            initial="initial"
            ref={ref2}
            animate={controlAnimation2}
            variants={fadeUpAnimation}
            data-testid="integration-item">
            {item.image ? (
              <>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="inline-block rounded-medium shadow-nav dark:hidden"
                />
                <Image
                  src={item.image}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="hidden rounded-medium dark:inline-block"
                />
              </>
            ) : (
              <div className="h-8 w-8 rounded-medium bg-gray-100 dark:bg-gray-700">
                <span className="flex h-full items-center justify-center text-xs text-gray-400">Icon</span>
              </div>
            )}
            <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              {item.details}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
