// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'

describe('HeroSection Unit Tests', () => {
  it('renders main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText('Next-Gen Data Solutions')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<HeroSection />)
    expect(
      screen.getByText('Transform your business with our advanced analytics and data integration solutions'),
    ).toBeInTheDocument()
  })

  it('has correct container class', () => {
    render(<HeroSection />)
    const container = screen.getByTestId('hero-container')
    expect(container).toHaveClass('container')
    expect(container).toHaveClass('mx-auto')
    expect(container).toHaveClass('py-20')
  })

  it('has animation wrapper', () => {
    render(<HeroSection />)
    const animationWrapper = screen.getByTestId('hero-container').firstChild
    expect(animationWrapper).toHaveClass('text-center')
  })
})