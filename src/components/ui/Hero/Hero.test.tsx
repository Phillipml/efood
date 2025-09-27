import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './index'
import { GetData } from '@/services/api'
import type { RestaurantList } from '@/types'

const mockUseParams = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => mockUseParams()
}))

jest.mock('@/services/api', () => ({
  GetData: jest.fn()
}))
jest.mock('../Text', () => {
  return function MockText({ children, as, $lgFontSize, ...props }: any) {
    const Component = as || 'p'
    return (
      <Component data-testid="text" data-font-size={$lgFontSize} {...props}>
        {children}
      </Component>
    )
  }
})

const mockRestaurantData: RestaurantList[] = [
  {
    id: 1,
    titulo: 'Restaurante Teste',
    destacado: true,
    tipo: 'italiana',
    avaliacao: 4.5,
    descricao: 'Descrição do restaurante',
    capa: 'https://example.com/capa.jpg',
    cardapio: []
  },
  {
    id: 2,
    titulo: 'Outro Restaurante',
    destacado: false,
    tipo: 'japonesa',
    avaliacao: 4.2,
    descricao: 'Outra descrição',
    capa: 'https://example.com/capa2.jpg',
    cardapio: []
  }
]

const renderHero = (mockParams = { id: '1' }) => {
  mockUseParams.mockReturnValue(mockParams)

  return render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  )
}

describe('Hero Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(GetData as jest.Mock).mockResolvedValue(mockRestaurantData)
  })

  it('deve renderizar o componente Hero corretamente', async () => {
    renderHero()

    await waitFor(() => {
      expect(screen.getByAltText('capa Restaurante Teste')).toBeInTheDocument()
    })
  })

  it('deve buscar e exibir dados do restaurante baseado no ID da URL', async () => {
    renderHero({ id: '1' })

    await waitFor(() => {
      expect(GetData).toHaveBeenCalledTimes(1)
      expect(screen.getByText('Italiana')).toBeInTheDocument()
      // O título é renderizado como elemento title no head
      expect(document.title).toBe('Restaurante Teste')
    })
  })

  it('deve formatar o tipo do restaurante corretamente (primeira letra maiúscula)', async () => {
    renderHero({ id: '1' })

    await waitFor(() => {
      expect(screen.getByText('Italiana')).toBeInTheDocument()
    })
  })

  it('deve exibir imagem do restaurante com alt text correto', async () => {
    renderHero({ id: '1' })

    await waitFor(() => {
      const image = screen.getByAltText('capa Restaurante Teste')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', 'https://example.com/capa.jpg')
    })
  })

  it('deve mostrar display block na imagem quando carregada', async () => {
    renderHero({ id: '1' })

    await waitFor(() => {
      const image = screen.getByAltText('capa Restaurante Teste')
      expect(image).toBeInTheDocument()
    })

    const image = screen.getByAltText('capa Restaurante Teste')

    const mockStyle = { display: 'none' }
    Object.defineProperty(image, 'style', {
      value: mockStyle,
      writable: true
    })

    const loadEvent = new Event('load')
    Object.defineProperty(loadEvent, 'currentTarget', {
      value: image,
      writable: false
    })

    image.dispatchEvent(loadEvent)

    expect(mockStyle.display).toBe('block')
  })

  it('deve renderizar com restaurante não encontrado', async () => {
    renderHero({ id: '999' })

    await waitFor(() => {
      expect(screen.queryByText('Restaurante Teste')).not.toBeInTheDocument()
    })
  })

  it('deve lidar com tipo de restaurante undefined', async () => {
    const mockDataWithUndefinedType = [
      {
        ...mockRestaurantData[0],
        tipo: undefined
      }
    ]
    ;(GetData as jest.Mock).mockResolvedValue(mockDataWithUndefinedType)

    renderHero({ id: '1' })

    await waitFor(() => {
      expect(document.title).toBe('Restaurante Teste')
      const textElements = screen.getAllByTestId('text')
      expect(textElements[0]).toHaveTextContent('')
    })
  })

  it('deve renderizar sem dados quando API retorna array vazio', async () => {
    ;(GetData as jest.Mock).mockResolvedValue([])

    renderHero({ id: '1' })

    await waitFor(() => {
      expect(screen.getByAltText('capa undefined')).toBeInTheDocument()
    })
  })

  it('deve atualizar quando o ID da URL muda', async () => {
    const { rerender } = renderHero({ id: '1' })

    await waitFor(() => {
      expect(screen.getByText('Italiana')).toBeInTheDocument()
    })

    mockUseParams.mockReturnValue({ id: '2' })

    rerender(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Japonesa')).toBeInTheDocument()
      expect(document.title).toBe('Outro Restaurante')
    })
  })

  it('deve renderizar os componentes Text com as props corretas', async () => {
    renderHero({ id: '1' })

    await waitFor(() => {
      const textElements = screen.getAllByTestId('text')
      expect(textElements.length).toBeGreaterThanOrEqual(1)
      expect(textElements[0]).toHaveAttribute('data-font-size', 'xl')
      if (textElements[1]) {
        expect(textElements[1]).toHaveAttribute('data-font-size', 'xl')
      }
    })
  })

  it('deve formatar tipo em maiúsculo corretamente', async () => {
    const mockDataWithUppercaseType = [
      { ...mockRestaurantData[0], tipo: 'FRANCESA' }
    ]
    ;(GetData as jest.Mock).mockResolvedValue(mockDataWithUppercaseType)

    renderHero({ id: '1' })

    await waitFor(() => {
      expect(screen.getByText('Francesa')).toBeInTheDocument()
    })
  })

  it('deve formatar tipo em minúsculo corretamente', async () => {
    const mockDataWithLowercaseType = [
      { ...mockRestaurantData[0], tipo: 'brasileira' }
    ]
    ;(GetData as jest.Mock).mockResolvedValue(mockDataWithLowercaseType)

    renderHero({ id: '1' })

    await waitFor(() => {
      expect(screen.getByText('Brasileira')).toBeInTheDocument()
    })
  })
})
