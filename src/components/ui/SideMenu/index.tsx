import Form from '@/components/layout/Form/DeliveryForm'
import Overlay from '../../layout/Overlay'
// import Cart from './Cart'
import { SideMenuStyled } from './styles'
import PaymentForm from '@/components/layout/Form/PaymentForm'

function SideMenu() {
  return (
    <Overlay $justifyContent="end" type="sideMenu">
      <SideMenuStyled>
        <PaymentForm />
      </SideMenuStyled>
    </Overlay>
  )
}

export default SideMenu
