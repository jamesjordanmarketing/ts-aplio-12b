'use client'

import { type FC, useEffect, useRef, useState } from 'react'
import { statsConfig, type CounterConfig } from '@/app/data/statsData'

interface AnimatedCounterProps {
  number: number
  className?: string
}

const counterConfig: CounterConfig = statsConfig.counter

const AnimatedCounter: FC<AnimatedCounterProps> = ({ number, className }) => {
  const [count, setCount] = useState<number>(0)
  const [isInView, setIsInView] = useState<boolean>(false)
  const counterRef = useRef<HTMLSpanElement | null>(null)
  const hasAnimated = useRef<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true)
          hasAnimated.current = true
        }
      },
      {
        threshold: counterConfig.threshold,
        rootMargin: '50px 0px 0px 0px',
      },
    )

    const element = counterRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isInView && count < number) {
      const increment = Math.ceil((number - count) / 20)
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + increment
          return newCount >= number ? number : newCount
        })
      }, counterConfig.interval)

      return () => clearInterval(timer)
    }
  }, [count, isInView, number])

  return (
    <span className={className || counterConfig.styles.base} ref={counterRef}>
      {count}
    </span>
  )
}

export default AnimatedCounter
