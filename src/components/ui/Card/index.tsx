import { FaStar } from 'react-icons/fa6'
import Text from '@/components/ui/Text'
import { Container, Rating } from './styles'
import Button, { type ButtonTypes } from '@/components/ui/Button'
import type { ColorsVariants, Variant } from '@/types'

export type CardProps = {
  image: string
  name: string
  rating: string
  description: string
  buttonTxt: string
  $textColor?: Variant
  $textDarkTheme?: Variant
  $textLightTheme?: Variant
} & ButtonTypes &
  ColorsVariants
const Card = ({
  image,
  name,
  rating,
  description,
  buttonTxt,
  $lgPercent,
  $defaultColor,
  $darkTheme = 'secondary',
  $lightTheme = 'primary',
  $buttonColor,
  $buttonDarkThemeColor,
  $buttonLightThemeColor,
  $textColor,
  $textDarkTheme,
  $textLightTheme,
  $buttonTextColor,
  $buttonTextDarkTheme,
  $buttonTextLightTheme,
  onClick
}: CardProps) => {
  return (
    <Container
      $defaultColor={$defaultColor}
      $darkTheme={$darkTheme}
      $lightTheme={$lightTheme}
    >
      <img src={image} alt={name + ' image'} />
      <div>
        <div>
          <Text
            as="title"
            $lgFontSize="lg"
            $defaultColor={$textColor}
            $darkTheme={$textDarkTheme}
            $lightTheme={$textLightTheme}
          >
            {name}
          </Text>
          <Rating>
            <Text
              as="span"
              $lgFontSize="lg"
              $defaultColor={$textColor}
              $darkTheme={$textDarkTheme}
              $lightTheme={$textLightTheme}
            >
              {rating}
            </Text>
            <FaStar />
          </Rating>
        </div>
        <Text
          $defaultColor={$textColor}
          $darkTheme={$textDarkTheme}
          $lightTheme={$textLightTheme}
        >
          {description}
        </Text>

        <Button
          $lgPercent={$lgPercent}
          $buttonColor={$buttonColor}
          $buttonDarkThemeColor={$buttonDarkThemeColor}
          $buttonLightThemeColor={$buttonLightThemeColor}
          $buttonTextColor={$buttonTextColor}
          $buttonTextDarkTheme={$buttonTextDarkTheme}
          $buttonTextLightTheme={$buttonTextLightTheme}
          onClick={onClick}
        >
          {buttonTxt}
        </Button>
      </div>
    </Container>
  )
}
export default Card
