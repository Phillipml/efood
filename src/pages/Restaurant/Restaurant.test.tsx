import { screen, waitFor, act } from '@testing-library/react'
import Restaurant from './index'
import { renderWithProviders } from '@/utils/__mocks__/render-utils'
import CheckoutProvider from '@/providers/CheckoutProvider'

const mockData = {
  id: 1,
  titulo: 'Restaurante Teste',
  tipo: 'japonês',
  capa: 'test.jpg',
  destacado: true,
  avaliacao: 4.5,
  descricao: 'Restaurante de teste',
  cardapio: [
    {
      id: 1,
      nome: 'Sushi',
      descricao: 'Sushi delicioso',
      foto: 'sushi.jpg',
      preco: 25.9,
      porcao: '8 peças'
    },
    {
      id: 2,
      nome: 'Temaki',
      descricao: 'Temaki fresco',
      foto: 'temaki.jpg',
      preco: 18.5,
      porcao: '1 unidade'
    }
  ]
}

jest.mock('@/services/api', () => ({
  GetData: jest.fn(() => Promise.resolve([mockData]))
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' })
}))

global.alert = jest.fn()

describe('Restaurant Page', () => {

  it('mostra cards após carregar', async () => {
    await act(async () => {
      renderWithProviders(
        <CheckoutProvider>
          <Restaurant />
        </CheckoutProvider>
      )
    })

    await waitFor(() => {
      expect(screen.queryByTestId('loading-container')).not.toBeInTheDocument()
    })

    expect(screen.getByText('Sushi')).toBeInTheDocument()
    expect(screen.getByText('Temaki')).toBeInTheDocument()
  })

  it('mostra título do restaurante', async () => {
    await act(async () => {
      renderWithProviders(
        <CheckoutProvider>
          <Restaurant />
        </CheckoutProvider>
      )
    })

    await waitFor(() => {
      expect(screen.getByText('Restaurante Teste')).toBeInTheDocument()
    })
  })

  it('mostra botões de adicionar ao carrinho', async () => {
    await act(async () => {
      renderWithProviders(
        <CheckoutProvider>
          <Restaurant />
        </CheckoutProvider>
      )
    })

    await waitFor(() => {
      expect(screen.queryByTestId('loading-container')).not.toBeInTheDocument()
    })

    const buttons = screen.getAllByText('Adicionar ao Carrinho')
    expect(buttons).toHaveLength(2)
  })
})
