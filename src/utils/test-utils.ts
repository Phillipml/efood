export {
  renderWithTheme,
  renderWithThemeAndRouter,
  renderSimple
} from './__mocks__/render-utils'

export {
  screen,
  fireEvent,
  waitFor,
  act,
  cleanup,
  renderHook,
  waitForElementToBeRemoved
} from '@testing-library/react'

export {
  mockUseThemeState,
  mockUseTheme,
  mockNavigate,
  mockUseLocation,
  resetAllMocks
} from './__mocks__/hooks'

export {
  MockHeader,
  MockFooter,
  MockCardList,
  MockThemeButton,
  MockRoutesApp,
  MockGlobalStyle,
  MockRestaurantHeader
} from './__mocks__/components'

export { mockReactRouter } from './__mocks__/router'
