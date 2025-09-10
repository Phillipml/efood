import type { RemProps } from '@/types'
import { pxToRem } from '@/utils/size-utils'
import styled, { css } from 'styled-components'

export const LogoStyled = styled.img<RemProps>`
  ${({ $lgRem, $mdRem, $smRem }) => css`
    ${pxToRem('width', {
      lgScreen: $lgRem,
      mdScreen: $mdRem,
      smScreen: $smRem
    })}
  `}
`
export const IconStyled = styled(LogoStyled)`
  color: ${({ theme }) => theme.secondary};
`
