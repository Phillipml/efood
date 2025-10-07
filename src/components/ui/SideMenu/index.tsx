// import Form from '@/components/layout/Form/DeliveryForm'
import Checkout from '@/components/layout/Checkout/Confirmation'
import Overlay from '../../layout/Overlay'
// import Cart from './Cart'
import { SideMenuStyled } from './styles'
// import PaymentForm from '@/components/layout/Form/PaymentForm'

function SideMenu() {
  return (
    <Overlay $justifyContent="end" type="sideMenu">
      <SideMenuStyled>
        <Checkout />
      </SideMenuStyled>
    </Overlay>
  )
}

export default SideMenu
