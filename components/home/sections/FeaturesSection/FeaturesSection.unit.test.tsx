// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import FeaturesSection from './FeaturesSection'

describe('FeaturesSection Unit Tests', () => {
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

  it('renders all features', () => {
    render(<FeaturesSection features={testFeatures} />)

    expect(screen.getByText('Test Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Test Feature 2')).toBeInTheDocument()
    const cards = screen.getAllByTestId('feature-card')
    expect(cards).toHaveLength(2)
  })

  it('renders correct icons', () => {
    render(<FeaturesSection features={testFeatures} />)

    expect(screen.getByText('⭐')).toBeInTheDocument()
    expect(screen.getByText('🚀')).toBeInTheDocument()
  })
})