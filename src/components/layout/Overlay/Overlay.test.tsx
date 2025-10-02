import { screen, fireEvent } from '@testing-library/react'
import Overlay from './index'
import { renderWithProviders } from '@/utils/__mocks__/render-utils'
import { useOverlay } from '@/hooks/useOverlay'

const TestComponent = () => {
  const { showModal } = useOverlay()
  
  return (
    <>
      <button onClick={() => showModal()} data-testid="toggle-button">
        Toggle Overlay
      </button>
      <Overlay $justifyContent="center" type="modal">
        <div data-testid="overlay-content">Test Content</div>
      </Overlay>
    </>
  )
}

describe('Overlay', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('should not render initially', () => {
    renderWithProviders(<TestComponent />)
    expect(screen.queryByTestId('overlay-content')).not.toBeInTheDocument()
  })

  it('should render when opened', () => {
    renderWithProviders(<TestComponent />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('overlay-content')).toBeInTheDocument()
  })

  it('should close when overlay is clicked', () => {
    renderWithProviders(<TestComponent />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('overlay-content')).toBeInTheDocument()
    
    const overlay = screen.getByTestId('modal')
    fireEvent.click(overlay)
    expect(screen.queryByTestId('overlay-content')).not.toBeInTheDocument()
  })

  it('should not close when content is clicked', () => {
    renderWithProviders(<TestComponent />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    
    const content = screen.getByTestId('overlay-content')
    fireEvent.click(content)
    expect(screen.getByTestId('overlay-content')).toBeInTheDocument()
  })

  it('should set body overflow hidden when opened', () => {
    renderWithProviders(<TestComponent />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('should reset body overflow when closed', () => {
    renderWithProviders(<TestComponent />)
    const toggleButton = screen.getByTestId('toggle-button')
    
    fireEvent.click(toggleButton)
    expect(document.body.style.overflow).toBe('hidden')
    
    const overlay = screen.getByTestId('modal')
    fireEvent.click(overlay)
    expect(document.body.style.overflow).toBe('')
  })
})