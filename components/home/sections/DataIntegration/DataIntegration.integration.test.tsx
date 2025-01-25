// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import DataIntegration from './DataIntegration'

/**
 * Integration tests for DataIntegration component
 *
 * These tests verify the component's integration with:
 * - Animation framework
 * - Dark mode theming
 * - Responsive layout classes
 */
describe('DataIntegration Integration Tests', () => {
  /**
   * Verifies the animation container is properly applied
   * - Checks for presence of container element
   * - Validates container classes
   */
  it('applies animation container', () => {
    const { container } = render(<DataIntegration />)
    const animationContainer = container.querySelector('[data-testid="data-integration-container"]')
    expect(animationContainer).toBeInTheDocument()
    expect(animationContainer).toHaveClass('container')
  })

  /**
   * Verifies dark mode classes are properly applied
   * - Checks for dark mode text color classes
   * - Validates class application on integration items
   */
  it('renders with dark mode classes', () => {
    render(<DataIntegration />)
    const items = screen.getAllByTestId('integration-item')
    items.forEach((item) => {
      const caption = item.querySelector('figcaption')
      expect(caption).toHaveClass('dark:text-gray-400')
    })
  })

  /**
   * Verifies responsive padding classes are properly applied
   * - Checks for mobile and desktop padding classes
   * - Validates responsive breakpoint behavior
   */
  it('has responsive padding classes', () => {
    const { container } = render(<DataIntegration />)
    const section = container.querySelector('[data-testid="data-integration-container"]')
    expect(section).toHaveClass('my-10')
    expect(section).toHaveClass('lg:my-0')
  })
})
