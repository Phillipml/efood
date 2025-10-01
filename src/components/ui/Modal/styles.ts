import { mobile } from '@/styles/breakpoints'
import { MainContainer } from '@/styles/reset'
import { pxToRem } from '@/utils/size-utils'

import styled from 'styled-components'

export const ModalContent = styled(MainContainer)`
  position: relative;
  height: auto;
  ${pxToRem('padding', { lgScreen: 33 })}
  background-color: ${({ theme }) => theme.tertiary};
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  ${mobile} {
    grid-template-columns: 1fr;
  }

  img {
    ${pxToRem('width', { lgScreen: 280 })}
    ${pxToRem('height', { lgScreen: 280 })}
    
    object-fit:cover;
    ${mobile} {
      width: 100%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    ${pxToRem('gap', { lgScreen: 16 })}
    ${pxToRem('line-height', { lgScreen: 22 })}
    ${pxToRem('margin-top', { smScreen: 8 })}
    height: auto;
    button {
      ${pxToRem('margin-top', { smScreen: 14 })}
    }
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  > svg {
    ${pxToRem('font-size', { lgScreen: 24 })}
    color: ${({ theme }) => theme.primary};
  }
`
