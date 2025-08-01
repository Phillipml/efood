import styled, { css } from 'styled-components'
import { FontSize, PercentSize } from '@/utils/size-utils'
import type { ColorsVariants } from '@/types'
import { setColor } from '@/utils/color-utils'
export const Container = styled.div<ColorsVariants>`
  ${({ theme, lightTheme, darkTheme }) => css`
    position: relative;
    display: grid;
    ${PercentSize('width', { lgScreen: 100 })};
    height: auto;
    background-color: ${setColor({
      light: (lightTheme = 'primary'),
      dark: (darkTheme = 'secondary')
    })};
    border: 1px solid ${theme.tertiary};
    > img {
      width: 100%;
      object-fit: cover;
    }
    > div {
      display: grid;
      justify-content: space-between;
      gap: 1rem;
      height: 100%;
      padding: 0.5rem;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
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
export const Button = styled.button`
  ${PercentSize('width', { lgScreen: 25 })}
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
  border: none;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.tertiary};
  cursor: pointer;
`
