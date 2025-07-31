import type { FontSizeOptions } from '@/types'
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
  lgScreen?: FontSizeOptions
  mdScreen?: FontSizeOptions
  smScreen?: FontSizeOptions
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
      : Object.entries(sizes).find(([size]) => size === value)?.[1] ||
          '0.875rem'
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
export const pxToRem = (
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
  const axis = tag
  const getSize = (value?: number) => {
    if (!value) return '1rem'
    const numberToRem = value / 16
    return `${numberToRem}rem`
  }

  let css = `${axis}: ${getSize(lgScreen)};`

  if (mdScreen) {
    css += `@media (max-width: 1024px) { ${axis}: ${getSize(mdScreen)}; }`
  }

  if (smScreen) {
    css += `@media (max-width: 768px) { ${axis}: ${getSize(smScreen)}; }`
  }

  return css
}
export const ViewportSize = (
  unit: 'vw' | 'vh',
  {
    lgScreen,
    mdScreen,
    smScreen
  }: { lgScreen?: number; mdScreen?: number; smScreen?: number }
) => {
  const axis = unit === 'vw' ? 'width' : 'heigth'
  const value = (value?: number) => (!value ? `100${unit}` : `${value}${unit};`)
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
