import { FaStar } from 'react-icons/fa6'
import Text from '@/components/ui/Text'
import { Container, Rating } from './styles'
import Button, { type ButtonTypes } from '@/components/ui/Button'
import type { ColorsVariants, TextColorsVariants, PercentProps } from '@/types'
import TagList from '@/components/ui/TagList'

export type CardProps = {
  image: string
  name: string
  rating?: number
  description: string
  buttonTxt: string
  isFeatured?: boolean
  foodType?: string
} & ButtonTypes &
  ColorsVariants &
  TextColorsVariants &
  PercentProps
const Card = ({
  image,
  name,
  rating,
  description,
  buttonTxt,
  isFeatured = false,
  foodType,
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
  $lgButtonPercent,
  $mdButtonPercent,
  $smButtonPercent,
  onClick,
  $lgPercent,
  $mdPercent,
  $smPercent
}: CardProps) => {
  return (
    <Container
      $defaultColor={$defaultColor}
      $darkTheme={$darkTheme}
      $lightTheme={$lightTheme}
      $lgPercent={$lgPercent}
      $mdPercent={$mdPercent}
      $smPercent={$smPercent}
    >
      <TagList isFeatured={isFeatured} foodType={foodType} />
      <img src={image} alt={name + ' image'} />
      <div>
        <div>
          <Text
            as="title"
            $lgFontSize="lg"
            $textColor={$textColor}
            $textDarkTheme={$textDarkTheme}
            $textLightTheme={$textLightTheme}
          >
            {name}
          </Text>
          {rating && (
            <Rating>
              <Text
                as="span"
                $lgFontSize="lg"
                $textColor={$textColor}
                $textDarkTheme={$textDarkTheme}
                $textLightTheme={$textLightTheme}
              >
                {rating}
              </Text>
              <FaStar />
            </Rating>
          )}
        </div>
        <Text
          $textColor={$textColor}
          $textDarkTheme={$textDarkTheme}
          $textLightTheme={$textLightTheme}
        >
          {description}
        </Text>

        <Button
          $lgButtonPercent={$lgButtonPercent}
          $mdButtonPercent={$mdButtonPercent}
          $smButtonPercent={$smButtonPercent}
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
