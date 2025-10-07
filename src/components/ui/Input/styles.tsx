import { FontSize, pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const InputWraper = styled.div`
  display: grid;
  ${pxToRem('margin-bottom', { lgScreen: 8 })}
`
export const InputStyled = styled.input`
  border: none;
  ${pxToRem('margin-top', { lgScreen: 8 })}
  ${pxToRem('padding', { lgScreen: 8 })}
  color:#4B4B4B
  ${FontSize({ lgScreen: 'md' })};
  font-weight: bold;
`
