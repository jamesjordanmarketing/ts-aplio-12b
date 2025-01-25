// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import FeaturesSection from './FeaturesSection'

describe('FeaturesSection Integration Tests', () => {
  const testFeatures = [
    {
      id: '1',
      icon: '⭐',
      title: 'Test Feature 1',
      description: 'Test description 1',
    },
    {
      id: '2',
      icon: '🚀',
      title: 'Test Feature 2',
      description: 'Test description 2',
    },
  ]

  it('applies animation container', () => {
    const { container } = render(<FeaturesSection features={testFeatures} />)

    const animationContainer = container.querySelector('[data-testid="features-container"]')
    expect(animationContainer).toBeInTheDocument()
    expect(animationContainer).toHaveClass('grid')
  })

  it('renders with dark mode classes', () => {
    render(<FeaturesSection features={testFeatures} />)

    const descriptions = screen.getAllByText(/Test description/)
    descriptions.forEach((description) => {
      expect(description).toHaveClass('dark:text-gray-400')
    })
  })
})