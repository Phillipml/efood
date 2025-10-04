import { screen, fireEvent } from '@testing-library/react'
import Modal from './index'
import { renderWithProviders } from '@/utils/__mocks__/render-utils'
import { useOverlay } from '@/hooks/useOverlay'

jest.mock('@/hooks/useOverlay')
const mockUseOverlay = useOverlay as jest.MockedFunction<typeof useOverlay>

const mockItem = {
  id: 1,
  nome: 'Test Item',
  descricao: 'Test Description',
  porcao: 'Test Portion',
  preco: 10.50,
  foto: 'test-image.jpg'
}

const TestModal = () => {
  return (
    <Modal 
      item={mockItem} 
      onAddToCart={jest.fn()} 
    />
  )
}

describe('Modal', () => {
  beforeEach(() => {      
    document.body.innerHTML = '<div id="root"></div>'
    
    mockUseOverlay.mockReturnValue({
      currentOverlay: 'modal',
      showModal: jest.fn(),
      showSideMenu: jest.fn(),
      hideOverlay: jest.fn(),
      isModalOpen: true,
      isSideMenuOpen: false
    })
  })

  it('should render item information correctly', () => {
    renderWithProviders(<TestModal />)

    expect(screen.getByText('Test Item')).toBeInTheDocument()
    expect(screen.getByText(/Test Description/)).toBeInTheDocument()
    expect(screen.getByText(/Test Portion/)).toBeInTheDocument()
  })

  it('should render close button', () => {
    renderWithProviders(<TestModal />)

    expect(screen.getAllByRole('button')).toHaveLength(2)   
  })

  it('should call hideOverlay when close button is clicked', () => {
    const mockHideOverlay = jest.fn()
    mockUseOverlay.mockReturnValue({
      currentOverlay: 'modal',
      showModal: jest.fn(),
      showSideMenu: jest.fn(),
      hideOverlay: mockHideOverlay,
      isModalOpen: true,
      isSideMenuOpen: false
    })

    renderWithProviders(<TestModal />)

    const closeButton = screen.getAllByRole('button')[0] 
    fireEvent.click(closeButton)
    
    expect(mockHideOverlay).toHaveBeenCalled()
  })

  it('should call onAddToCart when add to cart button is clicked', () => {
    const mockOnAddToCart = jest.fn()
    
    renderWithProviders(
      <Modal 
        item={mockItem} 
        onAddToCart={mockOnAddToCart} 
      />
    )

    const addToCartButton = screen.getByText(/Adicionar ao carrinho/)
    fireEvent.click(addToCartButton)
    
    expect(mockOnAddToCart).toHaveBeenCalled()
  })

  it('should not render when item is null', () => {
    renderWithProviders(
      <Modal 
        item={null} 
        onAddToCart={jest.fn()} 
      />
    )

    expect(screen.queryByText('Test Item')).not.toBeInTheDocument()
  })
})
