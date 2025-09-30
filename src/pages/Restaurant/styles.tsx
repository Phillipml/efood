import { Container } from '@/components/layout/CardList/styles'
import { pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'
import { tablet, mobile } from '@/styles/breakpoints'

export const ItemsList = styled(Container)`
  grid-template-columns: repeat(3, 1fr);
  ${tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mobile} {
    grid-template-columns: 1fr;
  }

  ${pxToRem('gap', { lgScreen: 32 })}
  > div {
    ${pxToRem('padding', { lgScreen: 8 })}
  }
`
