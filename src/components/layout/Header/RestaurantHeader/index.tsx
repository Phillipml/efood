import { Logo } from '@/components/ui/Brand'
import Text from '@/components/ui/Text'
import { HeaderRestaurantWrap, RestaurantContainer } from './styles'
export const RestaurantHeader = () => {
  return (
    <HeaderRestaurantWrap>
      <RestaurantContainer>
        <Text
          as="title"
          $textColor="tertiary"
          $textDarkTheme="primary"
          $lgFontSize="lg"
        >
          Restaurantes
        </Text>
        <Logo $lgRem={125} />
        <Text
          as="title"
          $textColor="tertiary"
          $textDarkTheme="primary"
          $lgFontSize="lg"
         
        >
          0 produto(s) no carrinho
        </Text>
      </RestaurantContainer>
    </HeaderRestaurantWrap>
  )
}
