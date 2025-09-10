import { FontSize, PercentSize } from '@/utils/size-utils'
import styled, { css } from 'styled-components'
import type { ButtonTypes } from './'
import { setColor } from '@/utils/color-utils'
export const ButtonStyled = styled.button<Omit<ButtonTypes, 'children'>>`
  ${({
    $lgFontSize,
    $mdFontSize,
    $smFontSize,
    $lgPercent,
    $mdPercent,
    $smPercent,
    $buttonColor,
    $buttonDarkThemeColor,
    $buttonLightThemeColor,
    $buttonTextColor,
    $buttonTextDarkTheme,
    $buttonTextLightTheme,
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
    background-color: ${setColor({
      unique: $buttonColor,
      dark: $buttonDarkThemeColor,
      light: $buttonLightThemeColor
    })}
    color: ${setColor({
      unique: $buttonTextColor,
      dark: $buttonTextDarkTheme,
      light: $buttonTextLightTheme
    })}
  `}
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
  border: none;
  cursor: pointer;
`
