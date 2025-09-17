import type { RemProps,FontSizeProps } from '@/types'
import { FontSize, pxToRem } from '@/utils/size-utils'
import styled, { css } from 'styled-components'
type ThemeBtnProps = RemProps & FontSizeProps
export const ThemeBtn = styled.button<ThemeBtnProps>`
  ${({ theme, $lgRem = 24, $lgFontSize='lg'}) => css`
    ${pxToRem('padding', { lgScreen: $lgRem })};
    border-radius: 50%;
    border: 2px solid ${theme.secondary};
    background-color: ${theme.tertiary};
    color: ${({ theme }) => theme.secondary};
    ${FontSize({lgScreen:$lgFontSize})}
    &:hover {
      background-color: ${theme.quaternary};
      color: ${theme.tertiary};
    }
  `}
  position: fixed;
  bottom: 2vh;
  left: 2vw;
  display: flex;
  align-items: center;
  transition: 0.2s ease;
  cursor: pointer;
`
