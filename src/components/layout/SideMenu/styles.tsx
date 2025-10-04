import { CloseButton, ModalContent } from '@/components/ui/Modal/styles'
import { setColor } from '@/utils/color-utils'
import { pxToRem } from '@/utils/size-utils'
import styled, { css } from 'styled-components'

export const SideMenuStyled = styled.aside`
  ${pxToRem('width', { lgScreen: 360 })}
  height: 100vh;
  ${pxToRem('padding', { lgScreen: 8 })};
  ${({ theme }) => css`
    background-color: ${setColor(theme, {
      light: 'tertiary',
      dark: 'secondary'
    })};
  `}
`
export const CartWrapper = styled.div`
  display: grid;
  ${pxToRem('gap', { lgScreen: 8 })}
  ${pxToRem('padding-top', { lgScreen: 16 })}
  ${pxToRem('padding-bottom', { lgScreen: 32 })}
  
`
export const CartItem = styled(ModalContent)`
  ${pxToRem('padding', { lgScreen: 8 })}
  width: 100%;
  ${pxToRem('height', { lgScreen: 100 })}
  background-color: ${({ theme }) => theme.quinary};
  grid-template-columns: unset;
  display: flex;
  ${({ theme }) => css`
    background-color: ${setColor(theme, {
      light: 'secondary',
      dark: 'tertiary'
    })};
  `};

  img {
    ${pxToRem('width', { lgScreen: 80 })}
    ${pxToRem('height', { lgScreen: 80 })}
  }
  div {
    margin-top: unset;
    ${pxToRem('margin-left', { lgScreen: 8 })}
  }
`
export const AmountValue = styled.div`
  display: flex;
  justify-content: space-between;
  ${pxToRem('padding-bottom', { lgScreen: 20 })}
`
export const RemoveButton = styled(CloseButton)`
  top: unset;
  bottom: 8px;
  ${({ theme }) => css`
    > svg {
      ${pxToRem('font-size', { lgScreen: 16, smScreen: 24 })}
      color: ${setColor(theme, {
        light: 'tertiary',
        dark: 'secondary'
      })};
    }
  `}
`
