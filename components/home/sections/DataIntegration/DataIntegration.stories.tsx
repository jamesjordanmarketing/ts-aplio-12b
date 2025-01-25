import type { Meta, StoryObj } from '@storybook/react'
import DataIntegration from './DataIntegration'

const meta: Meta<typeof DataIntegration> = {
  title: 'Sections/DataIntegration',
  component: DataIntegration,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DataIntegration>

export const Default: Story = {
  args: {},
}
