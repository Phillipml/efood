import styled, { css } from 'styled-components'
import type { ModalType } from '.'
export const ModalWrapper = styled.div<
  Omit<ModalType, 'children' | 'openClose'>
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
  `}
`
