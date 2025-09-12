import { MainContainer } from '@/styles/reset'
import type { ColorsVariants } from '@/types'
import { setColor } from '@/utils/color-utils'
import { FontSize, PercentSize, pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const FooterWraper = styled.footer<ColorsVariants>`
  width: 100%;
  background-color: ${({
    theme,
    $defaultColor = 'secondary',
    $darkTheme = 'quaternary'
  }) => setColor(theme,{ unique: $defaultColor, dark: $darkTheme })};
  padding:2.5rem 0;
`
export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    ${PercentSize('width', { lgScreen: 30, mdScreen: 40 })};
    align-items: center;
    ${pxToRem('padding-bottom', { lgScreen: 32 })}
    div {
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      width: 50%;
      ${pxToRem('margin-top', { lgScreen: 32 })}
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0.4rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.tertiary};
        ${FontSize({ lgScreen: 'lg' })}
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`
