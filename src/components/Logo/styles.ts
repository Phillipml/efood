import type { PercentProps } from '@/types/sizes'
import { PercentSize } from '@/utils/size-utils'
import styled, { css } from 'styled-components'

export const LogoStyled = styled.img<PercentProps>`
  ${({ theme, $lgPercentWidth, $mdPercentWidth, $smPercentWidth }) => css`
    color: ${theme.tertiary};
    ${PercentSize('width', {
      lgScreen: $lgPercentWidth,
      mdScreen: $mdPercentWidth,
      smScreen: $smPercentWidth
    })}
  `}
`
