'use client'

import { type FC, useRef } from 'react'
import { motion, type AnimationControls } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'

// Import images using relative paths
import analyticsDark2 from '../../../public/images/integration/analytics-hero-dark-2.png'
import analyticsDark3 from '../../../public/images/integration/analytics-hero-dark-3.png'
import analyticsDark from '../../../public/images/integration/analytics-hero-dark.png'
import analyticsLight2 from '../../../public/images/integration/analytics-hero-light-2.png'
import analyticsLight3 from '../../../public/images/integration/analytics-hero-light-3.png'
import analyticsLight from '../../../public/images/integration/analytics-hero-light.png'

interface AnimatedImageProps {
  lightSrc: StaticImageData
  darkSrc: StaticImageData
  alt: string
  controlAnimation: AnimationControls
}

const AnimatedImage: FC<AnimatedImageProps> = ({ lightSrc, darkSrc, alt, controlAnimation }) => {
  return (
    <motion.div initial="initial" animate={controlAnimation} variants={fadeUpAnimation}>
      <Image
        src={lightSrc}
        alt={alt}
        className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
        priority={alt.includes('hero')}
      />
      <Image
        src={darkSrc}
        alt={alt}
        className="hidden h-auto w-auto rounded-medium dark:inline-block"
        priority={alt.includes('hero')}
      />
    </motion.div>
  )
}

const DataIntegration: FC = () => {
  const ref1 = useRef<HTMLDivElement>(null)
  const control1 = useWhileInView(ref1)
  const ref2 = useRef<HTMLDivElement>(null)
  const control2 = useWhileInView(ref2)
  const ref3 = useRef<HTMLDivElement>(null)
  const control3 = useWhileInView(ref3)

  return (
    <section className="container mx-auto my-10 flex items-center justify-center gap-5 dark:bg-dark-300 lg:my-0">
      <div ref={ref1}>
        <AnimatedImage
          lightSrc={analyticsLight}
          darkSrc={analyticsDark}
          alt="Analytics hero visualization"
          controlAnimation={control1}
        />
      </div>

      <div className="flex flex-col gap-y-5">
        <div ref={ref2}>
          <AnimatedImage
            lightSrc={analyticsLight2}
            darkSrc={analyticsDark2}
            alt="Analytics data chart"
            controlAnimation={control2}
          />
        </div>
        <div ref={ref3}>
          <AnimatedImage
            lightSrc={analyticsLight3}
            darkSrc={analyticsDark3}
            alt="Analytics metrics display"
            controlAnimation={control3}
          />
        </div>
      </div>
    </section>
  )
}

export default DataIntegration
