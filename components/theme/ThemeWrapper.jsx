'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'

export default function ThemeWrapper({ children }) {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only applied after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}