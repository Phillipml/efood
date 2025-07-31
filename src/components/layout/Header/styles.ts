import { MainContainer } from '@/styles/reset'
import { pxToRem } from '@utils/size-utils'
import styled from 'styled-components'
import iconSvg from '@assets/images/icon.svg?raw'
import type { ColorsVariants } from '@/types'
import { setColor } from '@/utils/color-utils'

export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const HeaderWrapper = styled.div<ColorsVariants>`
  position: relative;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${pxToRem('padding', { lgScreen: 2 })};
  background-color: ${({ color = 'secondary', darkTheme = 'quaternary' }) =>
    setColor({ unique: color, dark: darkTheme })};
  ${Container} {
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml,${encodeURIComponent(iconSvg)}');
    background-repeat: repeat;
    background-size: 50px 50px;
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;
  }
`
