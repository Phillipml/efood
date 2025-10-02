import { screen, fireEvent } from '@testing-library/react'
import Modal from '../../ui/Modal'
import { renderWithProviders } from '@/utils/__mocks__/render-utils'
import { useOverlay } from '@/hooks/useOverlay'
import { useState } from 'react'
import type { Menu } from '@/types'

const mockItem: Menu = {
  id: 1,
  nome: 'Modal Title',
  descricao: 'Modal content',
  porcao: 'Test Portion',
  preco: 10.50,
  foto: 'test-image.jpg'
}

const ModalOverlayIntegration = () => {
  const { showModal } = useOverlay()
  const [modalItem, setModalItem] = useState<Menu | null>(null)
  
  const handleToggleModal = () => {
    if (modalItem) {
      setModalItem(null)
    } else {
      setModalItem(mockItem)
      showModal()
    }
  }
  
  return (
    <>
      <button onClick={handleToggleModal} data-testid="toggle-button">
        Toggle Modal
      </button>
      <Modal 
        item={modalItem} 
        onAddToCart={() => setModalItem(null)} 
      />
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
    expect(screen.getByText(/Modal content/)).toBeInTheDocument()
  })

  it('should close modal when close button is clicked', () => {
    renderWithProviders(<ModalOverlayIntegration />)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    
    const closeButton = screen.getAllByRole('button')[0]
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
    
    const modalContent = screen.getByText(/Modal content/)
    fireEvent.click(modalContent)
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument()
  })
})
