import { FaStar } from 'react-icons/fa6'
import Text from '@/components/ui/Text'
import { Container, Rating, Button } from './styles'

type CardProps = {
  image: string
  name: string
  rating: string
  description: string
  buttonTxt: string
}
const Card = ({ image, name, rating, description, buttonTxt }: CardProps) => {
  return (
    <Container>
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

        <Button>{buttonTxt}</Button>
      </div>
    </Container>
  )
}
export default Card
