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
  .card-number {
    display: grid;
    grid-template-columns: 70% 20%;
    ${pxToRem('gap', { lgScreen: 28 })}
    justify-content: space-between;
  }
  .card-data {
    display: flex;
    ${pxToRem('gap', { lgScreen: 34 })}
  }
  button:first-of-type {
    ${pxToRem('margin-top', { lgScreen: 16 })}
    ${pxToRem('margin-bottom', { lgScreen: 8 })}
  }
`
