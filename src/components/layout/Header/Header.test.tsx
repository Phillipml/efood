import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import Header from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (
  component: React.ReactElement,
  initialEntries = ['/']
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  )
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  })
}))

describe('Header Component', () => {
  it('renderiza HeaderWrapper', () => {
    renderWithTheme(<Header />)
    const headerWrapper = screen.getByRole('banner')
    expect(headerWrapper).toBeInTheDocument()
  })

  it('renderiza Container', () => {
    renderWithTheme(<Header />)
    const container = screen.getByRole('banner').firstChild
    expect(container).toBeInTheDocument()
  })

  it('renderiza Logo', () => {
    renderWithTheme(<Header />)
    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('renderiza Text com conteúdo correto', () => {
    renderWithTheme(<Header />)
    expect(
      screen.getByText(/Viva experiências gastronômicas/)
    ).toBeInTheDocument()
    expect(screen.getByText(/no conforto da sua casa/)).toBeInTheDocument()
  })

  it('renderiza em rota home', () => {
    renderWithTheme(<Header />, ['/'])
    expect(
      screen.getByText(/Viva experiências gastronômicas/)
    ).toBeInTheDocument()
  })

  it('renderiza corretamente em rota home', () => {
    renderWithTheme(<Header />, ['/'])
    expect(
      screen.getByText(/Viva experiências gastronômicas/)
    ).toBeInTheDocument()
    expect(screen.getByText(/no conforto da sua casa/)).toBeInTheDocument()
  })
})
