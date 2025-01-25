// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import DataIntegration from './DataIntegration'

describe('DataIntegration Unit Tests', () => {
  it('renders main container', () => {
    render(<DataIntegration />)
    const container = screen.getByTestId('data-integration-container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('container')
  })

  it('renders hero images', () => {
    render(<DataIntegration />)
    const lightImage = screen.getByAltText('Analytics Dashboard')
    const darkImage = screen.getByAltText('Analytics Dashboard')
    expect(lightImage).toBeInTheDocument()
    expect(darkImage).toBeInTheDocument()
  })

  it('renders integration items', () => {
    render(<DataIntegration />)
    const items = screen.getAllByTestId('integration-item')
    expect(items.length).toBeGreaterThan(0)
  })
})