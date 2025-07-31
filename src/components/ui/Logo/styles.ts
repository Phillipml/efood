import type { VwProps } from '@/types/sizes'
import { ViewportSize } from '@/utils/size-utils'
import styled, { css } from 'styled-components'

export const LogoStyled = styled.img<VwProps>`
  ${({ theme, $lgVw, $mdVw, $smVw }) => css`
    color: ${theme.tertiary};
    ${ViewportSize('vw', {
      lgScreen: $lgVw,
      mdScreen: $mdVw,
      smScreen: $smVw
    })}
  `}
`
