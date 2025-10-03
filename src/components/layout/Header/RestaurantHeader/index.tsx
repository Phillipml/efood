import { Logo } from '@/components/ui/Brand'
import Text from '@/components/ui/Text'
import { HeaderRestaurantWrap, RestaurantContainer } from './styles'
import { useAppSelector } from '@/store/hooks'
import { cartTotalItems } from '@/store/cart/cartSelector'
export const RestaurantHeader = () => {
  const count = useAppSelector(cartTotalItems)
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
          {count} produto(s) no carrinho
        </Text>
      </RestaurantContainer>
    </HeaderRestaurantWrap>
  )
}
