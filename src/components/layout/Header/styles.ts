import { MainContainer } from '@/styles/reset'
import { pxToRem } from '@utils/size-utils'
import { css, styled } from 'styled-components'
import iconSvg from '@assets/images/icon.svg?raw'
import type { ColorsVariants, RemProps } from '@/types'
import { setColor } from '@/utils/color-utils'

type LogoProps = ColorsVariants & RemProps

export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const HeaderWrapper = styled.header<LogoProps>`
  ${({
    theme,
    $defaultColor = 'secondary',
    $darkTheme = 'quaternary',
    $lgRem,
    $mdRem,
    $smRem
  }) => css`
    background-color: ${setColor(theme, {
      unique: $defaultColor,
      dark: $darkTheme
    })};
    ${pxToRem('height', {
      lgScreen: $lgRem || 384,
      mdScreen: $mdRem,
      smScreen: $smRem
    })}
  `}
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${pxToRem('padding', { lgScreen: 2 })};

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
