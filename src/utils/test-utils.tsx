import { $darkTheme } from '@/styles/theme'
import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(<ThemeProvider theme={$darkTheme}>{ui}</ThemeProvider>, renderOptions)

export {screen, fireEvent,waitFor,act,cleanup,renderHook,waitForElementToBeRemoved} from '@testing-library/react'
export { customRender as render }
