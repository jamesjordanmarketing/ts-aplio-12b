'use client'

import { fadeFromRightAnimation3, fadeUpAnimation } from '@/data/animation'
import { faqImages } from '@/app/data/faqData'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'

const AnimatedFAQImages: React.FC = () => {
  const figureRef = useRef<HTMLElement>(null)
  const shapeRef = useRef<HTMLDivElement>(null)
  const figureAnimation = useWhileInView(figureRef)
  const shapeAnimation = useWhileInView(shapeRef)

  return (
    <div className="relative flex items-center justify-end max-lg:mb-25 max-lg:justify-center md:mt-12">
      <motion.figure ref={figureRef} initial="initial" animate={figureAnimation} variants={fadeUpAnimation}>
        <Image
          src={faqImages.light.main}
          alt="FAQ illustration"
          className="max-w-[350px] dark:hidden sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px]"
          width={420}
          height={400}
          priority
        />
        <Image
          src={faqImages.dark.main}
          alt="FAQ illustration - dark theme"
          className="hidden max-w-[350px] dark:inline-block sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px]"
          width={420}
          height={400}
          priority
        />
      </motion.figure>
      <motion.div
        className="absolute -bottom-20 -right-5 left-auto top-auto max-w-[250px] md:right-15 lg:-bottom-25 lg:-right-15 xl:-bottom-150 xl:-right-25 xl:max-w-[344px]"
        ref={shapeRef}
        initial="initial"
        animate={shapeAnimation}
        variants={fadeFromRightAnimation3}>
        <Image src={faqImages.light.shape} alt="Decorative shape" className="dark:hidden" width={344} height={300} />
        <Image
          src={faqImages.dark.shape}
          alt="Decorative shape - dark theme"
          className="hidden dark:inline-block"
          width={344}
          height={300}
        />
      </motion.div>
    </div>
  )
}

export default AnimatedFAQImages
