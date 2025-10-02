import { mockLightTheme } from './themes'

export const mockUseThemeState = {
  isDarkTheme: false,
  toggleTheme: jest.fn(),
  currentTheme: mockLightTheme
}

export const mockUseTheme = {
  currentTheme: mockLightTheme,
  toggleTheme: jest.fn()
}

export const mockNavigate = jest.fn()

export const mockUseLocation = {
  pathname: '/',
  search: '',
  hash: '',
  state: null,
  key: 'default'
}

export const mockUseOverlay = {
  currentOverlay: null,
  showModal: jest.fn(),
  showSideMenu: jest.fn(),
  hideOverlay: jest.fn(),
  isModalOpen: false,
  isSideMenuOpen: false
}

export const resetAllMocks = () => {
  mockUseThemeState.toggleTheme.mockClear()
  mockUseTheme.toggleTheme.mockClear()
  mockNavigate.mockClear()
  mockUseOverlay.showModal.mockClear()
  mockUseOverlay.showSideMenu.mockClear()
  mockUseOverlay.hideOverlay.mockClear()
}
