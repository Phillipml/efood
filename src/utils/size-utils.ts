import { mobile, tablet } from '@styles/breakpoints'
import { css } from 'styled-components'
export const PercentSize = (
  tag: string,
  {
    lgScreen,
    mdScreen,
    smScreen
  }: {
    lgScreen?: number
    mdScreen?: number
    smScreen?: number
  }
) => {
  const getPercentNumber = (value: number): string => {
    return `${value}%`
  }
  const tabletQuery = mdScreen
    ? `${tablet}{
  ${tag}: ${getPercentNumber(mdScreen || lgScreen || 100)};
  }`
    : ''
  const mobileQuery = smScreen
    ? ` ${mobile}{
      ${tag}: ${getPercentNumber(smScreen || mdScreen || lgScreen || 100)};
    }`
    : ''

  const css = `
      ${tag}: ${getPercentNumber(lgScreen || 100)};
      ${tabletQuery}
      ${mobileQuery}
    `
  return css
}
export const FontSize = ({
  lgScreen,
  mdScreen,
  smScreen
}: {
  lgScreen?: string
  mdScreen?: string
  smScreen?: string
}) => {
  const sizes = {
    sm: '0.625rem',
    md: '0.875rem',
    lg: '1.125rem',
    xl: '2.25rem'
  }
  const getSize = (value?: string) => {
    return !value
      ? '0.875rem'
      : Object.entries(sizes).find(([k]) => k === value)?.[1] || '0.875rem'
  }

  return css`
    font-size: ${getSize(lgScreen)};
    ${mdScreen &&
    css`
      @media (max-width: 1024px) {
        font-size: ${getSize(mdScreen)};
      }
    `}
    ${smScreen &&
    css`
      @media (max-width: 768px) {
        font-size: ${getSize(smScreen)};
      }
    `}
  `
}
export const RemSize = (
  tag: 'width' | 'height',
  {
    lgScreen,
    mdScreen,
    smScreen
  }: {
    lgScreen: string
    mdScreen: string
    smScreen: string
  }
) => {
  const sizes = {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
  const axis = tag
  const getSize = (value: string) => {
    return !value
      ? '1rem'
      : Object.entries(sizes).find(([k]) => k === value)?.[1]
  }

  const tabletQuery = mdScreen
    ? `${tablet}{
        ${axis}: ${getSize(mdScreen)}
        }`
    : ''
  const mobileQuery = smScreen
    ? `${tablet}{
          ${axis} ${getSize(smScreen)}
          }`
    : ''
  const css = `
      ${axis}: ${getSize(lgScreen)};
    ${tabletQuery}
    ${mobileQuery}
      `

  return css
}

export const ViewportSize = (
  unit: 'vw' | 'vh',
  {
    lgScreen,
    mdScreen,
    smScreen
  }: { lgScreen: number; mdScreen: number; smScreen: number }
) => {
  const axis = unit === 'vw' ? 'width' : 'heigth'
  const value = (value: number) => (!value ? `100${unit}` : `${value}${unit};`)
  const tabletQuery = mdScreen
    ? `${tablet}{
      ${axis}: ${value(mdScreen)}
      }`
    : ''
  const mobileQuery = smScreen
    ? `${tablet}{
        ${axis} ${value(smScreen)}
        }`
    : ''
  const css = `
        ${axis}: ${value(lgScreen)}
        ${tabletQuery}
        ${mobileQuery}
      `
  return css
}
