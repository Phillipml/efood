import { renderHook, act } from '@testing-library/react'
import { useContext } from 'react'
import { useTheme, useThemeState } from './useTheme'
import { $darkTheme, $lightTheme } from '@/styles/theme'

const mockThemeContext = {
  isDarkTheme: false,
  toggleTheme: jest.fn(),
  currentTheme: $lightTheme
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  createContext: jest.fn(() => ({
    Provider: ({ children }: { children: React.ReactNode }) => children,
    Consumer: ({
      children
    }: {
      children: (value: typeof mockThemeContext) => React.ReactNode
    }) => children(mockThemeContext)
  })),
  useContext: jest.fn(() => mockThemeContext)
}))

describe('useTheme Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('retorna contexto quando dentro do Provider', () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current).toEqual(mockThemeContext)
    expect(result.current.isDarkTheme).toBe(false)
    expect(result.current.toggleTheme).toBeDefined()
    expect(result.current.currentTheme).toBe($lightTheme)
  })

  it('lança erro quando usado fora do Provider', () => {
    jest.mocked(useContext).mockReturnValue(undefined)

    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within ThemeProvider')
  })

  it('retorna valores corretos do contexto', () => {
    const customContext = {
      isDarkTheme: true,
      toggleTheme: jest.fn(),
      currentTheme: $darkTheme
    }

    jest.mocked(useContext).mockReturnValue(customContext)

    const { result } = renderHook(() => useTheme())

    expect(result.current.isDarkTheme).toBe(true)
    expect(result.current.toggleTheme).toBe(customContext.toggleTheme)
    expect(result.current.currentTheme).toBe($darkTheme)
  })
})

describe('useThemeState Hook', () => {
  it('retorna isDarkTheme false por padrão', () => {
    const { result } = renderHook(() => useThemeState())

    expect(result.current.isDarkTheme).toBe(false)
  })

  it('retorna toggleTheme function', () => {
    const { result } = renderHook(() => useThemeState())

    expect(typeof result.current.toggleTheme).toBe('function')
  })

  it('retorna currentTheme correto', () => {
    const { result } = renderHook(() => useThemeState())

    expect(result.current.currentTheme).toBe($lightTheme)
  })

  it('toggleTheme muda isDarkTheme', () => {
    const { result } = renderHook(() => useThemeState())

    expect(result.current.isDarkTheme).toBe(false)

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.isDarkTheme).toBe(true)
  })

  it('currentTheme muda com isDarkTheme', () => {
    const { result } = renderHook(() => useThemeState())

    expect(result.current.currentTheme).toBe($lightTheme)

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.currentTheme).toBe($darkTheme)
  })
})
