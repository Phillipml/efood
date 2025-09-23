import Card, { type CardProps } from '@/components/ui/Card'
import { Container } from './styles'

export type CardData = {
  id: string
  image: string
  name: string
  rating?: number
  description: string
  isFeatured?: boolean
  foodType?: string
}

type cardListType = Omit<
  CardProps,
  'image' | 'name' | 'rating' | 'description' | 'isFeatured' | 'foodType'
> & {
  cards: CardData[]
}

const CardList = ({
  buttonTxt,
  $lgButtonPercent,
  $mdButtonPercent,
  $smButtonPercent,
  $defaultColor,
  $darkTheme = 'secondary',
  $lightTheme = 'primary',
  $buttonColor,
  $buttonDarkThemeColor,
  $buttonLightThemeColor,
  $buttonTextColor,
  $buttonTextDarkTheme,
  $buttonTextLightTheme,
  $textColor,
  $textDarkTheme,
  $textLightTheme,
  onClick,
  cards
}: cardListType) => {
  return (
    <Container>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          description={card.description}
          rating={card.rating}
          isFeatured={card.isFeatured}
          foodType={card.foodType}
          $lgButtonPercent={$lgButtonPercent}
          $mdButtonPercent={$mdButtonPercent}
          $smButtonPercent={$smButtonPercent}
          $defaultColor={$defaultColor}
          $darkTheme={$darkTheme}
          $lightTheme={$lightTheme}
          $buttonColor={$buttonColor}
          $buttonDarkThemeColor={$buttonDarkThemeColor}
          $buttonLightThemeColor={$buttonLightThemeColor}
          buttonTxt={buttonTxt}
          $buttonTextColor={$buttonTextColor}
          $buttonTextDarkTheme={$buttonTextDarkTheme}
          $buttonTextLightTheme={$buttonTextLightTheme}
          $textColor={$textColor}
          $textDarkTheme={$textDarkTheme}
          $textLightTheme={$textLightTheme}
          onClick={onClick}
        />
      ))}
    </Container>
  )
}
export default CardList
