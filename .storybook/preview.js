import '../app/globals.css'
import { ThemeProvider } from 'next-themes'

export const decorators = [
  (Story) => (
    <ThemeProvider attribute="class">
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}