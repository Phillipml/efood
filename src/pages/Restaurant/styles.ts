import { mobile } from '@/styles/breakpoints'
import { MainContainer } from '@/styles/reset'
import { PercentSize, pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const ModalContent = styled(MainContainer)`
  ${PercentSize('width', { lgScreen: 94, smScreen: 70 })};
  height: auto;
  ${pxToRem('padding', { lgScreen: 8 })}
  background-color: ${({ theme }) => theme.tertiary};
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  ${mobile} {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    height: 100%;
    ${pxToRem('padding', { lgScreen: 8 })}
    object-fit:fill;
    ${mobile} {
      margin: 0 auto;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${pxToRem('padding', { lgScreen: 8 })}
    button {
      ${pxToRem('margin-top', { smScreen: 14 })}
    }
  }
`
