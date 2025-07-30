import { FontSize } from '@/utils/size-utils'
import { setColor } from '@/utils/theme-utils'
import styled, { css } from 'styled-components'
import type { TextProps } from '.'

export const TextContent = styled.p<Omit<TextProps, 'children' | 'as'>>`
  ${({ $lgFontSize, $mdFontSize, $smFontSize, variant, alignCenter }) => css`
    color: ${setColor(variant)};
    ${FontSize({
      lgScreen: $lgFontSize,
      mdScreen: $mdFontSize,
      smScreen: $smFontSize
    })}
    text-align: ${alignCenter ? 'center' : 'left'};
  `}
`
