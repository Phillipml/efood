import type { VwProps } from '@/types'
import { ViewportSize } from '@/utils/size-utils'
import styled, { css } from 'styled-components'

export const LogoStyled = styled.img<VwProps>`
  ${({ $lgVw, $mdVw, $smVw }) => css`
    ${ViewportSize('vw', {
      lgScreen: $lgVw,
      mdScreen: $mdVw,
      smScreen: $smVw
    })}
  `}
`
export const IconStyled = styled(LogoStyled)`
  color: ${({ theme }) => theme.secondary};
`
