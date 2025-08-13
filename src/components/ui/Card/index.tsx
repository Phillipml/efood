import { FaStar } from 'react-icons/fa6'
import Text from '@/components/ui/Text'
import { Container, Rating } from './styles'
import Button from '@/components/ui/Button'
import type { ColorsVariants } from '@/types'

type CardProps = {
  image: string
  name: string
  rating: string
  description: string
  buttonTxt: string
  $lgPercent?: number
  inverted?: boolean
} & ColorsVariants
const Card = ({
  image,
  name,
  rating,
  description,
  buttonTxt,
  $lgPercent,
  color,
  darkTheme = 'secondary',
  lightTheme = 'primary',
  inverted
}: CardProps) => {
  return (
    <Container color={color} darkTheme={darkTheme} lightTheme={lightTheme}>
      <img src={image} alt={name + ' image'} />
      <div>
        <div>
          <Text as="title" $lgFontSize="lg">
            {name}
          </Text>
          <Rating>
            <Text as="span" $lgFontSize="lg">
              {rating}
            </Text>
            <FaStar />
          </Rating>
        </div>
        <Text>{description}</Text>

        <Button $lgPercent={$lgPercent} inverted={inverted}>
          {buttonTxt}
        </Button>
      </div>
    </Container>
  )
}
export default Card
