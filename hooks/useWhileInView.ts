import { useAnimation, useInView, AnimationControls } from 'framer-motion'
import { useEffect, RefObject } from 'react'

type ValidElement = HTMLElement | HTMLFigureElement | HTMLDivElement

const useWhileInView = (ref: RefObject<ValidElement>): AnimationControls => {
  const inInView = useInView(ref, { once: true })
  const controlAnimation = useAnimation()

  useEffect(() => {
    if (inInView) {
      controlAnimation.start('animate')
    }
  }, [inInView, controlAnimation])

  return controlAnimation
}

export default useWhileInView
