'use client'

import { type FC } from 'react'
import { HeroDarkShapeSVG, HeroLightShapeSVG } from '@/data/svgImages'
import FadeUpAnimation from '@/components/animations/FadeUpAnimation'

interface HeroContentProps {}

const HeroContent: FC<HeroContentProps> = () => (
  <div className="relative z-10 text-center">
    <p className="mb-8 font-medium uppercase max-lg:mb-4">50K+ TRUSTED BUSINESSES</p>
    <h1 className="mb-12 max-md:mb-8">
      Presenting the forefront of <br /> product analysis.
    </h1>
    <p className="mx-auto mb-12 max-w-[590px] max-md:mb-8">
      Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin though,
      it looks like it
    </p>
    <div className="mx-auto flex flex-col items-center justify-center gap-4 md:flex-row">
      <button className="btn">Get Started</button>
      <button className="btn-outline px-1">Get a Demo</button>
    </div>
  </div>
)

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => (
  <section
    className="max-mb:pb-[70px] relative overflow-hidden pb-20 pt-[230px] dark:bg-dark-300 max-lg:pb-25 max-lg:pt-[160px]"
    id="scene">
    <div className="to{-48.41%} absolute left-0 top-0 h-full max-h-[400px] w-full bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-[#F3FDD9] from-[-2.27%] to-[#F3FDD9]/10 dark:hidden" />
    <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 max-lg:hidden">
      <HeroLightShapeSVG />
    </div>
    <div className="absolute bottom-0 left-0 w-full lg:hidden">
      <HeroDarkShapeSVG />
    </div>
    <FadeUpAnimation className="container">
      <HeroContent />
    </FadeUpAnimation>
  </section>
)

export default HeroSection
