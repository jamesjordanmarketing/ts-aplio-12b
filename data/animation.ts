import { Variants } from 'framer-motion'

export const fadeUpAnimation: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const fadeUpAnimationDelay: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
}

export const fadeFromLeftAnimation: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
}

export const fadeFromLeftAnimation2: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
}

export const fadeFromLeftAnimation3: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
}

export const fadeFromRightAnimation: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      once: true,
    },
  },
}

export const fadeFromRightAnimation2: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      once: true,
    },
  },
}

export const fadeFromRightAnimation3: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
      once: true,
    },
  },
}
