import { setColor } from '@/utils/color-utils'
import { FontSize, pxToRem } from '@/utils/size-utils'
import styled, { css } from 'styled-components'
type  errorProps = {
  $hasError: boolean
}

export const InputWraper = styled.div`
  display: grid;
  ${pxToRem('margin-bottom', { lgScreen: 8 })}
`
export const InputStyled = styled.input<errorProps>`
  width: 100%;
  ${pxToRem('margin-top', { lgScreen: 8 })}
  ${pxToRem('padding', { lgScreen: 8 })}
  color:#4B4B4B
  ${FontSize({ lgScreen: 'md' })};
  font-weight: bold;

  outline: unset;
  ${({ $hasError, theme }) => css`
    border: ${$hasError ? '2px solid red' : 'none'};
    background-color: ${$hasError ? 'red': setColor(theme, { dark: 'tertiary', light: 'secondary' })};
  `}

`
