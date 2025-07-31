import { FontSize } from '@/utils/size-utils'
import { setColor } from '@/utils/color-utils'
import styled, { css } from 'styled-components'
import type { TextProps } from '.'

export const TextContent = styled.p<Omit<TextProps, 'children' | 'as'>>`
  ${({
    $lgFontSize,
    $mdFontSize,
    $smFontSize,
    color,
    darkTheme,
    lightTheme,
    alignCenter
  }) => css`
    color: ${setColor({
      unique: color,
      dark: darkTheme,
      light: lightTheme
    })};
    ${FontSize({
      lgScreen: $lgFontSize,
      mdScreen: $mdFontSize,
      smScreen: $smFontSize
    })}
    text-align: ${alignCenter ? 'center' : 'left'};
  `}
`
