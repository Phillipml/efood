import { render, screen, fireEvent } from '@testing-library/react'
import Overlay from './index'
import Modal from '../../ui/Modal'

const mockOnClose = jest.fn()

const ModalOverlayIntegration = ({ isOpen }: { isOpen: boolean }) => (
  <Overlay $isOpen={isOpen} onClose={mockOnClose} $justifyContent="center">
    <Modal>
      <div>
        <h2>Modal Title</h2>
        <p>Modal content</p>
        <button onClick={mockOnClose}>Close</button>
      </div>
    </Modal>
  </Overlay>
)

describe('Modal + Overlay Integration', () => {
  beforeEach(() => {
    mockOnClose.mockClear()
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('should render modal inside overlay when open', () => {
    render(<ModalOverlayIntegration isOpen={true} />)
    expect(screen.getByText('Modal Title')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('should close modal when close button is clicked', () => {
    render(<ModalOverlayIntegration isOpen={true} />)
    const closeButton = screen.getByText('Close')
    fireEvent.click(closeButton)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should close modal when overlay background is clicked', () => {
    render(<ModalOverlayIntegration isOpen={true} />)
    const overlay = screen.getByTestId('modal')
    fireEvent.click(overlay)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should not close modal when modal content is clicked', () => {
    render(<ModalOverlayIntegration isOpen={true} />)
    const modalContent = screen.getByText('Modal content')
    fireEvent.click(modalContent)
    expect(mockOnClose).not.toHaveBeenCalled()
  })
})
