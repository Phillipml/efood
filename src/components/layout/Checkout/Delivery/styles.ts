import { pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const FormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  > h2 {
    ${pxToRem('margin-top', { lgScreen: 28 })}
    ${pxToRem('margin-bottom', { lgScreen: 24 })}
    ${pxToRem('font-size', { lgScreen: 16 })}
  }

  .cep {
    display: flex;
    ${pxToRem('gap', { lgScreen: 8 })}
  }
  button:first-of-type {
    ${pxToRem('margin-top', { lgScreen: 16 })}
    ${pxToRem('margin-bottom', { lgScreen: 8 })}
  }
`
