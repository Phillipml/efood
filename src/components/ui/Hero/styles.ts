import { MainContainer } from '@/styles/reset'
import { pxToRem } from '@/utils/size-utils'
import { fadeIn } from '@/utils/styles-utils'
import styled from 'styled-components'

export const RestaurantHero = styled.div`
  width: 100%;
  position: relative;
  ${pxToRem('height', { lgScreen: 280 })}

  img {
    display: none;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${fadeIn}
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    pointer-events: none;
  }
`

export const HeroContainer = styled(MainContainer)`
  z-index: 3;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${pxToRem('padding-top', { lgScreen: 25 })}
  ${pxToRem('padding-bottom', { lgScreen: 32 })}

  > p {
    font-weight: lighter;
  }
`
