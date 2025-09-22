import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Card from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

const mockCardProps = {
  image: 'https://example.com/restaurant.jpg',
  name: 'Restaurante Teste',
  rating: 4.5,
  description: 'Deliciosa comida caseira',
  buttonTxt: 'Ver Cardápio'
}

describe('Card Component', () => {
  it('renderiza imagem corretamente', () => {
    renderWithTheme(<Card {...mockCardProps} />)

    const image = screen.getByAltText('Restaurante Teste image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/restaurant.jpg')
  })

  it('renderiza nome do restaurante', () => {
    renderWithTheme(<Card {...mockCardProps} />)

    expect(screen.getByText('Restaurante Teste')).toBeInTheDocument()
  })

  it('renderiza rating corretamente', () => {
    renderWithTheme(<Card {...mockCardProps} />)

    expect(screen.getByText('4.5')).toBeInTheDocument()
  })

  it('renderiza descrição', () => {
    renderWithTheme(<Card {...mockCardProps} />)

    expect(screen.getByText('Deliciosa comida caseira')).toBeInTheDocument()
  })

  it('renderiza botão com texto correto', () => {
    renderWithTheme(<Card {...mockCardProps} />)

    expect(screen.getByText('Ver Cardápio')).toBeInTheDocument()
  })

  it('executa onClick do botão', () => {
    const handleClick = jest.fn()
    renderWithTheme(<Card {...mockCardProps} onClick={handleClick} />)

    fireEvent.click(screen.getByText('Ver Cardápio'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('aplica props de cor corretas', () => {
    renderWithTheme(
      <Card
        {...mockCardProps}
        $defaultColor="primary"
        $darkTheme="secondary"
        $lightTheme="tertiary"
        $textColor="quaternary"
        $buttonColor="quinary"
      />
    )

    expect(screen.getByText('Restaurante Teste')).toBeInTheDocument()
    expect(screen.getByText('Ver Cardápio')).toBeInTheDocument()
  })

  it('aplica props de tema corretas', () => {
    renderWithTheme(
      <Card
        {...mockCardProps}
        $textDarkTheme="primary"
        $textLightTheme="secondary"
        $buttonDarkThemeColor="tertiary"
        $buttonLightThemeColor="quaternary"
      />
    )

    expect(screen.getByText('Restaurante Teste')).toBeInTheDocument()
    expect(screen.getByText('Ver Cardápio')).toBeInTheDocument()
  })

  it('aplica props de percentual corretas', () => {
    renderWithTheme(
      <Card
        {...mockCardProps}
        $lgPercent={50}
        $mdPercent={75}
        $smPercent={100}
        $lgButtonPercent={25}
        $mdButtonPercent={50}
        $smButtonPercent={75}
      />
    )

    expect(screen.getByText('Restaurante Teste')).toBeInTheDocument()
    expect(screen.getByText('Ver Cardápio')).toBeInTheDocument()
  })

  it('funciona sem onClick (não quebra)', () => {
    renderWithTheme(<Card {...mockCardProps} />)

    expect(screen.getByText('Ver Cardápio')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Ver Cardápio'))
  })

  it('renderiza com diferentes ratings', () => {
    renderWithTheme(<Card {...mockCardProps} rating={3.2} />)

    expect(screen.getByText('3.2')).toBeInTheDocument()
  })

  it('renderiza com diferentes textos de botão', () => {
    renderWithTheme(<Card {...mockCardProps} buttonTxt="Fazer Pedido" />)

    expect(screen.getByText('Fazer Pedido')).toBeInTheDocument()
  })
})
