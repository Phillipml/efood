import { useCheckoutStep } from '@/hooks/useCheckoutStep'
import Overlay from '../../layout/Overlay'
import Cart from './Cart'
import { SideMenuStyled } from './styles'
import Delivery from '@/components/layout/Checkout/Delivery'
import PaymentForm from '@/components/layout/Checkout/Payment'
import Checkout from '@/components/layout/Checkout/Confirmation'

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
