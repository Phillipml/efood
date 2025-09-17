import styled from 'styled-components'
import { HeaderWrapper, Container } from '../styles'
import { pxToRem } from '@/utils/size-utils'
import { mobile } from '@/styles/breakpoints'

export const HeaderRestaurantWrap = styled(HeaderWrapper)`
  ${pxToRem('height', { lgScreen: 186 })};
`

export const RestaurantContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile} {
    flex-direction: column;
  }
`
