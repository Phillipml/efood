import styled, { css } from 'styled-components'
import type { OverlayType } from '.'
import { fadeIn } from '@/utils/styles-utils'
import { tablet } from '@/styles/breakpoints'
export const OverlayWrapper = styled.div<
  Omit<OverlayType, 'children' | 'openClose'>
>`
  ${({ $justifyContent }) => css`
    z-index: 9999;
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${$justifyContent};
    background-color: rgba(0, 0, 0, 0.2);
    ${fadeIn}
  `}
  ${tablet} {
    padding: 2%;
  }
`
