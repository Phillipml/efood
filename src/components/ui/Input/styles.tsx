import { setColor } from '@/utils/color-utils'
import { FontSize, pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const InputWraper = styled.div`
  display: grid;
  ${pxToRem('margin-bottom', { lgScreen: 8 })}
`
export const InputStyled = styled.input`
  border: none;
  width: 100%;
  ${pxToRem('margin-top', { lgScreen: 8 })}
  ${pxToRem('padding', { lgScreen: 8 })}
  color:#4B4B4B
  ${FontSize({ lgScreen: 'md' })};
  font-weight: bold;
  background-color: ${({ theme }) =>
    setColor(theme, { dark: 'tertiary', light: 'secondary' })};
  outline: unset;
`
