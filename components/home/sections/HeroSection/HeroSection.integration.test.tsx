// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'

describe('HeroSection Integration Tests', () => {
  it('applies animation container', () => {
    const { container } = render(<HeroSection />)
    const animationContainer = container.querySelector('[data-testid="hero-container"]')
    expect(animationContainer).toBeInTheDocument()
    expect(animationContainer).toHaveClass('container')
  })

  it('renders with dark mode classes', () => {
    render(<HeroSection />)
    const description = screen.getByText(
      'Transform your business with our advanced analytics and data integration solutions',
    )
    expect(description).toHaveClass('dark:text-gray-400')
  })

  it('has responsive padding classes', () => {
    const { container } = render(<HeroSection />)
    const section = container.querySelector('[data-testid="hero-container"]')
    expect(section).toHaveClass('py-20')
  })
})