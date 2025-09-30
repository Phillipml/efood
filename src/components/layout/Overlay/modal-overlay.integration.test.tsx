import { screen, fireEvent } from '@testing-library/react'
import Overlay from './index'
import Modal from '../../ui/Modal'
import { renderWithProviders } from '@/utils/__mocks__/render-utils'
import { useOverlay } from '@/hooks/useOverlay'

const ModalOverlayIntegration = () => {
  const [isShowing, setOverlay] = useOverlay()
  
  return (
    <>
      <button onClick={() => setOverlay()} data-testid="toggle-button">
        Toggle Modal
      </button>
      <Overlay $justifyContent="center">
        <Modal>
          <div>
            <h2>Modal Title</h2>
            <p>Modal content</p>
            <button onClick={() => setOverlay()}>Close</button>
          </div>
        </Modal>
      </Overlay>
    </>
  )
}

describe('Modal + Overlay Integration', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('should not render modal initially', () => {
    renderWithProviders(<ModalOverlayIntegration />)
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument()
  })

  it('should render modal inside overlay when opened', () => {
    renderWithProviders(<ModalOverlayIntegration />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('should close modal when close button is clicked', () => {
    renderWithProviders(<ModalOverlayIntegration />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    
    const closeButton = screen.getByText('Close')
    fireEvent.click(closeButton)
    
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument()
  })

  it('should close modal when overlay background is clicked', () => {
    renderWithProviders(<ModalOverlayIntegration />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    
    const overlay = screen.getByTestId('modal')
    fireEvent.click(overlay)
    
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument()
  })

  it('should not close modal when modal content is clicked', () => {
    renderWithProviders(<ModalOverlayIntegration />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    
    const modalContent = screen.getByText('Modal content')
    fireEvent.click(modalContent)
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument()
  })
})
