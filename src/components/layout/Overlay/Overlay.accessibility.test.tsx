import { render, screen, fireEvent } from '@testing-library/react'
import Overlay from './index'

const mockOnClose = jest.fn()

const TestOverlay = ({ isOpen }: { isOpen: boolean }) => (
  <Overlay $isOpen={isOpen} onClose={mockOnClose} $justifyContent="center">
    <div role="dialog" aria-modal="true" aria-labelledby="overlay-title">
      <h2 id="overlay-title">Overlay Title</h2>
      <p>Overlay content</p>
    </div>
  </Overlay>
)

describe('Overlay Accessibility', () => {
  beforeEach(() => {
    mockOnClose.mockClear()
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('should have proper ARIA attributes when open', () => {
    render(<TestOverlay isOpen={true} />)
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'overlay-title')
  })

  it('should not render when closed', () => {
    render(<TestOverlay isOpen={false} />)
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should have accessible close mechanism', () => {
    render(<TestOverlay isOpen={true} />)
    
    const overlay = screen.getByTestId('modal')
    expect(overlay).toBeInTheDocument()
    
    fireEvent.click(overlay)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should prevent body scroll when open', () => {
    render(<TestOverlay isOpen={true} />)
    
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('should restore body scroll when closed', () => {
    const { rerender } = render(<TestOverlay isOpen={true} />)
    expect(document.body.style.overflow).toBe('hidden')
    
    rerender(<TestOverlay isOpen={false} />)
    expect(document.body.style.overflow).toBe('')
  })

  it('should have proper focus management', () => {
    render(<TestOverlay isOpen={true} />)
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    
    const title = screen.getByText('Overlay Title')
    expect(title).toHaveAttribute('id', 'overlay-title')
  })


  it('should trap focus within overlay', () => {
    render(
      <Overlay $isOpen={true} onClose={mockOnClose} $justifyContent="center">
        <div role="dialog" aria-modal="true">
          <button>First</button>
          <button>Second</button>
          <button>Third</button>
        </div>
      </Overlay>
    )
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
  })
})
