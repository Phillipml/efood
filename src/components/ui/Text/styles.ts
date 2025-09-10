import { FontSize } from '@/utils/size-utils'
import { setColor } from '@/utils/color-utils'
import styled, { css } from 'styled-components'
import type { TextProps } from '.'

export const TextContent = styled.p<Omit<TextProps, 'children' | 'as'>>`
  ${({
    $lgFontSize,
    $mdFontSize,
    $smFontSize,
    $textColor,
    $textDarkTheme,
    $textLightTheme,
    $alignCenter
  }) => css`
    color: ${setColor({
      unique: $textColor,
      dark: $textDarkTheme,
      light: $textLightTheme
    })}
    ${FontSize({
      lgScreen: $lgFontSize,
      mdScreen: $mdFontSize,
      smScreen: $smFontSize
    })}
    text-align: ${$alignCenter ? 'center' : 'left'};
  `}
`
