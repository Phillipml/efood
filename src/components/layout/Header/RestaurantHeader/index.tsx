import { Logo } from '@/components/ui/Brand'
import Text from '@/components/ui/Text'
import { HeaderRestaurantWrap, RestaurantContainer } from './styles'
import { useAppSelector } from '@/store/hooks'
import { cartTotalItems } from '@/store/cart/cartSelector'
import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import { useOverlay } from '@/hooks/useOverlay'
export const RestaurantHeader = () => {
  const count = useAppSelector(cartTotalItems)
  const { setCart } = useCheckoutStep()
  const { showSideMenu } = useOverlay()
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

        <button
          onClick={() => {
            setCart()
            showSideMenu()
          }}
        >
          {count} produto(s) no carrinho
        </button>
      </RestaurantContainer>
    </HeaderRestaurantWrap>
  )
}
