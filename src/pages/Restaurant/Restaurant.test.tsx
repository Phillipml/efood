import { screen } from '@testing-library/react'
import Restaurant from './index'
import { renderWithThemeAndRouter } from '@/utils/test-utils'

jest.mock('@/services/api', () => ({
  GetData: jest.fn(() => Promise.resolve([
    {
      id: 1,
      titulo: 'Test Restaurant',
      tipo: 'japonês',
      capa: 'test.jpg',
      cardapio: [
        { id: 1, nome: 'Sushi', descricao: 'Delicious sushi', foto: 'sushi.jpg', preco: 25.90, porcao: '8 peças' },
        { id: 2, nome: 'Temaki', descricao: 'Fresh temaki', foto: 'temaki.jpg', preco: 18.50, porcao: '1 unidade' },
        { id: 3, nome: 'Sashimi', descricao: 'Fresh sashimi', foto: 'sashimi.jpg', preco: 32.00, porcao: '12 peças' },
        { id: 4, nome: 'Combo', descricao: 'Complete combo', foto: 'combo.jpg', preco: 45.90, porcao: '1 pessoa' }
      ]
    }
  ]))
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' })
}))

describe('Restaurant Page', () => {
  it('should render loading state initially', () => {
    renderWithThemeAndRouter(<Restaurant />)
    expect(screen.getByTestId('loading-container')).toBeInTheDocument()
  })

  it('should render cards after loading', async () => {
    renderWithThemeAndRouter(<Restaurant />)
    
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const buttons = screen.getAllByText('Adicionar ao Carrinho')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should render hero component', async () => {
    renderWithThemeAndRouter(<Restaurant />)
    
    await new Promise(resolve => setTimeout(resolve, 100))
    
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument()
  })

  it('should display card information correctly', async () => {
    renderWithThemeAndRouter(<Restaurant />)
    
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const buttons = screen.getAllByText('Adicionar ao Carrinho')
    expect(buttons).toHaveLength(4)
  })
})
