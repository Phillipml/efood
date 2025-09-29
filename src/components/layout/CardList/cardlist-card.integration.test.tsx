import { render, screen } from '@testing-library/react'
import CardList from './index'
import Card from '../../ui/Card'

const mockCardData = {
  image: 'https://via.placeholder.com/300x200',
  name: 'Test Restaurant',
  rating: 4.5,
  description: 'Test description',
  buttonTxt: 'Saiba Mais',
  isFeatured: true,
  foodType: 'Italiana'
}

const CardListCardIntegration = () => (
  <CardList>
    <Card {...mockCardData} />
  </CardList>
)

describe('CardList + Card Integration', () => {
  it('should render card inside cardlist', () => {
    render(<CardListCardIntegration />)
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('Saiba Mais')).toBeInTheDocument()
  })

  it('should display card image', () => {
    render(<CardListCardIntegration />)
    const image = screen.getByAltText('Test Restaurant image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockCardData.image)
  })

  it('should display rating when provided', () => {
    render(<CardListCardIntegration />)
    expect(screen.getByText('4.5')).toBeInTheDocument()
  })

  it('should display featured tag', () => {
    render(<CardListCardIntegration />)
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
  })

  it('should display food type tag', () => {
    render(<CardListCardIntegration />)
    expect(screen.getByText('Italiana')).toBeInTheDocument()
  })
})
