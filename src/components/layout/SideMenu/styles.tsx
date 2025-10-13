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
