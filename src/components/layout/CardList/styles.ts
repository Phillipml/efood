import styled from 'styled-components'
import { mobile } from '@/styles/breakpoints'
import { MainContainer } from '@/styles/reset'
import { pxToRem } from '@/utils/size-utils'

export const Container = styled(MainContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  ${pxToRem('margin-top', { lgScreen: 56 })}
  ${pxToRem('margin-bottom', { lgScreen: 124 })}
  ${mobile} {
    grid-template-columns: 1fr;
  }
`
