import React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { $lightTheme, $darkTheme } from '@/styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'> & {
  theme?: typeof $lightTheme | typeof $darkTheme
  initialEntries?: string[]
  withRouter?: boolean
}

export const renderWithTheme = (
  ui: React.ReactElement,
  { theme = $lightTheme, ...renderOptions }: CustomRenderProps = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export const renderWithThemeAndRouter = (
  ui: React.ReactElement,
  {
    theme = $lightTheme,
    initialEntries = ['/'],
    ...renderOptions
  }: CustomRenderProps = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export const renderSimple = (
  ui: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  return render(ui, renderOptions)
}
