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
  > * {
    flex: 1;
    width: 33.333%;
    display: flex;
    align-items: center;
    &:first-child {
      justify-content: flex-start;
    }
    &:nth-child(2) {
      justify-content: center;
    }
    &:last-child {
      justify-content: flex-end;
    }
  }

  img {
    margin: 0 auto;
  }

  ${mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > * {
      width: 100%;
      margin-bottom: 1rem;

      &:first-child {
        justify-content: center;
        order: 2;
      }
      &:nth-child(2) {
        order: 1;
      }
      &:last-child {
        justify-content: center;
        order: 3;
      }
    }
  }
`
