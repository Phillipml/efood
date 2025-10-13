import { pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const CheckoutText = styled.div`
  display: grid;
  padding-top: 80px;
  ${pxToRem('padding-top', { lgScreen: 16 })}
  ${pxToRem('gap', { lgScreen: 16 })}
  h2 {
    ${pxToRem('font-size', { lgScreen: 16 })}
  }
  div {
    display: grid;
    ${pxToRem('gap', { lgScreen: 28 })}
  }
  button {
    margin-top: 8px;
  }
`
