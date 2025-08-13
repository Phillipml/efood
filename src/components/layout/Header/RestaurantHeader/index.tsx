import { Logo } from '@/components/ui/Logo'
import Text from '@/components/ui/Text'
import { HeaderRestaurantWrap, RestaurantContainer } from './styles'
export const RestaurantHeader = () => {
  return (
    <HeaderRestaurantWrap>
      <RestaurantContainer>
        <Text
          as="title"
          color="tertiary"
          darkTheme="primary"
          $lgFontSize="lg"
          alignCenter={true}
        >
          Restaurantes
        </Text>
        <Logo $lgVw={10} $mdVw={22} />
        <Text
          as="title"
          color="tertiary"
          darkTheme="primary"
          $lgFontSize="lg"
          alignCenter={true}
        >
          0 produto(s) no carrinho
        </Text>
      </RestaurantContainer>
    </HeaderRestaurantWrap>
  )
}
