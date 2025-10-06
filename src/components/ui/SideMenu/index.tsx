import Overlay from '../../layout/Overlay'
import Cart from './Cart'
import { SideMenuStyled } from './styles'

function SideMenu() {
  return (
    <Overlay $justifyContent="end" type="sideMenu">
      <SideMenuStyled>
        <Cart />
      </SideMenuStyled>
    </Overlay>
  )
}

export default SideMenu
