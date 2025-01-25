// @ts-check
/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'
import DataIntegration from './DataIntegration'

jest.mock('@/data/integrationData.json', () => ({
  IntegrationData: [
    {
      id: 1,
      image: '/images/figma.svg',
      title: 'Figma',
      details: 'Test integration details 1',
    },
    {
      id: 2,
      image: '/images/dropbox.svg',
      title: 'Dropbox',
      details: 'Test integration details 2',
    },
    {
      id: 3,
      image: '/images/twitter.svg',
      title: 'Twitter/X',
      details: 'Test integration details 3',
    },
    {
      id: 4,
      image: '/images/slack.svg',
      title: 'Slack',
      details: 'Test integration details 4',
    },
    {
      id: 5,
      image: '/images/google-drive.svg',
      title: 'Google Drive',
      details: 'Test integration details 5',
    },
    {
      id: 6,
      image: '/images/asana.svg',
      title: 'Asana',
      details: 'Test integration details 6',
    },
  ],
}))

describe('DataIntegration Unit Tests', () => {
  it('renders all integration images', () => {
    render(<DataIntegration />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(14) // 6 integrations * 2 images (light/dark) + 2 analytics images

    // Verify alt texts
    const figmaImages = screen.getAllByAltText('Figma')
    const dropboxImages = screen.getAllByAltText('Dropbox')
    expect(figmaImages).toHaveLength(2) // light and dark versions
    expect(dropboxImages).toHaveLength(2) // light and dark versions
  })

  it('renders integration details', () => {
    render(<DataIntegration />)

    const details = screen.getAllByText(/Test integration details/)
    expect(details).toHaveLength(6)
    expect(details[0].textContent).toBe('Test integration details 1')
    expect(details[1].textContent).toBe('Test integration details 2')
    expect(details[2].textContent).toBe('Test integration details 3')
    expect(details[3].textContent).toBe('Test integration details 4')
    expect(details[4].textContent).toBe('Test integration details 5')
    expect(details[5].textContent).toBe('Test integration details 6')
  })
})
