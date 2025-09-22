import type { FontSizeOptions } from '@/types'
import { mobile, tablet } from '@styles/breakpoints'
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
    ? `${mobile}{
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
    const remSize = !value
      ? '0.875rem'
      : Object.entries(sizes).find(([size]) => size === value)?.[1] ||
        '0.875rem'
    return `font-size: ${remSize};`
  }
  const mdQuery = `${tablet}{${getSize(mdScreen)}};`
  const smQuery = `${mobile}{${getSize(smScreen)}};`

  const css = `
    ${getSize(lgScreen)};
    ${mdScreen ? mdQuery : ''}
    ${smScreen ? smQuery : ''}
  `
  return css
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
  const getSize = (value?: number) => {
    if (!value) return '1rem'
    const numberToRem = value / 16
    return `${numberToRem}rem`
  }
  const tabletQuery = `${tablet}{ ${tag}: ${getSize(mdScreen)}; }`
  const mobileQuery = `${mobile}{ ${tag}: ${getSize(smScreen)}; }`
  const css = `
  ${tag}: ${getSize(lgScreen)};
  ${mdScreen ? tabletQuery : ''}
  ${smScreen ? mobileQuery : ''}`

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
  const value = (value?: number) => {
    if (value === 0) {
      return `0${unit};`
    }
    if (!value) {
      return `100${unit};`
    }
    return `${value}${unit};`
  }
  const tabletQuery = mdScreen
    ? `${tablet}{
      ${axis}: ${value(mdScreen)}
      }`
    : ''
  const mobileQuery = smScreen
    ? `${mobile}{
        ${axis}: ${value(smScreen)}
        }`
    : ''
  const css = `
        ${axis}: ${value(lgScreen)}
        ${tabletQuery}
        ${mobileQuery}
      `
  return css
}
