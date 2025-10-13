import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import Overlay from '../Overlay'
import Cart from './Cart'
import { SideMenuStyled } from './styles'
import Delivery from './Checkout/Delivery'
import PaymentForm from './Checkout/Payment'
import Checkout from './Checkout/Confirmation'

function SideMenu() {
  const { currentStep } = useCheckoutStep()
  const contentHandle = () => {
    if (currentStep == 'cart') {
      return <Cart />
    }
    if (currentStep == 'delivery') {
      return <Delivery />
    }
    if (currentStep == 'payment') {
      return <PaymentForm />
    }
    if (currentStep == 'checkout') {
      return <Checkout />
    }
  }
  return (
    <Overlay $justifyContent="end" type="sideMenu">
      <SideMenuStyled>{contentHandle()}</SideMenuStyled>
    </Overlay>
  )
}

export default SideMenu
