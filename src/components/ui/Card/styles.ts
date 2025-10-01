import styled, { css } from 'styled-components'
import { FontSize, PercentSize, pxToRem } from '@/utils/size-utils'
import type { ColorsVariants, PercentProps } from '@/types'
import { setColor } from '@/utils/color-utils'
import { fadeIn } from '@/utils/styles-utils'

type ContainerProps = ColorsVariants & PercentProps
export const Container = styled.div<ContainerProps>`
  ${({
    theme,
    $defaultColor,
    $lightTheme,
    $darkTheme,
    $lgPercent,
    $mdPercent,
    $smPercent
  }) => css`
    position: relative;
    display: grid;
    align-items: center;
    justify-content:center;
    ${PercentSize('width', { lgScreen: $lgPercent, mdScreen: $mdPercent, smScreen: $smPercent })};
    height: auto;
    background-color: ${setColor(theme, {
      unique: $defaultColor,
      light: $lightTheme,
      dark: $darkTheme
    })};
    border: 1px solid ${theme.tertiary};
    > img {
      width: 100%;
      ${pxToRem('height', { lgScreen: 168 })}
      object-fit: cover;
      ${fadeIn}
    }
    > div {
      display: grid;
      align-items: center;
      gap: 1rem;
      height: 100%;
      padding: 0.5rem;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    
    > div:first-child {
      display: flex !important;
      flex-direction: row !important;
      gap: 0.5rem !important;
      flex-wrap: nowrap !important;
    }
  `}
`
export const Rating = styled.div`
  display: flex;
  justify-content: end;
  font-weight: bold;
  align-items: center;
  > svg {
    color: ${({ theme }) => theme.quaternary};
    ${FontSize({ lgScreen: 'lg' })}
  }
`
