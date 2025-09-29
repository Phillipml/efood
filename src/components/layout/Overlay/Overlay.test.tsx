import { render, screen, fireEvent } from '@testing-library/react'
import Overlay from './index'

const mockOnClose = jest.fn()

const TestComponent = ({ isOpen }: { isOpen: boolean }) => (
  <Overlay $isOpen={isOpen} onClose={mockOnClose} $justifyContent="center">
    <div data-testid="overlay-content">Test Content</div>
  </Overlay>
)

describe('Overlay', () => {
  beforeEach(() => {
    mockOnClose.mockClear()
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('should render when isOpen is true', () => {
    render(<TestComponent isOpen={true} />)
    expect(screen.getByTestId('overlay-content')).toBeInTheDocument()
  })

  it('should not render when isOpen is false', () => {
    render(<TestComponent isOpen={false} />)
    expect(screen.queryByTestId('overlay-content')).not.toBeInTheDocument()
  })

  it('should call onClose when overlay is clicked', () => {
    render(<TestComponent isOpen={true} />)
    const overlay = screen.getByTestId('modal')
    fireEvent.click(overlay)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should not call onClose when content is clicked', () => {
    render(<TestComponent isOpen={true} />)
    const content = screen.getByTestId('overlay-content')
    fireEvent.click(content)
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('should set body overflow hidden when opened', () => {
    render(<TestComponent isOpen={true} />)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('should reset body overflow when closed', () => {
    const { rerender } = render(<TestComponent isOpen={true} />)
    expect(document.body.style.overflow).toBe('hidden')
    
    rerender(<TestComponent isOpen={false} />)
    expect(document.body.style.overflow).toBe('')
  })
})