import { FontSize, PercentSize } from '@/utils/size-utils'
import styled, { css } from 'styled-components'
import type { ButtonTypes } from './'
export const ButtonStyled = styled.button<Omit<ButtonTypes, 'children'>>`
  ${({
    inverted,
    theme,
    $lgFontSize,
    $mdFontSize,
    $smFontSize,
    $lgPercent,
    $mdPercent,
    $smPercent
  }) => css`
    ${PercentSize('width', {
      lgScreen: $lgPercent,
      mdScreen: $mdPercent,
      smScreen: $smPercent
    })};
    ${FontSize({
      lgScreen: $lgFontSize,
      mdScreen: $mdFontSize,
      smScreen: $smFontSize
    })}
    color: ${inverted ? theme.tertiary : theme.secondary};
    background-color: ${inverted ? theme.secondary : theme.tertiary};
  `}
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
  border: none;
  cursor: pointer;
`
